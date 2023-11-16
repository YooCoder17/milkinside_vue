/* eslint-disable */
import Hls from "hls.js";

function loadVideo(url) {
  return fetch(url, { mode: "cors" })
    .then(resp => resp.blob())
    .then(blob => URL.createObjectURL(blob))
    .catch(err => {});
}

export function MediaLoader(assets) {
  this.assetsToLoad = assets;
  this.loadedAssetKeys = {};
  this.assetHandlers = {};
  this.loadedAssets = {};
  this.assetsItems = 0;
  this.assetObjectURLs = {};
  this.hlsAssets = {};
  return this;
}

MediaLoader.prototype.loadSource = function(source) {
  if (source.type.toUpperCase() === "IMG") {
    this.loadImage(source);
  } else if (source.type.toUpperCase() === "VIDEO") {
    this.loadVideo(source);
  }
};

MediaLoader.prototype.loadFirst = function() {
  this.loadSource(this.assetsToLoad[0]);
  this.assetsItems += 1;
};

MediaLoader.prototype.loadAll = function() {
  for (let i = this.assetsItems; i < this.assetsToLoad.length; i++) {
    this.loadSource(this.assetsToLoad[i]);
  }
};

MediaLoader.prototype.loadImage = function(source) {
  let image = document.createElement("img");
  image.crossOrigin = this.crossOrigin || "anonymous";

  // handle our loaded data event inside the texture and tell our plane when the video is ready to play
  this.assetHandlers[source.name] = this._onSourceLoaded.bind(
    this,
    source.name,
    image
  );

  loadVideo(source.src).then(blobURL => {
    this.assetObjectURLs[source.name] = { type: "img", blobURL, asset: image };
    image.src = blobURL;
    this.assetHandlers[source.name]();
  });
  this.loadedAssets[source.name] = image;
};

MediaLoader.prototype.upgradeFragmentsIfNeeded = function(source) {
  let currentLevel = this.hlsAssets[source.name].currentLevel;
  let fragsToUpdate = this.hlsAssets[source.name].fragments
    .filter(
      frag =>
        frag !== null &&
        // !frag.redownloading &&
        frag.level < currentLevel
    );

  fragsToUpdate.map(frag => {
    this.hlsAssets[source.name].hls.trigger(Hls.Events.BUFFER_FLUSHING, {
      startOffset: frag.startPTS,
      endOffset: frag.endPTS
    });

    this.hlsAssets[source.name].fragments[frag.sn].redownloading = true;
  });
};

MediaLoader.prototype.loadVideo = function(source) {
  let video = document.createElement("video");

  video.crossOrigin = this.crossOrigin || "anonymous";
  video.preload = "none"; //true;
  video.muted = true;
  video.loop = true;
  video.setAttribute("playsinline", "");

  if ((source.hls) || source.name === "work") {
    if (Hls.isSupported()) {
      let hls = new Hls({
        enableWorker: false,
        // debug: true,
        abrBandWidthUpFactor: 2.0,
        manifestLoadingTimeOut: 60000,
        manifestLoadingMaxRetry: 3
      });

      hls.attachMedia(video);
      hls.startLevel = -1;

      hls.on(Hls.Events.ERROR, (event, data) => {
        if (data.fatal) {
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              // try to recover network error
              console.log("fatal network error encountered, try to recover");
              hls.startLoad();
              break;
            case Hls.ErrorTypes.MEDIA_ERROR:
              console.log("fatal media error encountered, try to recover");
              hls.recoverMediaError();
              break;
            default:
              // cannot recover
              console.log(`fata error: ${data.type} cannot recover`);
              hls.destroy();
              break;
          }
        }
      });

      hls.on(Hls.Events.MEDIA_ATTACHED, () => {
        let hlsFragments = null;
        this.hlsAssets[source.name] = {};
        this.hlsAssets[source.name]["hls"] = hls;
        this.hlsAssets[source.name]["fragments"] = null;
        this.hlsAssets[source.name]["currentLevel"] = 0;
        this.hlsAssets[source.name]["highestObsLevel"] = 0;
        this.hlsAssets[source.name]["maxLevel"] = 0;
        this.hlsAssets[source.name]["updateInterval"] = null;

        hls.loadSource(source.hls);
  ;
        hls.on(Hls.Events.FRAG_LOADED, (event, data) => {
          if (this.hlsAssets[source.name].fragments === null) {
            this.hlsAssets[source.name][
              "fragments"
            ] = hls.levels[0].details.fragments.map(_ => null);
            this._onSourceLoaded.bind(this, source.name, video)();
          }
        });
      });
    } else {
      video.src = video.canPlayType("application/vnd.apple.mpegurl")
        ? source.hls
        : source.src;
      video.load();
    }
  } else {
    let sourceURL = source.webm ? source.webm : source.src;
    if (source.forceEntireLoad) {
      loadVideo(sourceURL).then(blobURL => {
        video.src = blobURL;
        video.load();
        this.assetObjectURLs[source.name] = {
          type: "video",
          blobURL,
          asset: video
        };
        this.assetHandlers[source.name]();
      });
    } else {
      video.src = sourceURL;
      if (video.readyState > 3) {
        this._onSourceLoaded.bind(this, source.name, video)();
      } else {
        video.load();
        video.play();
      }
    }
  }

  this.assetHandlers[source.name] = this._onSourceLoaded.bind(
    this,
    source.name,
    video
  );

  if (source.name !== "work") {
    video.addEventListener(
	  source.hls ? "canplay" : "canplaythrough",
      this.assetHandlers[source.name],
      false
    );
  }
  this.loadedAssets[source.name] = video;
};

MediaLoader.prototype._onSourceLoaded = function(key, asset) {
  if (asset.tagName.toUpperCase() === "VIDEO") {
    asset.removeEventListener("canplaythrough", this.assetHandlers[key], false);
  } else if (asset.tagName.toUpperCase() === "IMG") {
    asset.removeEventListener("load", this.assetHandlers[key], false);
  }
  this.loadedAssetKeys[key] = -1;
  let keysLoaded = Object.keys(this.loadedAssetKeys);
  let allKeys = this.assetsToLoad.map(e => e.name);
  allKeys.sort();
  keysLoaded.sort();

  if (
    JSON.stringify(allKeys) === JSON.stringify(keysLoaded) &&
    this.onAllSourcesLoadedCallback
  ) {
    this.onAllSourcesLoadedCallback();
  }
  if (this.onSourceLoadedCallback) {
    this.onSourceLoadedCallback(key, asset);
  }
};

MediaLoader.prototype.onSourceLoaded = function(callback) {
  if (callback) {
    this.onSourceLoadedCallback = callback;
  }
  return this;
};

MediaLoader.prototype.onAllSourcesLoaded = function(callback) {
  if (callback) {
    this.onAllSourcesLoadedCallback = callback;
  }
  return this;
};

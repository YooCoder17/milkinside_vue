/* eslint-disable */
export const vertShader = `
    #ifdef GL_ES
    precision highp float;
    #endif

    // those are the mandatory attributes that the lib sets
    attribute vec3 aVertexPosition;
    attribute vec2 aTextureCoord;

    // those are mandatory uniforms that the lib sets and that contain our model view and projection matrix
    uniform mat4 uMVMatrix;
    uniform mat4 uPMatrix;

    uniform float uAnchorMode;

    // our texture matrix that will handle image cover
    uniform mat4 assetTextureMatrix;

    // if you want to pass your vertex and texture coords to the fragment shader
    varying vec3 vVertexPosition;
    varying vec2 vTextureCoord;

    void main() {
        vec3 vertexPosition = aVertexPosition;

        vec4 position = uPMatrix * uMVMatrix * vec4(vertexPosition, 1.0);

        if (uAnchorMode != 3.0) {
            position.y *= -1.0;
        }

        gl_Position = position;

        // set the varyings
        // here we use our texture matrix to calculate the accurate texture coords
        vTextureCoord = (assetTextureMatrix * vec4(aTextureCoord, 0.0, 1.0)).xy;
        vVertexPosition = vec3(vertexPosition.x, vertexPosition.y, vertexPosition.z);
    }
`;
export const fragShader = `
    #ifdef GL_ES
    precision highp float;
    #endif

    // get our varyings
    varying vec3 vVertexPosition;
    varying vec2 vTextureCoord;

    uniform float uOpacity;
    uniform float uScale;
    uniform float uAnchorMode;
    uniform vec2 uFOVCenter;
    uniform float uFOV;

    // our texture sampler (default name, to use a different name please refer to the documentation)
    uniform sampler2D assetTexture;

    vec2 isMirrored(vec2 scaledCoords) {
        vec2 texGridCoord = floor(scaledCoords);
        return mod(texGridCoord, 2.0);
    }

    // https://www.shadertoy.com/view/4s2GRR
    vec2 getFOVCoords(vec2 coords) {
        if (uFOV == 0.0) {
            return coords;
        }

	    vec2 fovCenter = uFOVCenter;
	    vec2 d = coords - fovCenter; //vector from center to current fragment
	    float r = sqrt(dot(d, d)); // distance of pixel from center

	    float power = 3.141592 / sqrt(dot(fovCenter, fovCenter))  * -1.3 * (uFOV / 200.0);

        float bind = fovCenter.y * fovCenter.y; //radius of 1:1 effect

        return fovCenter + normalize(d) * atan(r * -power * 10.0) * bind / atan(-power * bind * 10.0);
    }

    void main() {
        if (uOpacity == 0.0) {
            gl_FragColor = vec4(0, 0, 0, 0);
            return;
        }

        vec2 normCanvasCoords = vTextureCoord; // * 0.5 + 0.5;

        if (uAnchorMode == 1.0) {
            normCanvasCoords = 1.0 - normCanvasCoords;
        }

        normCanvasCoords = getFOVCoords(normCanvasCoords);

        vec2 scaledTextureCoords = normCanvasCoords / uScale;
        vec2 mirrorCoord = isMirrored(scaledTextureCoords);
        vec2 textureCoords = scaledTextureCoords - floor(scaledTextureCoords);

        if (mirrorCoord.x == 0.0) {
            textureCoords.x = 1.0 - textureCoords.x;
        }         
        if (mirrorCoord.y == 0.0) {
            textureCoords.y = 1.0 - textureCoords.y;
        }

        if (uAnchorMode == 1.0) {
            textureCoords = 1.0 - textureCoords;
        }
        if (uAnchorMode == 3.0) {
            textureCoords.y = 1.0 - textureCoords.y;
        }

        vec4 color = texture2D(assetTexture, vec2(1.0 - textureCoords.x, textureCoords.y));
        color.a = uOpacity;

        gl_FragColor = color;
        gl_FragColor.rgb *= gl_FragColor.a;
    }
`;
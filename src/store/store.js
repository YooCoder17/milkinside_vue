/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    loadedVideoData: [],
    nav_light: false,
    menu_services_selected_SectionIndex: 0,
    menu_about_selected_SectionIndex: 0,
    services_activeSectionIndex: 0,
    about_activeSectionIndex: 0,
    work_activeSectionIndex: 0,
    loader_video: null,
  },
  mutations: {
    ADD_VIDEODATA(state, value) {
      state.loadedVideoData = value;
    },
    SET_NAV_LIGHT(state, value) {
      state.nav_light = value;
    },
    SET_MENU_SERVICES_SELECTED_SECTIONINDEX(state, value) {
      state.menu_services_selected_SectionIndex = value;
    },
    SET_MENU_ABOUT_SELECTED_SECTIONINDEX(state, value) {
      state.menu_about_selected_SectionIndex = value;
    },
    SET_SERVICES_ACTIVESECTIONINDEX(state, value) {
      state.services_activeSectionIndex = value;
    },
    SET_ABOUT_ACTIVESECTIONINDEX(state, value) {
      state.about_activeSectionIndex = value;
    },
    SET_WORK_ACTIVESECTIONINDEX(state, value) {
      state.work_activeSectionIndex = value;
    },
    SET_LOADER_VIDEO(state, value) {
      state.loader_video = value;
    },
  },
});
export default store;
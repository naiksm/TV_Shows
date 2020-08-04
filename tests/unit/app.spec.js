import { shallowMount } from "@vue/test-utils";
import Vue from "vue";
import VueRouter from "vue-router";
import Vuetify from "vuetify";
import app from "../../src/App.vue";
import Home from "../../src/views/Home.vue";

describe("In App Component", () => {
  let appWrapper;
  const router = new VueRouter({ path: "/", name: "home" });

  beforeEach(() => {
    Vue.use(Vuetify);
    appWrapper = shallowMount(app, {
      Vue,
      router
    });
  });

  afterEach(() => {
    appWrapper.destroy();
  });

  it("is a Vue instance", () => {
    expect(appWrapper.isVueInstance).toBeTruthy();
  });

  it('it should have a div element with class="container"', () => {
    expect(appWrapper.html()).toContain("v-content-stub");
  });

  describe("it should load appHeader component", () => {
    it("it should load the app-header", () => {
      expect(Home).toBeTruthy();
    });

    it("it should have a <app-header-stub></app-header-stub>", () => {
      expect(appWrapper.html()).toContain("app-header-stub");
    });
  });
});

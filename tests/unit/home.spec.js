import { shallowMount } from "@vue/test-utils";
import Vue from "vue";
import VueRouter from "vue-router";
import Vuetify from "vuetify";
import Home from "../../src/views/Home.vue";
import { routes } from "../../src/router";

describe("In Home Component", () => {
  let homeWrapper;
  const router = new VueRouter({ routes });

  beforeEach(() => {
    Vue.use(Vuetify);
    homeWrapper = shallowMount(Home, {
      Vue,
      router
    });
  });

  afterEach(() => {
    homeWrapper.destroy();
  });

  it("is a Vue instance", () => {
    expect(homeWrapper.isVueInstance).toBeTruthy();
  });

  it('it should have a div element with class="container"', () => {
    expect(homeWrapper.html()).toContain("v-container-stub");
  });

  it("it should navigate to gallery", () => {
    homeWrapper.vm.gallerRouting();
    expect(homeWrapper.vm.$route.path).toBe("/gallery");
  });
});

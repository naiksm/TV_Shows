import { shallowMount } from "@vue/test-utils";
import Vue from "vue";
import VueRouter from "vue-router";
import Vuetify from "vuetify";
import header from "../../src/components/header/header.vue";
import { routes } from "../../src/router";

describe("In app-header Component", () => {
  let headerWrapper;
  const router = new VueRouter({ routes });

  beforeEach(() => {
    Vue.use(VueRouter);
    Vue.use(Vuetify);
    headerWrapper = shallowMount(header, {
      Vue,
      router
    });
    // eslint-disable-next-line no-undef
  });

  afterEach(() => {
    headerWrapper.destroy();
  });
  it("is a Vue instance", () => {
    expect(headerWrapper.isVueInstance).toBeTruthy();
  });
});

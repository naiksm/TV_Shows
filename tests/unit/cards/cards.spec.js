import { shallowMount } from "@vue/test-utils";
import Vue from "vue";
import VueRouter from "vue-router";
import Vuetify from "vuetify";
import AppCard from "@/components/cards/cards.vue";

describe("In app-card Component", () => {
  let appCardWrapper;
  beforeEach(() => {
    const imageSource = "http://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg";
    //const downloadImage = "https://www.themealdb.com/images/category/vegan.png";
    const auther = "Hitler";
    Vue.use(Vuetify);
    Vue.use(VueRouter);
    appCardWrapper = shallowMount(AppCard, {
      Vue,
      propsData: {
        imageSource: imageSource,
        //downloadImage: downloadImage,
        auther: auther
      }
    });
  });

  afterEach(() => {
    appCardWrapper.destroy();
  });

  it("is a Vue instance", () => {
    expect(appCardWrapper.isVueInstance).toBeTruthy();
  });
  it("it should have a <v-card> element", () => {
    expect(appCardWrapper.contains("v-card-stub")).toBe(true);
  });
  it("it should have a <v-img> element", () => {
    expect(appCardWrapper.contains("v-img-stub")).toBe(true);
  });
  it("it should have a <v-card-text> element", () => {
    expect(appCardWrapper.contains("v-card-text-stub")).toBe(true);
  });
  it("it should have a <v-card-actions> element", () => {
    expect(appCardWrapper.contains("v-card-actions-stub")).toBe(true);
  });
  it("it should have a <v-btn> element", () => {
    expect(appCardWrapper.contains("v-btn-stub")).toBe(true);
  });

  it("check props", () => {
    expect(appCardWrapper.vm.imageSource).toBe(
      "http://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg"
    );
  });
});

import { shallowMount } from "@vue/test-utils";
import Vue from "vue";
import VueRouter from "vue-router";
import Vuetify from "vuetify";
import GalleryList from "../../src/views/GalleryList";
import { routes } from "../../src/router";
import { getItemsPerPage } from "@/services/image-gallery-data/image-gallery-data.js";
jest.mock("@/services/image-gallery-data/image-gallery-data.js");
describe("In galleryList Component", () => {
  let galleryListWrapper;
  const router = new VueRouter({ routes });

  beforeEach(() => {
    Vue.use(Vuetify);
    galleryListWrapper = shallowMount(GalleryList, {
      Vue,
      router
    });
  });

  afterEach(() => {
    galleryListWrapper.destroy();
  });

  it("is a Vue instance", () => {
    expect(galleryListWrapper.isVueInstance).toBeTruthy();
  });

  it('it should have a div element with class="container"', () => {
    expect(galleryListWrapper.html()).toContain("v-container-stub");
  });

  // it("it should call ItemsPerPageClick and sets galleryListDetails", async () => {
  //   const result = [1, 2, 3];
  //   getItemsPerPage.mockImplementation(() => result);

  //   galleryListWrapper.vm.ItemsPerPageClick();
  //   expect(galleryListWrapper.vm.galleryListDetails).toEqual(result);
  //   // expect(galleryListWrapper.html()).toContain("v-container-stub");
  // });
});

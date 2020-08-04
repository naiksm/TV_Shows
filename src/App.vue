<template>
  <v-app>
    <app-header
      :showNavLink="showNavLink"
      :footerDescription="footerDescription"
      :links="navLinkUrl"
      :defaultPageUrl="defaultPageUrl"
      :headerMainTitle="headerMainTitle"
    />
    <v-content>
      <router-view></router-view>
    </v-content>
    <app-footer v-bind:footerDescription="footerDescription" />
  </v-app>
</template>

<script>
import { AppHeader, AppFooter } from "@/components";
export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter
  },
  data() {
    return {
      showNavLink: true,
      footerDescription: "TV Shows",
      headerMainTitle: "TV Shows",
      navLinkUrl: [
        {
          label: "Home",
          url: "/"
        },
      ],
      defaultPageUrl: "/"
    };
  }
};
</script>

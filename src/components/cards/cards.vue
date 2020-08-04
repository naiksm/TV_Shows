<template>
  <v-card class="mx-auto" max-width="300">
    <v-img
      v-if="imageSource"
      class="white--text align-end"
      height="200px"
      lazy-src="imageSource"
      :src="imageSource"
      :contain="true"
    >
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular
            indeterminate
            color="grey lighten-5"
          ></v-progress-circular>
        </v-row>
      </template>
      
    </v-img>
    <v-card-subtitle align="center" class="pb-0">{{ name }}</v-card-subtitle>
    <v-card-subtitle align="center" class="pb-0">Rating : {{ rating }}</v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  name: "AppCard",
  props: {
    name: {
      type: String
    },
    downloadImage: {
      type: String
    },
    imageSource: {
      type: String
    },
    id: {
      type: Number
    },
    rating: {
      type: Number
    }
  },
  methods: {
    async downLoadImage(res) {
      const a = document.createElement("a");
      a.href = await this.toDataURL(res);
      a.download = "";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    },
    async toDataURL(url) {
      return fetch(url)
        .then(response => {
          return response.blob();
        })
        .then(blob => {
          return URL.createObjectURL(blob);
        });
    },
    detailsRouting(id) {
      console.log(id);
      this.$router.push({
          path: '/',
          params: {
            showID: id
          }
        })

    }
  }
};
</script>

<style lang="scss" scoped>
.scroll {
  overflow-y: auto;
  height: 150px;
}

.imageContain {
    background-size: contain;
}
</style>

<template>
  <v-card class="mx-auto" max-width="300">
    <v-img
      v-if="imageSource"
      class="white--text align-end"
      height="200px"
      lazy-src="imageSource"
      :src="imageSource"
      :contain="true"
      :alt="'No preview available'"
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
    <v-card-subtitle align="center" class="pb-0">Rating : {{ rating ? rating : 'Not Available' }}</v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  name: "AppCard",
  props: {
    name: {
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

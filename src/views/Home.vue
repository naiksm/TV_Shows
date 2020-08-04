<template>
  <div class="home">
    <v-container fill-height>
      <v-layout align-center ma-10>
        <!-- Horizontal: text-xs-center -->
        <v-flex xs6>
          <v-img
            width="450"
            height="500"
            src="https://picsum.photos/200/300"
          ></v-img>
        </v-flex>
        <v-flex xs6>
          <h1>Lorem Picsum</h1>
          <h4>The Lorem Ipsum for photos.</h4>
          <div class="my-2">
            <v-btn large rounded color="primary" @click="gallerRouting"
              >More on Gallery</v-btn
            >
          </div>
          
          <span>ID : {{ this.showID }}</span>
          
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import {
  fetchShowDetails
} from "@/services/image-gallery-data/image-gallery-data.js";

export default {
  name: "Home",
  data() {
    return {
      result: "",
      showDetailsFlag: false,
      id: "",
    };
  },
  props: {
    showID: {
      type: Number
    },
  },
  async mounted() {
    const result = await fetchShowDetails().catch(err => {
      this.error = err;
    });
    if (result) {
      this.galleryShowDetails = result;
      this.totalItems = this.galleryShowDetails.length;
      this.showDetailsFlag = true;
    }
  },
  methods: {
    gallerRouting() {
      this.$router.push("/gallery");
    }
  }
};
</script>

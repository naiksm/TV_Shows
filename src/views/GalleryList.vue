<template>
  <div>  
    <v-container>
      <v-row align="center">
        <v-col class="d-flex" cols="12" sm="6">
          <input class="search" v-model="searchKeyword" placeholder="Search for TV shows">
          <v-btn :disabled="!searchKeyword" class="searchbtn" @click = "searchList(searchKeyword)">Search</v-btn>
        </v-col>
      </v-row>
      <v-row v-if="!searchFlag && !showDetailsFlag && galleryListDetails.length">
        <v-col
          v-for="(data, index) in galleryListDetails"
          :key="`${index}`"
          cols="12"
          md="6"
          lg="3"
        >
          <span @click = "showDetails(data.id)">
          <app-card
            :imageSource="data.image.medium"
            :downloadImage="data.download_url"
            :name="data.name"
            :rating="data.rating.average"
            :id="data.id"
            :actionBtn="'More Details'"
          />
          </span>
        </v-col>
      </v-row>
      <v-row v-if="searchFlag && gallerySearchListDetails.length">
        <v-col
          v-for="(data, index) in gallerySearchListDetails"
          :key="`${index}`"
          cols="12"
          md="6"
          lg="3"
        >
          <span @click = "showDetails(data.show.id)">
          <app-card
            :imageSource="data.show.image ? data.show.image.medium : ''"
            :downloadImage="data.show.download_url"
            :name="data.show.name"
            :rating="data.show.rating.average"
            :id="data.show.id"
            :actionBtn="'More Details'"
          />
          </span>
        </v-col>
      </v-row>
      <v-row v-if="showDetailsFlag && !searchFlag">
        <v-layout align-center ma-10>
        <!-- Horizontal: text-xs-center -->
        <v-flex xs6>
          <v-img
            width="450"
            height="500"
            v-bind:src="showDetails.image.medium"
            :contain="true"
          ></v-img>
        </v-flex>
        <v-flex xs6>
          <h1>{{showDetails.name}}</h1>
          <h4>Genres : {{showDetails.genres.join(', ')}}.</h4>
          <div> Time : {{showDetails.schedule.time}} </div><br/>
          <div> Time : {{showDetails.schedule.days.join(', ')}} </div><br/>
          <div> Rating : {{showDetails.rating.average}} </div><br/>
          <div> Summary: <br/>
          {{ showDetails.summary}}</div><br/> 
          <br/>
          <v-btn @click = "backToList()"> Back to Show List</v-btn>
        </v-flex>
      </v-layout>
      </v-row>
      
      <v-row v-if="!gallerySearchListDetails.length">
        <h1>No shows found </h1>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import {
  fetchShowList, fetchSearchResults, fetchShowDetails
} from "@/services/image-gallery-data/image-gallery-data.js";

import AppCard from "../components/cards/cards.vue";
export default {
  name: "GalleryList",
  components: {
    AppCard
  },
  data() {
    return {
      page: 1,
      galleryListDetails: "",
      gallerySearchListDetails: "",
      error: "",
      items: [4, 5, 10, 12],
      selectedNum: 4,
      nextUrlLimit: "",
      nextUrlPageNo: "",
      prevUrlLimit: "",
      prevUrlPageNo: "",
      numberOfPage: "",
      pageNumber: 1,
      searchKeyword: null,
      searchFlag: false,
      showDetailsFlag: false,
    };
  },
  async mounted() {
    const result = await fetchShowList().catch(err => {
      this.error = err;
    });
    if (result) {
      this.galleryListDetails = result;
      this.totalItems = this.galleryListDetails.length;
    }
  },
  methods: {
    async searchList(value) {
        const result = await fetchSearchResults(value).catch(err => {
            this.error = err;
          });
          if (result) {
            this.gallerySearchListDetails = result;
            this.totalItems = this.gallerySearchListDetails.length;
            this.searchFlag = true;
        }
      },
      
       showDetails(value) {
          fetchShowDetails(value).then(result => {
                this.showDetails = result;
                this.totalItems = this.showDetails.length;
                this.searchFlag = false;
                this.showDetailsFlag = !this.showDetailsFlag;
            }).catch(err => {
            this.error = err;
          });
      },
      
       async backToList(){
           this.$router.go('/');
        }
      },
    async onPageChange() {}
};
</script>

<style scoped>
.pagination-buttons {
  text-align: center;
  height: 63px;
}
button {
  margin-right: 5%;
}
</style>

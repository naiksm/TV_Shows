<template>
  <v-footer color="green lighten-4" padless>
    <v-layout justify-center wrap>
      <v-flex green py-4 text-center white--text xs12>
        {{ new Date().getFullYear() }} —
        <strong>{{ footerDescription }}</strong>
      </v-flex>
    </v-layout>
  </v-footer>
</template>
<script>
export default {
  name: "app-footer",
  components: {},
  props: {
    footerDescription: {
      type: String
    }
  }
};
</script>
<style scoped>
.text-center {
  padding: 0px;
}
</style>

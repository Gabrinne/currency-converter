<template>
  <v-app>
    <v-app-bar app :color="themeColor">
      <v-toolbar-title>Le/Tip</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <Converter />
      </v-container>
    </v-main>

    <v-footer dark :color="themeColor">
      <v-card-text dark class="text-center">
        Criado com
        <v-icon color="red" class="mr-1 ml-1">mdi-heart</v-icon>por
        <a
          href="http://github.com/Gabrinne"
          target="_blank"
          class="font-weight-bold white--text mr-1"
          style="text-decoration: none"
          >Gabrinne</a
        >- © {{ new Date().getFullYear() }}
      </v-card-text>
    </v-footer>
  </v-app>
</template>

<script>
import Converter from "./components/Converter.vue";
export default {
  components: { Converter },

  data: () => ({
    themeColor: "deep-purple accent-2",
  }),
};
</script>

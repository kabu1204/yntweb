<template>
  <v-app>
    <v-app-bar
        app
        color="primary"
        dark
        shrink-on-scroll
        prominent
        src="https://dimg07.c-ctrip.com/images/0101g120004fi39ie2AD2_R_1600_10000.jpg"
        fade-img-on-scroll
        collapse-on-scroll
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>烟台市</v-toolbar-title>
    </v-app-bar>

    <NavigationBar
        v-model="drawer"
        selected-list-item=1
    >
    </NavigationBar>

    <v-main>
      <carousel/>
    </v-main>
  </v-app>
</template>

<script>
import NavigationBar from "../components/NavigationBar";
import carousel from "@/components/carousel";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'pics',

  components: {
    NavigationBar,
    carousel
  },

  props: {
    selectedListItem: Number,
  },
  data: () => ({
    drawer: false,
    item: "1"
  }),
};
</script>

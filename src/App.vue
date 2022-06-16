<template>
  <v-app>
    <v-app-bar
        app
        color="primary"
        dark
        shrink-on-scroll
        prominent
        height="600"
        src="https://dimg07.c-ctrip.com/images/0101g120004fi39ie2AD2_R_1600_10000.jpg"
        fade-img-on-scroll
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>烟台市</v-toolbar-title>
    </v-app-bar>

    <NavigationBar
        v-model="drawer"
        :selected-list-item="0"
    >
    </NavigationBar>

    <v-main>
      <HelloWorld/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import NavigationBar from "@/components/NavigationBar";

export default {
  name: 'App',

  components: {
    HelloWorld,
    NavigationBar
  },

  props: {
    selectedListItem: Number,
  },
  data: () => ({
    drawer: false,
  }),
};
</script>

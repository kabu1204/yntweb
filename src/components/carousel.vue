<template>
  <v-carousel
      cycle
      hide-delimiter-background
      show-arrows-on-hover
  >
    <v-carousel-item
        v-for="(slide, i) in slides"
        :key="i"
        :src=slide
    >
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "carousel",
  data: ()=>({
    slides: [
      "http://www.yantaitupianyun.com/template/20190711/static//image/hdp/1.jpg",
      "http://www.yantaitupianyun.com/template/20190711/static//image/hdp/2.jpg",
      "http://www.yantaitupianyun.com/template/20190711/static//image/hdp/3.jpg",
      "http://www.yantaitupianyun.com/template/20190711/static//image/hdp/4.jpg",
      "http://www.yantaitupianyun.com/template/20190711/static//image/hdp/5.jpg",
      "http://www.yantaitupianyun.com/template/20190711/static//image/hdp/6.jpg"
    ],
  }),
}
</script>

<style scoped>

</style>
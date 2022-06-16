<template>
  <v-navigation-drawer
      :value="value"
      @input="$emit('input', $event.target.value)"
      app
      temporary
      expand-on-hover
  >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6">
          Yantai
        </v-list-item-title>
        <v-list-item-subtitle>
          山东省，烟台市
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>
    <v-list
        nav
        dense
    >
      <v-list-item-group
          v-model="selectedItemModel"
          active-class="deep-purple--text text--accent-4"
      >
        <v-list-item>
          <v-list-item-icon href="index.html" :target="selectedListItem==='0'? '_self' : '_blank'">
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>主页</v-list-item-title>
        </v-list-item>

        <v-list-item href="pictures.html" :target="selectedListItem==='1'? '_self' : '_blank'">
          <v-list-item-icon>
            <v-icon>mdi-image-multiple</v-icon>
          </v-list-item-icon>
          <v-list-item-title>图片展示</v-list-item-title>
        </v-list-item>

        <v-list-item href="yntmap.html" :target="selectedListItem==='2'? '_self' : '_blank'">
          <v-list-item-icon>
            <v-icon>mdi-map</v-icon>
          </v-list-item-icon>
          <v-list-item-title>烟台地图</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
name: "NavigationBar",
props: {
  value: {
    type: Boolean,
    default: false
  },
  selectedListItem: String,
},
computed: {
  selectedItemModel:{
    get(){
      console.log(this.selectedListItem)
      return this.selectedListItem
    }
  }
}
}
</script>

<style scoped>

</style>
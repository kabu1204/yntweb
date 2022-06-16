<template>
  <v-card
      class="mx-auto"
      flat
  >
    <v-card-text>
      <p class="text-h4 text--primary">
        {{title}}
      </p>
      <div class="text--primary">
        {{body}}
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "TextCard",
  props: {
    title: String,
    body: String
  }
}
</script>

<style scoped>

</style>
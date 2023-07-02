<template>
  <v-app>
    <v-main>
      <MultipleNavs :responsiveNav="$vuetify.breakpoint.smAndDown" />
      <v-container fluid class="pa-0">
        <Nuxt />
      </v-container>
      <TheFooter />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'movie',
}
</script>

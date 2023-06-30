<template>
  <v-app class="pa-0">
    <v-main>
      <MultipleNavs :responsiveNav="$vuetify.breakpoint.xsOnly" />
      <v-container fluid>
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

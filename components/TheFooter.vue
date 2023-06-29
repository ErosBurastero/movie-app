<template>
  <v-container fluid class="pa-0">
    <v-footer> </v-footer>
    <v-row class="ma-0 pa-2">
      <v-col
        cols="12"
        sm="9"
        class="d-flex justify-md-start justify-sm-start align-center"
      >
        <p class="roboto ma-0">Todos los derechos reservados 2023</p>
      </v-col>
      <v-col
        cols="12"
        sm="3"
        class="d-flex justify-md-end justify-sm-end align-center"
        :class="{ 'ma-0 pa-2': $vuetify.breakpoint.xsOnly }"
      >
        <SocialMedia
          v-for="(data, index) in socialMedias"
          :key="index"
          :href="data.to"
          :red="data.red"
          :color="$vuetify.theme.isDark ? white : black"
          :logo="$vuetify.theme.isDark ? black : white"
          viewBox="0 0 32 40"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import colorVariables from '~/mixins/colorVariables'
export default {
  mixins: [colorVariables],
  data() {
    return {
      socialMedias: [
        {
          red: 'instagram',
          to: 'https://www.instagram.com/',
        },
        { red: 'facebook', to: 'https://facebook.com/' },
        { red: 'twitter', to: 'https://twitter.com/' },
        { red: 'youtube', to: 'https://youtube.com/' },
        { red: 'twitch', to: 'https://www.twitch.tv/' },
        { red: 'linkedin', to: 'https://www.linkedin.com/' },
      ],
    }
  },
}
</script>

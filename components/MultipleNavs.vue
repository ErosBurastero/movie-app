<template>
  <div>
    <v-system-bar v-bind="$attrs" :class="systemClass" v-if="systemBar">
      <slot name="systemContent"></slot>
    </v-system-bar>
    <v-app-bar
      app
      elevation="7"
      :color="$vuetify.theme.isDark ? black : blue"
      height="48"
    >
      <v-app-bar-nav-icon
        :color="$vuetify.theme.isDark ? white : black"
        v-if="responsiveNav"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <TextField v-model="search" @keyup.enter="searchFilmsByName" />
    </v-app-bar>
    <NavigationDrawer
      app
      v-if="responsiveNav"
      :items="items"
      v-model="drawer"
      itemClass=""
      subItemClass=""
      :color="$vuetify.theme.isDark ? black : blue"
      width="150"
    />

    <NavigationDrawer
      app
      v-if="!responsiveNav"
      drawerClass="mt-n2"
      :color="$vuetify.theme.isDark ? black : blue"
      :items="items"
      permanent
      itemClass="white--text green"
      subItemClass="white--text red"
    >
      <template #content>
        <div class="text-center">
          <p class="white--text text-left pl-4">AÑO DE LANZAMIENTO</p>
          <Button
            v-for="year in years"
            :key="year"
            :text="year"
            btnClass="mx-1 my-1 white--text"
            :color="blue_btn"
            @click="searchFilmsByYear(year)"
          />
        </div>
      </template>
    </NavigationDrawer>
  </div>
</template>

<script>
import colorVariables from '~/mixins/colorVariables'
import EventBus from '~/services/eventBus'

export default {
  mixins: [colorVariables],
  props: {
    responsiveNav: {
      type: Boolean,
      default: true,
    },
    systemBar: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      search: null,
      drawer: false,
      years: [],
    }
  },
  computed: {
    items() {
      return this.$allData.items
    },
  },
  methods: {
    searchFilmsByName() {
      EventBus.$emit('setFilmName', this.search)
    },
    searchFilmsByYear(year) {
      EventBus.$emit('setFilmYear', year)
    },
  },

  created() {
    const startYear = 2023
    const endYear = 1976
    for (let year = startYear; year >= endYear; year--) {
      this.years.push(year)
    }
  },
}
</script>

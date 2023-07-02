<template>
  <div>
    <v-system-bar v-bind="$attrs" :class="systemClass" v-if="systemBar">
      <slot name="systemContent"></slot>
    </v-system-bar>
    <v-app-bar app elevation="7" :color="$vuetify.theme.isDark ? black : blue">
      <v-app-bar-nav-icon
        :color="$vuetify.theme.isDark ? white : black"
        v-if="responsiveNav"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-container fluid>
        <v-row no-gutters justify="center" align="center">
          <v-col cols="12" md="6" align-self="center">
            <TextField
              @keyup.enter="searchFilmsByName"
              @click="showInnerIcon"
              v-model="search"
              :background-color="white"
              :color="white"
              :inputClass="$vuetify.breakpoint.smAndUp ? 'w-70' : 'w-100'"
              placeholder="Buscar"
              rounded
              hide-details
              solo
              outlined
              flat
              dense
            >
              <template #prepend-inner>
                <Icon :iconName="innerIcon" :size="innerIconSize" />
              </template>
              <template #append>
                <Tooltip
                  right
                  color="grey"
                  @click="searchFilmsByName"
                  withIcon
                  size="25"
                  text=""
                  btnClass="myBtn"
                  iconName="mdi-magnify"
                >
                  <template #content>Haz click aqui para buscar</template>
                </Tooltip>
              </template>
            </TextField>
          </v-col>
        </v-row>
      </v-container>
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
      innerIcon: '',
      innerIconSize: '',
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
      if (this.search === null || this.search === '') return
      EventBus.$emit('setFilmName', this.search)
    },
    searchFilmsByYear(year) {
      if (year === null || year === '') return
      EventBus.$emit('setFilmYear', year)
    },
    showInnerIcon() {
      this.innerIcon = 'mdi-magnify'
      this.innerIconSize = '20'
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
<style>
.myBtn {
  border-radius: 0px 20px 20px 0px;
  height: 48px !important;
  width: 60px !important;
}
.v-text-field--rounded .v-input__slot {
  padding-right: 0 !important;
  padding-left: 14px !important;
}
.v-btn__content {
  justify-content: start !important;
}
</style>

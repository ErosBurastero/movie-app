<template>
  <div>
    <v-system-bar v-bind="$attrs" :class="systemClass" v-if="systemBar">
      <slot name="systemContent"></slot>
    </v-system-bar>
    <v-app-bar app elevation="7" :color="$vuetify.theme.isDark ? black : blue">
      <v-app-bar-nav-icon
      class="ml-2"
        :color="white"
        v-if="responsiveNav"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-container fluid>
        <v-row no-gutters justify="center" align="center">
          <v-col cols="12" md="6">
            <TextField
              @keyup.enter="searchFilmsByName"
              @click="showInnerIcon"
              v-model="search"
              :background-color="white"
              :color="blue"
              light
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
                <Icon
                  :iconName="innerIcon"
                  :size="innerIconSize"
                  :color="black"
                />
              </template>
              <template #append>
                <Tooltip right>
                  <template #component="{ attrs, on }">
                    <Button
                      v-bind="attrs"
                      v-on="on"
                      @click="searchFilmsByName"
                      color="grey"
                      withIcon
                      size="25"
                      text=""
                      btnClass="myBtn"
                      iconName="mdi-magnify"
                    />
                  </template>
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
      width="250"
    />
    <NavigationDrawer
      app
      v-if="!responsiveNav"
      :color="$vuetify.theme.isDark ? black : blue"
      :items="items"
      permanent
      itemClass="white--text"
      subItemClass="white--text red"
    >
      <template #content>
        <div class="text-center mt-1">
          <div class="d-flex align-start">
            <p class="white--text text-left pl-4 pr-2">AÑO DE LANZAMIENTO</p>
            <Tooltip right>
              <template #component="{ attrs, on }">
                <Icon
                  v-bind="attrs"
                  v-on="on"
                  :color="white"
                  size="25"
                  iconName="mdi-magnify"
                />
              </template>
              <template #content
                >Filtra la pelicula que buscaste por añoAS</template
              >
            </Tooltip>
          </div>
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
      this.searchFilmsByYear('')
    },
    searchFilmsByYear(year) {
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
  height: 38px !important;
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

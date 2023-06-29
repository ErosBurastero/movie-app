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
      flat
    >
      <v-app-bar-nav-icon
        :color="$vuetify.theme.isDark ? white : black"
        v-if="responsiveNav"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
    </v-app-bar>
    <NavigationDrawer
      v-if="responsiveNav"
      :items="items"
      v-model="drawer"
      itemClass="text-white"
      subItemClass="bg-red"
      :color="$vuetify.theme.isDark ? black : blue"
      width="150"
    />
    <NavigationDrawer
      drawerClass="mt-n2"
      height="90vh"
      :color="$vuetify.theme.isDark ? black : blue"
      :items="items"
      permanent
      itemClass="green text-white"
      subItemClass="grey"
    />
  </div>
</template>

<script>
import colorVariables from '~/mixins/colorVariables'

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
      drawer: false,
      items: [
        {
          isOpen: false,
          title: 'Home',
          icon: 'mdi-chevron-down',
          path: '/',
          subItems: [
            {
              path: '/test',
              title: 'homes',
              class: 'bg-blue',
              titleClass: 'text-white',
            },
            {
              path: '/test',
              title: 'homeses',
              class: 'bg-brown',
              titleClass: 'text-white',
            },
            {
              path: '/test',
              title: 'homeseses',
              class: 'bg-yellow',
              titleClass: 'text-white',
            },
          ],
        },
      ],
    }
  },
}
</script>

<style></style>

<template>
  <v-navigation-drawer v-bind="$attrs" v-on="$listeners" :class="drawerClass">
    <template
      v-for="(_, scopedSlotName) in $slots"
      #[scopedSlotName]="slotData"
    >
      <slot :name="scopedSlotName" v-bind="slotData" />
    </template>

    <template v-for="(_, slotName) in $slots" #[slotName]>
      <slot :name="slotName" />
    </template>
    <v-list>
      <v-list-group
        v-for="item in items"
        :key="item.title"
        :value="item.title"
        :append-icon="item.noIcon"
        :class="itemClass"
        v-model="item.isOpen"
      >
        <template #activator>
          <Icon :iconName="item.icon" class="mr-2" :color="white" size="20" />
          <v-list-item-title
            @click="$router.push({ path: item.path })"
            class="white--text"
            >{{ item.title }}</v-list-item-title
          >
        </template>

        <v-list-item
          v-for="subItem in item.subItems"
          :key="subItem.index"
          link
          :class="subItemClass !== undefined ? subItemClass : subItem.class"
          ><NuxtLink
            :to="subItem.path"
            :class="['text-decoration-none', subItem.titleClass]"
            >{{ subItem.title }}</NuxtLink
          ></v-list-item
        >
      </v-list-group>
    </v-list>
    <slot name="content"></slot>
  </v-navigation-drawer>
</template>

<script>
import colorVariables from '~/mixins/colorVariables'

export default {
  mixins: [colorVariables],

  props: {
    drawerClass: {
      type: String,
    },
    subItemClass: {
      type: String,
    },
    itemClass: {
      type: String,
    },
    items: {
      type: Array,
    },
  },
}
</script>
<style lang="scss" scoped>
::v-deep .v-list-item__icon .theme--light.v-icon {
  color: $white !important;
}
</style>

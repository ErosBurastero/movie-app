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
      >
        <template #activator>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
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
  </v-navigation-drawer>
</template>

<script>
export default {
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

<template>
  <v-tooltip v-bind="$attrs" :class="tooltipClass">
    <template #activator="{ on, attrs }">
      <slot name="component" :attrs="attrs" :on="on"></slot>
    </template>
    <slot name="content"><span></span></slot>
  </v-tooltip>
</template>

<script>
export default {
  props: {
    tooltipClass: {
      type: [String, Array, Object],
      default: '',
    },
  },
}
</script>

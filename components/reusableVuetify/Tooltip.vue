<template>
  <v-tooltip v-bind="$attrs" :class="tooltipClass">
    <template #activator="{ on, attrs }">
      <Icon v-bind="{ ...attrs, ...$attrs }" v-on="{ ...on, ...$listeners }" />
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

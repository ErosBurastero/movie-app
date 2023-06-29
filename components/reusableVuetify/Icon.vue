<template>
  <v-icon v-bind="$attrs" v-on="$listeners">{{ icon }}</v-icon>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: 'mdi-chevron-left',
    },
  },
}
</script>

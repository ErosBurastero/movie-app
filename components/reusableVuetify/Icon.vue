<template>
  <v-icon v-bind="$attrs" v-on="$listeners">{{ iconName }}</v-icon>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      default: 'mdi-chevron-left',
    },
  },
}
</script>

<template>
  <v-btn v-bind="$attrs" v-on="$listeners" :class="btnClass"
    ><Icon v-bind="$attrs" v-if="withIcon" color="white" />{{ text }}</v-btn
  >
</template>

<script>
export default {
  props: {
    text: {
      type: [String, Number],
      default: 'Click me',
    },
    btnClass: {
      type: [String, Array],
      default: '',
    },
    withIcon: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

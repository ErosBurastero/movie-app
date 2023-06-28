<template>
  <v-switch v-bind="$attrs" v-on="$listeners" :class="switchClass"></v-switch>
</template>

<script>
export default {
  props: {
    switchClass: {
      type: String,
    },
  },
}
</script>

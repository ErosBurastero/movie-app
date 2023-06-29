<template>
  <v-switch
    v-bind="$attrs"
    v-on="$listeners"
    v-model="computedSwitch"
  ></v-switch>
</template>

<script>
export default {
  props: {
    switchClass: {
      type: String,
    },
  },
  data() {
    return {
      switchModel: false,
    }
  },
  computed: {
    computedSwitch: {
      get() {
        return this.switchModel
      },
      set(val) {
        this.$emit('updatedSwitch', val)
      },
    },
  },
}
</script>

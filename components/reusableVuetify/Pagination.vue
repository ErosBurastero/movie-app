<template>
  <v-pagination
    v-bind="$attrs"
    v-on="$listeners"
    :class="paginationClass"
  ></v-pagination>
</template>

<script>
export default {
  props: {
    paginationClass: {
      type: String,
    },
  },
}
</script>
//
<style scoped lang="scss">
::v-deep .v-pagination__item {
  background-color: $blue !important;
  color: $white !important;
  width: 48px;
  height: 48px;
  font-size: 16px;
}
::v-deep .v-pagination__item--active {
  background-color: $blueBtn !important;
  color: $black !important;
}
::v-deep .v-pagination__navigation {
  background-color: $blue !important;
  width: 48px;
  height: 48px;
}
::v-deep .v-icon {
  color: grey;
}
::v-deep .v-icon:hover {
  color: white;
}
</style>

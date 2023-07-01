<template>
  <div>
    {{ movieInformation }}
  </div>
</template>

<script>
export default {
  layout: 'movie',
  data() {
    return {
      movieInformation: [],
    }
  },
  async created() {
    try {
      const response = await this.$getMovieDetails(this.$route.params.id)
      this.movieInformation = response
    } catch (error) {
      console.log(error)
    }
  },
}
</script>

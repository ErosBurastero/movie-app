<template>
  <div>
    <v-container>
      {{ movies }}
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      movies: [],
    }
  },
  async created() {
    try {
      const response = await this.$getMovies()
      this.movies = response
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  },
}
</script>

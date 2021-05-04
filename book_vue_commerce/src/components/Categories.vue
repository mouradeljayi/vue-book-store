<template>

  <section>
    <h1 class="text-lg uppercase mb-2">Categories</h1>
    <div class="bg-white rounded px-4 p-4">
      <ul class="grid grid-cols-4 gap-2 md:flex md:flex-col p-2">
        <li v-for="category in categories" :key="category.id" class="mb-2 hover:text-yellow-500 cursor-pointer">  <router-link :to="{ path: '/books/category/' + category.slug }">{{ category.name }}</router-link> </li>
      </ul>
    </div>
  </section>

</template>

<script>

export default {
  name: 'Categories',
  computed: {
    categories() {
      return this.$store.state.categories
    },
  },
  mounted() {
    this.$store.dispatch('fetchCategories')
  },
}
</script>

<style lang="css" scoped>
</style>

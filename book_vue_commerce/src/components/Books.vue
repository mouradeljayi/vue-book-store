<template lang="html">
  <section>
    <h1 class="text-lg uppercase mb-2">Latest Books</h1>
    <div class="grid grid-cols-2 md:grid-cols-5 gap-4 bg-white rounded px-6 p-6 mb-10">

      <div v-for="product in products" :key="product.id" class="mt-4">
        <img :src="product.image" alt="book image">
        <h4 class="mt-2 hover:text-yellow-500 font-bold"><router-link :to="{ path: '/books/' + product.slug }"> {{ product.title }}</router-link></h4>
        <span class="text-gray-500">{{ product.author }}</span>
        <h5 class="text-lg font-bold">{{ product.price }} $</h5>
      </div>

    </div>
  </section>

</template>

<script>
import axios from 'axios'
export default {
  name: 'Books',
  data() {
    return {
      products: [],
    }
  },
  mounted() {
    this.getProducts()
    document.title = 'Vue Book'
  },
  methods: {
    getProducts() {
      axios.get('/api/products')
        .then(response => {
          this.products = response.data
        })
        .catch(error => {
          console.error(error)
        })
    }
  }
}
</script>

<style lang="css" scoped>
</style>

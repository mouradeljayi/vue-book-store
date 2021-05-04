<template>
  <section class="mt-28 container mx-auto px-4 flex flex-col md:flex-row ">
    <div class="md:h-screen md:w-1/4">
      <Categories />
    </div>
    <div class="w-full ml-0 mt-4 md:mt-0 md:ml-10">
      <section>
        <h1 class="text-lg uppercase mb-2">Books by category</h1>
        <div class="grid grid-cols-2 md:grid-cols-5 gap-4 bg-white rounded px-6 p-6 mb-10">

          <div v-for="product in productsFilter" :key="product.id" class="mt-4">
            <img :src="product.image" alt="book image">
            <h4 class="mt-2 hover:text-yellow-500 font-bold"><router-link :to="{ path: '/books/' + product.slug }"> {{ product.title }}</router-link></h4>
            <span class="text-gray-500">{{ product.author }}</span>
            <h5 class="text-lg font-bold">{{ product.price }} $</h5>
          </div>

        </div>
      </section>
    </div>
  </section>
</template>

<script>
import Categories from '@/components/Categories.vue'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    Categories,
  },
  data() {
    return {
      productsFilter: []
    }
  },
  created() {
    this.getProductsFilter()
  },
  methods: {
    getProductsFilter() {
      axios.get(`/api/products/category/${this.$route.params.slug}`)
        .then(response => {
          this.productsFilter = response.data
        })
        .catch(error => {
          console.error(error)
        })
    }
  },
  watch: {
    '$route' : 'getProductsFilter'
  }
}
</script>
<style media="screen">

</style>

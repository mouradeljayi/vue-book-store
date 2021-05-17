<template lang="html">
  <section class="mt-32 mb-12 container mx-auto px-4 flex justify-center items-center flex-col md:flex-row">
    <div v-if="notification" class="fixed z-20 top-32 right-5 w-80 bg-green-600 p-6 text-white rounded">
      {{ notification }}
      <i @click="notification = '' " class="cursor-pointer fas fa-times absolute right-2 top-2"></i>
    </div>
    <div class="w-full md:w-1/4">
      <img :src="product.image" alt="book image">
    </div>
    <div class="ml-5 md:ml-20 w-full md:w-1/2">
      <h1 class="text-3xl font-semibold">{{ product.title }}</h1>
      <h4 class="text-sm">By <a href="#" class="text-yellow-600 hover:underline text-base">{{ product.author }}</a> </h4>
      <div v-if="product.stock" class="text-green-600 uppercase text-sm mt-2"> <i class="fas fa-check-circle "></i> Available</div>
      <div v-if="product.stock === 0" class="text-red-600 uppercase text-sm mt-2"> <i class="fas fa-check-circle "></i> Not Available</div>
      <div class="md:border-b border-gray-700 mt-4 mb-4"></div>
      <span class="text-sm font-bold">Price</span>
      <h5 class="text-4xl font-bold">$ {{ product.price }}</h5>

      <div class="flex flex-row mt-4">
        <input type="number" min="1" class="rounded border border-yellow-600 shadow appearance-none
               text-md p-2 focus:outline-none w-1/2 md:w-1/3" v-model="qty" :max=product.stock>
        <button @click="addToCart" v-if="product.stock" class="shadow focus:outline-none rounded px-2 bg-yellow-500 hover:bg-yellow-600 ml-1 text-white w-1/3"> <i class="fas fa-shopping-cart"></i> ADD TO CART</button>
        <button v-if="product.stock === 0" class="shadow focus:outline-none rounded px-2 bg-red-500  ml-1 text-white cursor-not-allowed">NOT AVAILABLE</button>
      </div>
    </div>
  </section>
  <section class="container mx-auto px-5 md:px-20 mb-10">
    <h1 class="font-bold text-xl mb-2 uppercase">description</h1>
    <div class="border border-yellow-600 rounded p-6">
      <p>{{ product.description }}</p>
    </div>
  </section>

  <section class="container mx-auto px-20 mb-20">

    <h1 class="text-center font-bold">YOU MAY ALSO LIKE</h1>
    <div class="grid md:grid-cols-6 gap-4">
      <div class="mt-8" v-for="product in filteredProducts.slice(0,6)" :key="product.id">
        <img :src="product.image" alt="book image">
        <h4 class="mt-2 hover:text-yellow-500 font-bold"> <router-link @click="scrollToTop()" :to="{ path: '/books/' + product.slug }"> {{ product.title }}</router-link> </h4>
        <span class="text-gray-500 text-sm">{{ product.author }}</span>
      </div>
    </div>
  </section>

</template>

<script>

export default {
  name: 'Book',
  data() {
    return {
      qty: 1,
      notification: "",
    }
  },
  computed: {
    product() {
      return this.$store.state.product
    },
    products() {
      return this.$store.state.products
    },
    filteredProducts() {
      const prods =  this.products.filter((p) =>  p.category_id === this.product.category_id)
      return prods.filter((p) => p.id !== this.product.id)
    }
  },
  mounted() {
    this.$store.dispatch('fetchProduct', { id: this.$route.params.id })
    this.$store.dispatch('fetchProducts')
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0,0)
    },
    addToCart() {
      if(isNaN(this.qty) || this.qty < 1 || this.qty > this.product.stock) {
        this.qty = 1
      }

      const item = {
        product: this.product,
        qty: this.qty
      }

      this.$store.commit('addToCart', item)
      this.notification = "The book was added to your cart"
    },
  }
}
</script>

<style lang="css" scoped>
</style>

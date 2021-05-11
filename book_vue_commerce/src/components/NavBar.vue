<template lang="html">
  <div class="bg-gray-900 shadow-md fixed inset-x-0 top-0 z-20">
    <div class="container mx-auto px-12 py-4">
      <nav class="md:flex flex-row md:justify-between">
        <div class="flex flex-row justify-between">
          <router-link to="/"> <span class="text-white text-5xl font-bold"><i class="fas fa-book-reader"></i> <span class="text-yellow-500">Vue</span> </span> </router-link>
          <button class="md:hidden focus:outline-none text-white" @click="showMobileMenu = !showMobileMenu"><i class="fas fa-bars fa-2x"></i></button>
        </div>
        <ul :class="{'hidden' : showMobileMenu}" class="flex flex-col md:flex-row md:items-center">
          <li class="mt-8 pr-8 ml-0 md:mt-0 md:ml-4 text-xl uppercase font-semibold">
            <router-link to="/" class="bg-yellow-500 hover:bg-yellow-700 py-2 px-4 rounded-full text-white">BOOKS</router-link>
          </li>
          <li class="mt-8 md:mt-0 ml-0 pr-8 md:ml-4 text-xl uppercase font-semibold">
            <router-link to="/signUp" class="bg-yellow-500 hover:bg-yellow-700 py-2 px-4 rounded-full text-white">SIGN UP</router-link>
          </li>
          <li class="mt-8 md:mt-0 ml-0 pr-8 md:ml-4 text-xl uppercase font-semibold">
            <router-link to="/cart" class="text-yellow-500 hover:text-yellow-700 relative">
               <i class="fas fa-shopping-cart fa-lg"></i> <span class="absolute bottom-4 left-5 rounded-full bg-red-500 text-white text-sm px-2"> {{ cartTotalLength }} </span>
             </router-link>
          </li>
          <li class="mt-8 pr-8 md:mt-0 md:ml-4 ml-0 text-lg uppercase font-semibold">
            <div class="flex items-center border-b border-yellow-500 py-2">
              <input v-model="search" class="bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Search for a book">
              <i class="fas fa-search text-yellow-500"></i>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </div>
  <div v-if="search" class="bg-yellow-400 text-white p-2 z-20 fixed mt-16 top-0 right-0" style="width:15.7rem;margin-right:5.9rem">
    <div v-for="product in searchProducts.slice(0,5)" class="p-2 hover:bg-white hover:text-gray-700">
      <router-link :to="{ path: '/books/' + product.slug }" class="flex items-center">
        <img src="../assets/book_default.png" class="w-14">
        <div class="ml-2 flex flex-col">
          <span class="text-sm">
            {{ product.title }}
          </span>
          <span class="text-xs text-gray-700">
            by {{ product.author }}
          </span>
        </div>
      </router-link>
    </div>
    <div class="px-8" v-if="searchProducts.length === 0">
      No results for "{{ search }}"
    </div>
  </div>
  <router-view />
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      showMobileMenu: false,
      search: '',
      cart: {
        items: [],
      }
    }
  },
  beforeCreate() {
    this.$store.commit('initializeStore')
  },
  mounted() {
    this.cart = this.$store.state.cart
  },
  computed: {
    cartTotalLength() {
      let totalLength = 0

      for(let i = 0; i < this.cart.items.length; i++) {
        totalLength += this.cart.items[i].qty
      }
      return totalLength
    },
    searchProducts() {
      return this.$store.state.products.filter(product => {
        return product.title.toLowerCase().includes(this.search.toLowerCase())
      })
    },
  },
  watch: {
    $route(to, from) {
      if(to.name === 'Book') {
        this.$store.dispatch('fetchProduct', { id: this.$route.params.id })
        this.search = ""
      }
    }
  },
}
</script>

<style lang="css" scoped>
</style>

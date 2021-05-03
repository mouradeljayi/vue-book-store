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
            <router-link :to="{ name: '', params: {} }" class="bg-yellow-500 hover:bg-yellow-700 py-2 px-4 rounded-full text-white">LOGIN</router-link>
          </li>
          <li class="mt-8 md:mt-0 ml-0 pr-8 md:ml-4 text-xl uppercase font-semibold">
            <router-link :to="{ name: '', params: {} }" class="text-yellow-500 hover:text-yellow-700 relative">
               <i class="fas fa-shopping-cart fa-lg"></i> <span class="absolute bottom-4 left-5 rounded-full bg-red-500 text-white text-sm px-2"> {{ cartTotalLength }} </span>
             </router-link>
          </li>
          <li class="mt-8 pr-8 md:mt-0 md:ml-4 ml-0 text-lg uppercase font-semibold">
            <div class="flex items-center border-b border-yellow-500 py-2">
              <input class="bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Search for a book">
              <i class="fas fa-search text-yellow-500"></i>
            </div>
          </li>
        </ul>
      </nav>
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
  }
}
</script>

<style lang="css" scoped>
</style>

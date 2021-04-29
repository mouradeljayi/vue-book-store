<template>
  <div class="bg-white shadow-md fixed inset-x-0 top-0 z-20">
    <div class="container mx-auto px-12 py-4">
      <nav class="md:flex flex-row md:justify-between">
        <div class="flex flex-row justify-between">
          <router-link to="/"> <span class="text-purple-500 text-5xl font-bold"><i class="fas fa-book-reader"></i> Vue</span> </router-link>
          <button class="md:hidden focus:outline-none" @click="showMobileMenu = !showMobileMenu"><i class="fas fa-bars fa-2x"></i></button>
        </div>
        <ul :class="{'hidden' : showMobileMenu}" class="flex flex-col md:flex-row md:items-center">
          <li class="mt-8 pr-8 ml-0 md:mt-0 md:ml-4 text-xl uppercase font-semibold">
            <router-link to="/" class="bg-purple-500 hover:bg-purple-700 py-2 px-4 rounded-full text-white">BOOKS</router-link>
          </li>
          <li class="mt-8 md:mt-0 ml-0 pr-8 md:ml-4 text-xl uppercase font-semibold">
            <router-link :to="{ name: '', params: {} }" class="bg-purple-500 hover:bg-purple-700 py-2 px-4 rounded-full text-white">LOGIN</router-link>
          </li>
          <li class="mt-8 md:mt-0 ml-0 pr-8 md:ml-4 text-xl uppercase font-semibold">
            <router-link :to="{ name: '', params: {} }" class="text-purple-500 hover:text-purple-700 relative">
               <i class="fas fa-shopping-cart fa-lg"></i> <span class="absolute bottom-4 left-5 rounded-full bg-red-500 text-white text-sm px-2"> 2 </span>
             </router-link>
          </li>
          <li class="mt-8 pr-8 md:mt-0 md:ml-4 ml-0 text-lg uppercase font-semibold">
            <div class="flex items-center border-b border-purple-500 py-2">
              <input class="bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Search for a book">
              <i class="fas fa-search text-purple-500"></i>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </div>
  <router-view />

  <footer class="bg-white text-center box py-2">
    <p>Designed & Created by Mourad EL Jayi</p>
  </footer>
</template>

<script>
  export default {
    data() {
      return {
        showMobileMenu: false,
      }
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  * {
    font-family: 'Roboto', sans-serif;
  }
  .box {
     box-shadow: 0 0 10px 0 grey;
     margin-bottom: 0;
  }
</style>

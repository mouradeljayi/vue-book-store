<template lang="html">
  <section class="container px-4 mx-auto mt-28 mb-10">
    <h1 class="text-2xl uppercase text-yellow-600 relative"> <i class="fas fa-shopping-cart"></i> Your Shopping Cart <span class="rounded-full top-0 ml-2 text-sm bg-yellow-600 text-white px-2 lowercase p-1 absolute">{{ cartTotalLength }} Items</span></h1>
    <div class="bg-white rounded shadow p-8 mt-5">
      <table v-if="cartTotalLength" class="border-collapse w-full">
          <thead>
              <tr>
                  <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Image</th>
                  <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Title</th>
                  <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Price</th>
                  <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Quantity</th>
                  <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Total</th>
                  <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"></th>
              </tr>
          </thead>
          <tbody>
              <CartItem
                v-for="item in cart.items"
                :key="item.product.id"
                :initialItem="item"
                v-on:removeFromCart="removeFromCart"
              />
          </tbody>
      </table>
      <div v-else class="text-gray-600 font-bold text-center bg-yellow-100 border border-yellow-400 px-4 py-3 rounded">
        <span>Your Shopping Cart is Currently Empty !</span>
      </div>
    </div>
    <div v-if="cartTotalLength" class="mt-4 font-bold">
      <h2 class="text-lg text-yellow-600">Summary</h2>
      <div class="flex items-center mt-4">
        <strong class="text-3xl">$ {{ cartTotalPrice.toFixed(2) }}</strong>
        <button type="button" class="text-white hover:bg-yellow-600 focus:outline-none rounded bg-yellow-500 px-4 p-2 uppercase ml-4"><i class="fas fa-credit-card"></i> Proceed to checkout</button>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import CartItem from '@/components/CartItem.vue'

export default {
  name: 'Cart',
  components: {
    CartItem
  },
  data() {
    return {
      cart: {
        items: []
      }
    }
  },
  mounted() {
    this.cart = this.$store.state.cart
  },
  methods: {
    removeFromCart(item) {
      this.cart.items = this.cart.items.filter(i => i.product.id !== item.product.id)
    }
  },
  computed: {
    cartTotalLength() {
      return this.cart.items.reduce((acc, curVal) => {
        return acc += curVal.qty
      }, 0)
    },
    cartTotalPrice() {
      return this.cart.items.reduce((acc, curVal) => {
        return acc += curVal.product.price * curVal.qty
      }, 0)
    },
  }
}
</script>

<style lang="css" scoped>

</style>

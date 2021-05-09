<template lang="html">
  <tr class="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
    <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
      <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Image</span>
        <img :src="item.product.image" alt="Book Image" class="w-24">
    </td>
      <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
        <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Title</span>
          <strong class="text-lg">{{ item.product.title }}</strong>
      </td>
      <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
        <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Price</span>
          <strong class="text-lg">$ {{ item.product.price }}</strong>
      </td>
      <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
        <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Quantity</span>
         <button @click="decrementQty(item)" class="focus:outline-none hover:bg-yellow-700 rounded-full bg-yellow-600 text-2xl font-bold pl-3 pr-3 text-white mr-2 px-2">-</button>
          <strong class="text-xl">{{ item.qty }}</strong>
         <button @click="incrementQty(item)" class="focus:outline-none hover:bg-yellow-700 rounded-full bg-yellow-600 text-2xl font-bold pl-2 pr-2 text-white ml-2 px-2">+</button>
      </td>
      <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
        <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Total</span>
          <strong class="text-lg">$ {{ getItemTotal(item).toFixed(2) }}</strong>
      </td>
     <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
      <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Actions</span>
      <button @click="removeFromCart(item)" href="#" class="text-red-400 text-lg hover:text-red-600 underline pl-6">Remove</button>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'CartItem',
  props: {
    initialItem: Object
  },
  data() {
    return {
      item: this.initialItem
    }
  },
  methods: {
    getItemTotal(item) {
      return item.qty * item.product.price
    },
    decrementQty(item) {
      item.qty -= 1

      if(item.qty === 0) {
        this.$emit('removeFromCart', item)
      }
      this.updateCart()
    },
    incrementQty(item) {
      if(item.qty < item.product.stock ) {
        item.qty += 1
      }
      this.updateCart()
    },
    updateCart() {
      localStorage.setItem('cart', JSON.stringify(this.$store.state.cart))
    },
    removeFromCart(item) {
      this.$emit('removeFromCart', item)
      this.updateCart()
    }
  }
}
</script>

<style lang="css" scoped>
</style>

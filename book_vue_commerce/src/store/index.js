import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    cart: {
      items: [],
    },
    products: [],
    isAuthenticated: false,
    token: '',
  },
  mutations: {
    initializeStore(state) {
      if(localStorage.getItem('cart')) {
        state.cart = JSON.parse(localStorage.getItem('cart'))
      } else {
        localStorage.setItem('cart', JSON.stringify(state.cart))
      }
    },
    addToCart(state, item) {
      const exists = state.cart.items.filter(i => i.product.id === item.product.id)

      if(exists.length) {
        exists[0].qty = parseInt(exists[0].qty) + parseInt(item.qty)
      } else {
        state.cart.items.push(item)
      }

      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    SET_PRODUCTS(state, products) {
      state.products = products
    },
    SET_CATEGORIES(state, categories) {
      state.categories =  categories
    },
  },
  actions: {
    fetchProducts({ commit }) {
      axios.get('/api/products')
        .then(response => {
          commit('SET_PRODUCTS', response.data)
        })
        .catch(error => {
          console.error(error)
        })
    },
    fetchCategories({ commit }) {
      axios.get('/api/categories')
        .then(response => {
          commit('SET_CATEGORIES', response.data)
        })
        .catch(error => {
          console.error(error)
        })
    },
  },
  modules: {
  }
})

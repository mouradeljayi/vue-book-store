import { createStore } from 'vuex'
import axios from 'axios'
import router from '@/router'

export default createStore({
  state: {
    cart: {
      items: [],
    },
    products: [],
    product: {},
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
      // token
      if(localStorage.getItem('token')) {
        state.token = localStorage.getItem('token')
        state.isAuthenticated = true
      } else {
        state.token = ''
        state.isAuthenticated = false
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
    SET_PRODUCT(state, product) {
      state.product = product
    },
    SET_CATEGORIES(state, categories) {
      state.categories =  categories
    },
    SET_TOKEN(state, token) {
      state.token = token
      state.isAuthenticated = true
    },
    REMOVE_TOKEN(state) {
      state.token = ''
      state.isAuthenticated = false
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
    fetchProduct({ commit }, {id}) {
      axios.get(`/api/products/` + id)
      .then(response => {
        commit('SET_PRODUCT', response.data)
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

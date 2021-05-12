import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Book from '../views/Book.vue'
import Cart from '../views/Cart.vue'
import SignUp from '../views/SignUp.vue'
import SignIn from '../views/SignIn.vue'
import ProductCategory from '../components/ProductCategory.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/signUp',
    name: 'SignUp',
    component: SignUp,
  },
  {
    path: '/signIn',
    name: 'SignIn',
    component: SignIn,
  },
  {
    path: '/books/:id',
    name: 'Book',
    component: Book
  },
  {
    path: '/books/category/:slug',
    name: 'productCategory',
    component: ProductCategory
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

function isLoggedIn() {
  return localStorage.getItem('auth');
}

export default router

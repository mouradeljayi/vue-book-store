import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Book from '../views/Book.vue'
import ProductCategory from '../components/ProductCategory.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/books/:id',
    name: 'book',
    component: Book
  },
  {
    path: '/books/category/:slug',
    name: 'productCategory',
    component: ProductCategory
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

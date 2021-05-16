import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import Home from '../views/Home.vue'
import Book from '../views/Book.vue'
import Cart from '../views/Cart.vue'
import SignUp from '../views/SignUp.vue'
import SignIn from '../views/SignIn.vue'
import MyAccount from '../views/MyAccount.vue'
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
    meta: { requireLogout: true }
  },
  {
    path: '/signIn',
    name: 'SignIn',
    component: SignIn,
    meta: { requireLogout: true }
  },
  {
    path: '/myAccount',
    name: 'MyAccount',
    component: MyAccount,
    meta: { requireLogin: true }
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

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireLogin)) {
    if (!store.state.isAuthenticated) {
      next({
        path: "/signIn",
        query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.requireLogout)) {
    if (store.state.isAuthenticated && store.state.token) {
      next({
        path: "/",
        query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  } else {
    next(); // make sure to always call next()!
  }
});


export default router

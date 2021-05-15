<template lang="html">
  <section class="mt-28 container mx-auto px-8 mb-10 md:mb-0">
    <div class="flex justify-center">
      <div class="w-full max-w-lg mt-8 bg-white p-6 rounded">
        <h1 class="text-3xl font-bold text-yellow-600 border-b-2 border-yellow-600 pb-2 uppercase">Sign Up</h1>
        <p class="mb-5 mt-2 text-gray-600">Create a new account and start shopping !</p>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Username
            </label>
            <input v-model="form.name" :class="[errors.name ? 'border-red-600' : 'border-yellow-600']" class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"  type="text" name="name" placeholder="Enter your username">
            <p v-if="errors.name" class="text-red-500 text-xs mt-2">{{ errors.name[0] }}</p>
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
              Email Address
            </label>
            <input v-model="form.email" :class="[errors.email ? 'border-red-600' : 'border-yellow-600']" class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="email" placeholder="Enter your e-mail">
            <p v-if="errors.email" class="text-red-500 text-xs mt-2">{{ errors.email[0] }}</p>
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Password
            </label>
            <input v-model="form.password" :class="[errors.password ? 'border-red-600' : 'border-yellow-600']" class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"  type="password" placeholder="Enter your password">
            <p v-if="errors.password" class="text-red-500 text-xs mt-2">{{ errors.password[0] }}</p>
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Confirm Password
            </label>
            <input v-model="form.password_confirmation"  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-yellow-600 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="password" placeholder="Confirm your password">
          </div>
        </div>
        <button type="submit" @click.prevent="register" class="w-full shadow bg-yellow-500 hover:bg-yellow-600 focus:shadow-outline focus:outline-none text-white uppercase py-2 px-4 rounded">
            Create Account
        </button>
        <div class="mt-4 text-sm text-gray-600">
          <i class="fas fa-exclamation-circle"></i> Have already an account ? <span class="text-yellow-600"><router-link to="/signIn">Sign In here</router-link></span>
        </div>
      </div>
    </div>
    <div class="text-center text-sm text-gray-400 mt-8">
      &copy; 2021 Book Vue. Designed & Developed by Mourad EL Jayi
    </div>
  </section>
</template>

<script>
import User from '../apis/User';

export default {
  name: 'SignUp',
  data() {
    return {
      form: {
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
      },
      errors: []
    }
  },
  methods: {
    register() {
      User.register(this.form)
        .then(() => {
          this.$router.push({ name: 'SignIn'})
        })
      .catch(error => {
        if(error.response.status === 401) {
          this.errors = error.response.data.errors;
        }
      })
    }
  },
}
</script>

<style lang="css" scoped>
</style>

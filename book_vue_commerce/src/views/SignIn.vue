<template lang="html">
  <section class="mt-28 container mx-auto px-8 mb-10 md:mb-0">
    <div class="flex justify-center">
      <div class="w-full max-w-lg mt-8 bg-white p-6 rounded">
        <h1 class="text-3xl font-bold text-yellow-600 border-b-2 border-yellow-600 pb-2 uppercase">Sign In</h1>
        <p class="mb-5 mt-2 text-gray-600">Sign In to your account and start shopping !</p>
        <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                E-mail address
              </label>
              <input v-model="form.email" :class="[errors.email ? 'border-red-600' : 'border-yellow-600']" class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="email" name="email" placeholder="Enter your email address">
              <p v-if="errors.email" class="text-red-500 text-xs mt-2">{{ errors.email[0] }}</p>
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
          Password
        </label>
        <input v-model="form.password" :class="[errors.password ? 'border-red-600' : 'border-yellow-600']" class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"  type="password" name="password" placeholder="Enter your password">
        <p v-if="errors.password" class="text-red-500 text-xs mt-2">{{ errors.password[0] }}</p>
        </div>
        </div>
        <button @click.prevent="login" type="submit" class="w-full shadow bg-yellow-500 hover:bg-yellow-600 focus:shadow-outline focus:outline-none text-white uppercase py-2 px-4 rounded">
            Sign In
        </button>
        <div class="mt-4 text-sm text-gray-600">
          <i class="fas fa-exclamation-circle"></i> You don't have an account ? <span class="text-yellow-600"><router-link to="/signUp">Sign Up here</router-link></span>
        </div>
      </div>
    </div>
    <div class="text-center text-sm text-gray-400 mt-8">
      &copy; 2021 Book Vue. Designed & Developed by Mourad EL Jayi
    </div>
  </section>
</template>

<script>
import User from '../apis/User'

export default {
  name: 'SignIn',
  data() {
    return {
      form: {
        email: '',
        password: ''
      },
      errors: [],
    }
  },
  methods: {
    login() {
      User.login(this.form)
        .then(() => {
          //this.$root.$emit('login', true);
          localStorage.setItem('auth', 'true');
          this.$router.push({ name: 'home' });
        })
        .catch(error => {
          if(error.response.status === 422) {
            this.errors = error.response.data.errors
          }
        })
    }
  }
}
</script>

<style lang="css" scoped>
</style>

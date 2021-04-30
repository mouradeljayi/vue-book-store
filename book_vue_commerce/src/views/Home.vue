<template>
  <section class="mt-28 container mx-auto px-4 flex flex-col md:flex-row ">
    <div class="md:h-screen md:w-1/4">
      <Categories />
    </div>
    <div class="w-full ml-0 md:ml-10">
      <Books />
    </div>
  </section>
</template>

<script>
import Categories from '@/components/Categories.vue'
import Books from '@/components/Books.vue'
export default {

  name: 'Home',
  components: {
    Categories,
    Books
  }
}
</script>
<style media="screen">

</style>

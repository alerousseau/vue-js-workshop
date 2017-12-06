<template>
  <div>
    <main class="container">
      <menu-nav></menu-nav>
    </main>
  </div>
</template>

<script>
import MenuNav from './components/MenuNav'

export default {
  components: {
    MenuNav
  },

  created () {
    this.$store.dispatch('fetchProducts')
  }
}
</script>

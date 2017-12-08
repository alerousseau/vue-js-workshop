<template>
  <div>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import MenuNav from './components/MenuNav'
import HeaderIntro from './components/HeaderIntro'
import AppThemes from './components/AppThemes'

export default {
  components: {
    MenuNav,
    AppThemes,
    HeaderIntro
  },

  created () {
    this.$store.dispatch('fetchProducts')
  }
}
</script>

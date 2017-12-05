<template>
  <div>
    <header class="app-header">
      <menu-nav
        v-on:click="toggleMenu">

      </menu-nav>
      <sidebar></sidebar>
    </header>
    <main class="container">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import MenuNav from './components/MenuNav'
import Sidebar from './components/Sidebar'

const initialActive = () => {
  return {
    isActive: false
  }
}

export default {
  components: {
    MenuNav,
    Sidebar
  },
  data: initialActive,

  created () {
    this.$store.dispatch('fetchProducts')
  },

  methods: {
    toggleMenu () {
      // eslint-disable-next-line no-console
      console.log('menu toggled')
      return {
        isActive: !initialActive.isActive
      }
    }
  }
}
</script>

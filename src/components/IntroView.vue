<template>
  <div>
    <menu-nav></menu-nav>
    <header class="header-petrapp" id="top">
      <header-intro></header-intro>
    </header>
    <main>
      <app-themes></app-themes>
    </main>
  </div>
</template>

<script>
  import MenuNav from './MenuNav'
  import HeaderIntro from './HeaderIntro'
  import AppThemes from './AppThemes'

  export default {
    components: {
      MenuNav,
      AppThemes,
      HeaderIntro
    }
  }
</script>

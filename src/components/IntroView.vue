<template>
  <div>
    <main>
      <header-intro></header-intro>
      <app-themes></app-themes>
    </main>
  </div>
</template>

<script>
  import HeaderIntro from './HeaderIntro'
  import AppThemes from './AppThemes'

  export default {
    components: {
      AppThemes,
      HeaderIntro
    }
  }
</script>

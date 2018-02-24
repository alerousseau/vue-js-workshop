<template>
  <div id="test" class="app-header">
    <button id="menu-toggle" class="btn btn-dark btn-lg toggle" v-on:click.prevent="onClickMenu">
      <i class="fa fa-bars"></i>
    </button>
    <sidebar
    :isActive="show"
    v-on:close="closeMenu"></sidebar>
  </div>
</template>

<script>
  import Sidebar from './Sidebar'

  const initialData = () => {
    return {
      show: false
    }
  }

  export default {
    components: {
      Sidebar
    },
    data: initialData,
    methods: {
      onClickMenu () {
        this.show = !this.show
      },
      closeMenu () {
        this.show = false
      }
    }
  }
</script>

<template>
  <div id="sidebar">
    <nav id="sidebar-wrapper" v-bind:class="{ active: isActive }">
      <!--<ul class="sidebar-nav">-->
        <a id="menu-close" href="#" class="btn btn-close btn-lg pull-left toggle" v-on:click.prevent="onMenuClose">
          <i class="fa fa-times"></i>
        </a>
        <div class="nav navbar-nav sidebar-nav" id="appnav">
          <router-link
            to="home"
            exact
          >
            <li class="sidebar-brand">
              <a class="js-scroll-trigger">Home</a>
            </li>
          </router-link>
          <router-link
            to="product-catalog"
            exact
          >
            <li>
              <a class="js-scroll-trigger">Products Catalog</a>
            </li>
          </router-link>
        </div>
    </nav>
  </div>
</template>

<script>
  export default {
    methods: {
      onMenuClose () {
        this.isActive = !this.isActive
        this.$emit('close')
      }
    },

    props: ['isActive']
  }
</script>


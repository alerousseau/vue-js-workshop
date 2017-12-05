<template>
  <div id="sidebar">
    <nav id="sidebar-wrapper" v-bind:class="{ active: isActive }">
      <ul class="sidebar-nav">
        <a id="menu-close" href="#" class="btn btn-light btn-lg pull-right toggle">
          <i class="fa fa-times"></i>
        </a>
        <!--<div class="collapse navbar-collapse" id="appnav">
          <div class="nav navbar-nav">
            <router-link
              to="home"
              class="nav-item nav-link"
              active-class="active"
              exact
            >
              Home
            </router-link>
            <router-link
              to="manage-products"
              class="nav-item nav-link"
              active-class="active"
              exact
            >
              Manage Products
            </router-link>
          </div>
        </div>-->
        <li class="sidebar-brand">
          <a class="js-scroll-trigger" href="#top">Start Bootstrap</a>
        </li>
        <li>
          <a class="js-scroll-trigger" href="#top">Home</a>
        </li>
        <li>
          <a class="js-scroll-trigger" href="#about">About</a>
        </li>
        <li>
          <a class="js-scroll-trigger" href="#services">Services</a>
        </li>
        <li>
          <a class="js-scroll-trigger" href="#portfolio">Portfolio</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
  export default {
  }
</script>


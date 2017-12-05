<template>
  <nav id="sidebar-wrapper">
    <ul class="sidebar-nav">
      <a id="menu-close" href="#" class="btn btn-light btn-lg pull-right toggle">
        <i class="fa fa-times"></i>
      </a>
      <div class="collapse navbar-collapse" id="appnav">
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
      </div>
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
      <li>
        <a class="js-scroll-trigger" href="#contact" onclick=$( "#menu-close").click();>Contact</a>
      </li>
    </ul>
  </nav>

    <div class="collapse navbar-collapse" id="appnav">
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
      <!--<div class="nav navbar-nav pull-sm-right">
        <div class="nav-item dropdown dropdown-cart">
          <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
            <span v-if="totalItems" class="badge badge-pill badge-primary">{{totalItems}}</span> Shopping cart
          </a>
          <div class="dropdown-menu dropdown-menu-right">
            <shopping-cart></shopping-cart>
          </div>
        </div>
      </div>-->
    </div>
</template>

<script>
import ShoppingCart from './ShoppingCart'
import { mapGetters } from 'vuex'

export default {
  components: {
    ShoppingCart
  },
  computed: {
    totalItems () {
      return this.inCart.reduce((sum, p) => sum + p.quantity, 0)
    },
    ...mapGetters({
      inCart: 'getCartItems'
    })
  }
}
</script>

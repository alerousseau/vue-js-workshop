<template>
  <div id="test">
    <button id="menu-toggle" class="btn btn-dark btn-lg toggle" v-on:click.prevent="show = !show">
      <i class="fa fa-bars"></i>
    </button>
<!--    <transition name="slide">
      <sidebar v-if="show"></sidebar>
    </transition>-->
    <!--<sidebar v-if="show"></sidebar>-->
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
    data: initialData
  }
</script>

<style>
  /* Enter and leave animations can use different */
  /* durations and timing functions.              */
  .slide-enter-active {
    position: fixed;
    z-index: 1000;
    right: 0;
    overflow-y: auto;
    width: 250px;
    height: 100%;
    -webkit-transition: all .4s ease 0s;
    -moz-transition: all .4s ease 0s;
    -ms-transition: all .4s ease 0s;
    -o-transition: all .4s ease 0s;
    transition: all .4s ease 0s;

    background: #222;
  }

</style>

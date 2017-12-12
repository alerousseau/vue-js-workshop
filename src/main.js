// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueScrollTo from 'vue-scrollto'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VueScrollTo)

Vue.config.productionTip = false

import store from './vuex/store'

// import components
import App from './App'
import IntroView from './components/IntroView'
import ProductCatalog from './components/ProductCatalog'

// import some global styles
import './styles/style.scss'
import 'font-awesome/css/font-awesome.css'

const routes = [
  { path: '/home', alias: '/', component: IntroView },
  { path: '/product-catalog', component: ProductCatalog }
]

// Create the router instance and pass the `routes` option
const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  VueScrollTo,
  render: h => h(App)
})

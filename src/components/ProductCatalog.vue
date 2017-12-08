<template>
  <div>
    <menu-nav></menu-nav>
    <p>COUCOU</p>
  </div>
<!--  <section class="row">
    <div class="col-sm-6 col-md-4" v-for="product in products">
      <section class="card card-product">
        <div class="card-content">
          <div class="card-body">
            <header class="product-info">
              <h1 class="title">{{product.name}}</h1>
              <span class="price">{{product.price}}:-</span>
            </header>
            <p v-if="product.description" class="description">{{product.description}}</p>
          </div>
        </div>
      </section>
    </div>
  </section>-->
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import MenuNav from './MenuNav'

export default {
  computed: mapGetters({
    products: 'getProducts'
  }),
  methods: mapActions([
    'fetchProducts'
  ]),
  components: {
    MenuNav
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.add-to-cart {
  margin: 0 auto;
}

.product-info {
  display: flex;
  align-items: center;


  .title {
    flex-grow: 1;
    margin: 0;
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;
  }

  .price {
    margin-left: .5rem;
    font-size: 1.25rem;
    font-weight: 700;
    flex-shrink: 0;
  }
}

.description {
  margin: 16px 0 0;
  display: none;
}

.card-product:hover .description {
  display: block;
}

</style>

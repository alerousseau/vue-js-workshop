<template>
  <div>
    <table class="table table-hover product-table">
      <thead>
      <tr>
        <th class="product-name-col">Name</th>
        <th class="product-desc-col">Description</th>
        <th class="product-delete-col"><i class="gradient-icon-add large-icons icon-plus" v-on:click.prevent.stop="openEditionForm()"
               v-bind:class="{ 'close-icon': !hideForm }"></i>
          <save-product-form
            :is-hidden="hideForm"
            :product="productInForm"
            v-on:submit="onFormSave"
            v-on:cancel="resetProductInForm"
          ></save-product-form>
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="product in products" track-by="id" > <!--v-on:click.prevent="onEdit(product)"-->
        <td>{{product.name}}</td>
        <td class="product-desc-col">{{product.description}}</td>
        <td><i class="large-icons icon-trash gradient-icon-del" v-on:click.prevent.stop="onRemove(product.id)"></i></td>
      </tr>
      <tr v-if="!products.length">
        <td colspan="5" class="p-y-3 text-xs-center">
          <strong>You should add some products!</strong>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>

import SaveProductForm from './SaveProductForm'
import { mapGetters, mapActions } from 'vuex'

const initialData = () => {
  return {
    productInForm: {
      id: null,
      name: '',
      description: ''
    },
    hideForm: true
  }
}

export default {
  components: {
    SaveProductForm
  },
  data: initialData,
  computed: mapGetters({
    products: 'getProducts'
  }),
  methods: {
    onRemove (productId) {
      this.deleteProduct(productId)
    },
    onFormSave (product) {
      this.saveProduct({ product }).then(() => this.resetProductInForm())
    },
    resetProductInForm () {
      this.productInForm = initialData().productInForm
    },
    openEditionForm () {
      this.hideForm = !this.hideForm
    },
    ...mapActions([
      'fetchProducts',
      'saveProduct',
      'deleteProduct'
    ])
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

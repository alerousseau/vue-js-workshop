<template>
  <div v-if="!isHidden" class="management-product-form">
    <span class="form-title-group">ADD/EDIT A PRODUCT</span>
    <form>
      <div class="form-content-group">
        <div class="form-group" v-bind:class="[{ 'has-danger': formErrors.name }]">
          <input type="text" v-model="product.name" class="form-control" id="productName" maxlength="32" placeholder="Enter product name">
          <div v-if="formErrors.name" class="form-control-feedback">{{formErrors.name}}</div>
        </div>

        <div class="form-group">
          <textarea class="form-control" v-model="product.description" id="productDescription" rows="3" maxlength="128" placeholder="Enter description (optional)"></textarea>
        </div>
      </div>

  <!--    <div class="form-group" v-bind:class="[{ 'has-danger': formErrors.price }]">
        <label for="price">Price</label>
        <input type="number" v-model="product.price" class="form-control" id="price" placeholder="Enter Price" number>
        <div v-if="formErrors.price" class="form-control-feedback">{{formErrors.price}}</div>
      </div>-->
      <div class="form-footer-group">
        <i v-on:click.prevent="onSubmit" class="large-icons icon-check gradient-icon-check icons-right">
        </i>
        <i v-if="product.id" v-on:click.prevent="onCancel" class="large-icons icon-close gradient-icon-del"></i>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: ['product', 'isHidden'],
  data () {
    return {
      formErrors: {}
    }
  },
  watch: {
    'product.id' () {
      this.formErrors = {}
    }
  },
  methods: {
    validateForm () {
      const errors = {}

      if (!this.product.name) {
        errors.name = 'Name is required'
      }

      this.formErrors = errors

      return Object.keys(errors).length === 0
    },
    onCancel () {
      this.formErrors = {}

      this.$emit('cancel')
    },
    onSubmit () {
      if (this.validateForm()) {
        this.$emit('submit', this.product)
      }
    }
  }
}
</script>

<style scoped>
  form {
    margin-bottom: 24px;
  }
</style>

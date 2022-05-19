<template>
  <ContentCollection
    :content-collection-item-class="productClass"
    :content-collection-legend="productLegend"
    :contents="products"
  />
</template>

<script>
import ContentCollection from "@/components/content-collection"
import products from "../data/products.json"

export default {
  name: "Products",
  components: {
    ContentCollection
  },
  props: {
    setMode: Function
  },
  mounted() {
    this.setMode()
    this.setProductItemWidth()
  },
  data: () => ({
    productClass: "product",
    productLegend: "Products",
    products: products
  }),
  methods: {
    setProductItemWidth() {
      const numberOfProducts = Object.keys(products).length
      const maxProductsPerRow = Math.floor(window.innerWidth / 500)

      let productItemMaxWidth
      if (numberOfProducts <= maxProductsPerRow) {
        productItemMaxWidth = window.innerWidth / numberOfProducts
      } else {
        productItemMaxWidth = 500
      }

      Array.from(document.getElementsByClassName("product-content-item")).forEach((elem) => {
        elem.style.maxWidth = `${productItemMaxWidth}px`
      })
    }
  }
}
</script>

<!--suppress CssUnusedSymbol -->
<style scoped>
:deep(.content-card) {
  max-width: 500px;
  /*uncomment the below css to make elements in card wrap horizontally*/
  /*display: flex;*/
}
</style>

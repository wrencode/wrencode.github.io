<template>
  <ContentCollection
    :content-collection-item-class="productClass"
    :content-collection-legend="productLegend"
    :content-collection-legend-route="productLegendRoute"
    :contents="getProductFromRoute(products)"
  />
</template>

<script>
import ContentCollection from "@/components/content-collection"
import products from "../../data/products.json"

export default {
  name: "Product",
  components: {
    ContentCollection
  },
  mounted() {
    this.setProductItemWidth()
  },
  data: () => ({
    productClass: "product",
    productLegend:
      "<html lang='en'><a href='javascript:'><i class='pi pi-arrow-circle-left'>&nbsp;</i>Back to Products</a></html>",
    productLegendRoute: "/products",
    products: products
  }),
  methods: {
    getProductFromRoute(products) {
      return products.filter((elem) => elem.key === this.$route.params.key)
    },
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
    },
    clickInternal(internalRouteUrl) {
      this.$router.push(internalRouteUrl)
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

<template>
  <ContentCollection
    :content-collection-item-class="contactClass"
    :content-collection-legend="contactLegend"
    :contents="contacts"
  />
</template>

<script>
import ContentCollection from "@/components/content-collection"
import contacts from "../data/contacts.json"

export default {
  name: "Contact",
  components: {
    ContentCollection
  },
  props: {
    setMode: Function
  },
  mounted() {
    this.setMode()
  },
  data: () => ({
    contactClass: "contact",
    contactLegend: "Meet the Team",
    contacts: contacts
  })
}
</script>

<!--suppress CssUnusedSymbol -->
<style scoped>
:deep(.content-card) {
  max-width: 500px;
  /*uncomment the below css to make elements in card wrap horizontally*/
  /*display: flex;*/
}

:deep(.p-card-title),
:deep(.p-card-subtitle) {
  text-align: left;
}
</style>

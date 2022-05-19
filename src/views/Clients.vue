<template>
  <ContentCollection
    :content-collection-item-class="clientClass"
    :content-collection-legend="clientLegend"
    :contents="clients"
  />
</template>

<script>
import ContentCollection from "@/components/content-collection"
import clients from "../data/clients.json"

export default {
  name: "Clients",
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
    clientClass: "client",
    clientLegend: "Clients",
    clients: clients
  })
}
</script>

<!--suppress CssUnusedSymbol -->
<style scoped>
:deep(.content-card) {
  max-width: 640px;
  min-height: 640px;
}

:deep(.p-card-header) {
  height: 100px;
  max-height: 100px;
}
</style>

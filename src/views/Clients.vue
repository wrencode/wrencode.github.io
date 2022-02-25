<template>
  <ContentCollection :content-collection-legend="clientLegend" :contents="clients" />
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
    clientLegend: "Clients",
    clients: clients
  })
}
</script>

<!--suppress CssUnusedSymbol -->
<style scoped>
:deep(.content-card) {
  max-width: 640px;
  min-height: 620px;
}

:deep(.p-card-header) {
  height: 100px;
  max-height: 100px;
}
</style>

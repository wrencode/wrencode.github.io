<template>
  <Card :key="clientIndex" class="client-card">
    <template #header>
      <div v-tooltip.top="getClientTooltip(clientTooltip)">
        <a :href="clientUrl" target="_blank" rel="noopener">
          <slot name="clientLogo"></slot>
        </a>
      </div>
    </template>
    <template #title> <slot name="clientTitle"></slot> </template>
    <template #content>
      <slot name="clientContent" />
    </template>
  </Card>
</template>

<script>
import Card from "primevue/card"

export default {
  name: "ClientCard",
  components: {
    Card
  },
  props: {
    clientIndex: Number,
    clientUrl: String,
    clientTooltip: String
  },
  methods: {
    getClientTooltip(clientTooltip) {
      return "Go to " + clientTooltip
    }
  }
}
</script>

<style scoped>
.client-card {
  text-align: center;
  max-width: 500px;
  display: inline-block;
  margin: 10px;
  vertical-align: top;
  min-height: 800px;
}

.client-card:hover {
  transform: scale(1.02);
  transition: all 0.5s;
}
</style>

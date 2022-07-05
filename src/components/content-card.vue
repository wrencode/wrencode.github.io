<template>
  <Card :key="cardIndex" class="content-card">
    <template #header>
      <slot name="cardHeaderImage"></slot>
    </template>
    <template #title>
      <slot name="cardTitle"></slot>
    </template>
    <template #subtitle>
      <slot name="cardSubtitle"></slot>
    </template>
    <template #content>
      <slot name="cardContent" />
    </template>
    <template #footer>
      <slot name="cardFooter"></slot>
    </template>
  </Card>
</template>

<script>
import Card from "primevue/card"

export default {
  name: "ContentCard",
  components: {
    Card
  },
  props: {
    cardIndex: Number
  }
}
</script>

<style scoped>
.content-card {
  text-align: center;
  display: inline-block;
  margin: 10px;
  vertical-align: top;
}

.content-card:hover {
  transform: scale(1.02);
  transition: all 0.5s;
}
</style>

<template>
  <div class="p-grid">
    <div class="p-col">
      <Fieldset :toggleable="false" :collapsed="false">
        <template #legend> Clients </template>
        <Card class="client-card">
          <template #title>
            <a :href="client_1" target="_blank" rel="noopener"
              >Strive Digital</a
            >
          </template>
          <template #content>
            <div class="container">
              <iframe
                :src="client_1"
                allowfullscreen
                allowtransparency="true"
                class="client-thumbnail"
              ></iframe>
            </div>
          </template>
        </Card>
        <!--<div style="width: 2%; display: inline-block"/>-->
        <!--<Card class="client-card">-->
        <!--  <template #title>-->
        <!--    <a :href="client_1">Strive Digital</a>-->
        <!--  </template>-->
        <!--  <template #content>-->
        <!--    <div class="container">-->
        <!--      <iframe :src="client_1" allowfullscreen class="client-thumbnail"></iframe>-->
        <!--    </div>-->
        <!--  </template>-->
        <!--</Card>-->
      </Fieldset>
    </div>
  </div>
</template>

<script>
import Fieldset from "primevue/fieldset";
import Card from "primevue/card";

export default {
  name: "Clients",
  components: {
    Fieldset,
    Card,
  },
  props: {
    setMode: Function,
  },
  mounted() {
    this.setMode();
  },
  data: () => ({
    client_1: "https://www.strivedigital.org",
  }),
};
</script>

<!--suppress CssUnusedSymbol -->
<style scoped>
.p-grid {
  text-align: center;
}

.p-fieldset {
  display: inline-block;
  width: 100%;
}

.client-card {
  text-align: center;
  /*width: 49%;*/
  width: 100%;
  height: 100%;
  display: inline-block;
}

.client-card:hover {
  transform: scale(1.02);
  transition: all 0.5s;
}

.p-card-title > a {
  color: var(--wren);
}

.p-card-title > a.dark-mode {
  color: var(--cactus-wren);
}

.p-card-title > a:hover {
  color: var(--red-hawk) !important;
}

.p-card-title > a.dark-mode:hover {
  color: var(--toucan) !important;
}

.p-card-title > a:visited {
  color: #4f859f;
}

.p-card-title > a.dark-mode:visited {
  color: #aac4e2;
}

.container {
  position: relative;
  overflow: hidden;
  padding-top: 70%;
  text-align: center;
}

.client-thumbnail {
  background: var(--cactus-wren);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

.client-thumbnail.dark-mode {
  background: var(--wren);
}

@media (prefers-color-scheme: dark) {
  .p-card-title > a {
    color: var(--cactus-wren);
  }

  .p-card-title > a.light-mode {
    color: var(--wren);
  }

  .p-card-title > a:hover {
    color: var(--toucan) !important;
  }

  .p-card-title > a.light-mode:hover {
    color: var(--red-hawk) !important;
  }

  .p-card-title > a:visited {
    color: #aac4e2;
  }

  .p-card-title > a.light-mode:visited {
    color: #4f859f;
  }

  .client-thumbnail {
    background: var(--wren);
  }

  .client-thumbnail.light-mode {
    background: var(--cactus-wren);
  }
}
</style>

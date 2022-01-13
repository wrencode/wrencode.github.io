<template>
  <div class="p-grid">
    <div class="p-col">
      <Fieldset :toggleable="false" :collapsed="false">
        <template #legend> Clients </template>
        <Card class="client-card">
          <template #header>
            <div v-tooltip.top="'Go to strivemessaging.org'">
              <a :href="client_1" target="_blank" rel="noopener">
                <StriveMessagingLogo class="client-logo" />
              </a>
            </div>
          </template>
          <template #title> Message Your Movement </template>
          <template #content>
            <p>
              <i>
                Strive is the broadcast texting tool made for nonprofits, and campaigns to activate their supporters.
                Strive is a powerful broadcast texting tool used by organizations and campaigns around the world. We
                make it easy to scale your messaging while building relationships with your movement.
              </i>
            </p>
            <p>
              <i>
                Grow your base, mobilize your supporters, and deepen — all in one place. We’re innovating what texting
                can do, so your messages always make an impact.
              </i>
            </p>
            <div class="container">
              <p><b>Completed & Ongoing Projects</b></p>
              <ul>
                <li>
                  Hiring
                  <ul>
                    <li>Technical screening and interviewing</li>
                  </ul>
                </li>
                <li>
                  Website & platform migration and deployment
                  <ul>
                    <li>JavaScript: Node.js, React</li>
                    <li>AWS: Route 54, S3, CodePipeline, CloudFront, AWS Certificate Manager</li>
                  </ul>
                </li>
                <li>
                  Security Compliance
                  <ul>
                    <li>SOC 2 research</li>
                    <li>Implementation of development & architecture best practices</li>
                  </ul>
                </li>
              </ul>
            </div>
          </template>
        </Card>
        <!--<Card class="client-card">-->
        <!--  <template #title>-->
        <!--    <a :href="client_1" target="_blank" rel="noopener">Strive Messaging</a>-->
        <!--  </template>-->
        <!--  <template #content>-->
        <!--    <div class="container">-->
        <!--      <iframe-->
        <!--        :src="client_1"-->
        <!--        allowfullscreen-->
        <!--        allowtransparency="true"-->
        <!--        class="client-thumbnail"-->
        <!--      ></iframe>-->
        <!--    </div>-->
        <!--  </template>-->
        <!--</Card>-->
        <!--<Card class="client-card">-->
        <!--  <template #title>-->
        <!--    <a :href="client_1" target="_blank" rel="noopener">Strive Messaging</a>-->
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
import StriveMessagingLogo from "@/components/svg/clients/strive-messaging-logo";

export default {
  name: "Clients",
  components: {
    Fieldset,
    Card,
    StriveMessagingLogo,
  },
  props: {
    setMode: Function,
  },
  mounted() {
    this.setMode();
  },
  data: () => ({
    client_1: "https://www.strivemessaging.org",
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
}

.client-card {
  text-align: center;
  max-width: 500px;
  display: inline-block;
  margin: 10px;
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

.p-card-content > p {
  text-align: left;
}

.container {
  position: relative;
  overflow: hidden;
  /*padding-top: 70%;*/
  text-align: center;
}

ul {
  text-align: left;
}

.client-logo {
  padding: 5%;
}

/*.client-thumbnail {*/
/*  background: var(--cactus-wren);*/
/*  position: absolute;*/
/*  top: 0;*/
/*  left: 0;*/
/*  width: 100%;*/
/*  height: 100%;*/
/*  border: 0;*/
/*}*/

/*.client-thumbnail.dark-mode {*/
/*  background: var(--wren);*/
/*}*/

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

  /*.client-thumbnail {*/
  /*  background: var(--wren);*/
  /*}*/

  /*.client-thumbnail.light-mode {*/
  /*  background: var(--cactus-wren);*/
  /*}*/
}
</style>

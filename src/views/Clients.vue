<template>
  <div class="p-grid">
    <div class="p-col">
      <Fieldset :toggleable="false" :collapsed="false">
        <template #legend> Clients </template>
        <ClientCard
          v-for="(client, index) in clients"
          :key="client.key"
          :client-index="index"
          :client-url="client.url"
          :client-tooltip="client.tooltip"
        >
          <template v-slot:clientLogo>
            <component :is="client.logoComponent" />
          </template>
          <template v-slot:clientTitle>
            {{ client.title }}
          </template>
          <template v-slot:clientContent>
            <ClientContent :contents="client.contents" />
          </template>
        </ClientCard>
      </Fieldset>
    </div>
  </div>
</template>

<script>
import Fieldset from "primevue/fieldset"
import ClientCard from "@/components/client-card"
import ClientContent from "@/components/clients/client-content"
import StriveMessagingLogo from "@/components/clients/svg/strive-messaging-logo"
import DittoLogo from "@/components/clients/svg/ditto-logo"

export default {
  name: "Clients",
  components: {
    Fieldset,
    ClientCard,
    ClientContent,
    StriveMessagingLogo,
    DittoLogo
  },
  props: {
    setMode: Function
  },
  mounted() {
    this.setMode()
  },
  methods: {},
  data: () => ({
    clients: [
      {
        client: "strive",
        name: "Strive Messaging",
        url: "https://www.strivemessaging.org",
        tooltip: "strivemessaging.org",
        logoComponent: "StriveMessagingLogo",
        title: "Message Your Movement",
        contents: {
          description: [
            "Strive is the broadcast texting tool made for nonprofits, and campaigns to activate their supporters. Strive is a powerful broadcast texting tool used by organizations and campaigns around the world. We make it easy to scale your messaging while building relationships with your movement.",
            "Grow your base, mobilize your supporters, and deepen — all in one place. We’re innovating what texting can do, so your messages always make an impact."
          ],
          projects: [
            {
              name: "Hiring",
              tasks: ["Technical screening and interviewing"]
            },
            {
              name: "Website & platform migration and deployment",
              tasks: [
                "JavaScript: Node.js, React",
                "AWS: Route 54, S3, CodePipeline, CloudFront, AWS Certificate Manager"
              ]
            },
            {
              name: "Security Compliance",
              tasks: ["SOC 2 research", "Implementation of development & architecture best practices"]
            }
          ]
        }
      },
      {
        client: "ditto",
        name: "Ditto",
        url: "https://www.workwithditto.com",
        tooltip: "workwithditto.com",
        logoComponent: "DittoLogo",
        title: "Work with Ditto!",
        contents: {
          description: [
            "Ditto is the first payment platform built for project-based work.",
            "Ditto is a Better Way to Pay and Be Paid.",
            "For Contractors: Never wonder if you’ll be paid - funds are collected upfront. Get paid promptly after the work is complete - every time.",
            "For Clients: Funds aren’t released until you’re satisfied. No more unsecured deposits or unmitigated resource risks."
          ],
          projects: [
            {
              name: "Development",
              tasks: ["Containerization of tech stack components"]
            },
            {
              name: "Third-party integration",
              tasks: ["Implementation of Intercom identity verification for security"]
            }
          ]
        }
      }
    ]
  })
}
</script>

<!--suppress CssUnusedSymbol -->
<style scoped>
.p-grid {
  text-align: center;
}

.p-fieldset {
  display: inline-block;
}

.p-card-header {
  height: 100px !important;
  max-height: 100px !important;
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
}
</style>

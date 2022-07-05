<template>
  <Accordion v-model:activeIndex="activeProductDocumentTab">
    <AccordionTab>
      <template #header>
        <i class="pi pi-shield">&nbsp;</i>
        <span>Privacy Policy</span>
      </template>
      <div ref="privacy" v-html="markdownToHtml(footerComponentContent.privacyPolicyMarkdown)" />
    </AccordionTab>
    <AccordionTab>
      <template #header>
        <i class="pi pi-file">&nbsp;</i>
        <span>Terms of Service</span>
      </template>
      <div ref="terms" v-html="markdownToHtml(footerComponentContent.termsOfServiceMarkdown)" />
    </AccordionTab>
  </Accordion>
  <!--  <ul>-->
  <!--    <li>-->
  <!--      <div class="product-policy">-->
  <!--        <a :href="`/products/${getProductKeyFromRoute()}/privacy`">-->
  <!--          <i class="pi pi-shield">&nbsp;</i>-->
  <!--          <span class="product-policy-label">Privacy Policy</span>-->
  <!--        </a>-->
  <!--      </div>-->
  <!--      <div class="product-policy">-->
  <!--        <a :href="`/products/${getProductKeyFromRoute()}/terms`">-->
  <!--          <i class="pi pi-file">&nbsp;</i>-->
  <!--          <span class="product-policy-label">Terms of Service</span>-->
  <!--        </a>-->
  <!--      </div>-->
  <!--    </li>-->
  <!--  </ul>-->
</template>

<script>
import Accordion from "primevue/accordion"
import AccordionTab from "primevue/accordiontab"
import { useRoute } from "vue-router"
import { marked } from "marked"

export default {
  name: "ProductPolicies",
  components: {
    Accordion,
    AccordionTab
  },
  props: {
    footerComponentContent: {
      privacyPolicyMarkdown: String,
      termsOfServiceMarkdown: String
    }
  },
  data() {
    const route = useRoute()
    let activeDocumentIndex
    if (route.query.document === "privacy") {
      activeDocumentIndex = 0
    } else if (route.query.document === "terms") {
      activeDocumentIndex = 1
    } else {
      activeDocumentIndex = null
    }
    return {
      activeProductDocumentTab: activeDocumentIndex
    }
  },
  mounted() {
    this.checkArrivalByQueryUrl()
  },
  methods: {
    checkArrivalByQueryUrl() {
      const route = useRoute()
      const documentType = route.query.document
      if (["privacy", "terms"].includes(documentType)) {
        // // emit events only propagate one level to the direct parent
        // this.$emit("scrollToRef", documentType)

        const el = this.$refs[documentType]
        const elTop = el.offsetTop
        // el.scrollIntoView({ behavior: "smooth" })
        window.scroll({
          top: elTop,
          left: 0,
          behavior: "smooth"
        })
      }
    },
    markdownToHtml(markdown) {
      return marked(markdown)
    }
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
  display: flex;
  justify-content: space-around;
}

.product-policy,
.product-policy .pi {
  transition: transform 0.2s; /* Animation */
  color: var(--wren);
}

.product-policy:hover,
.product-policy:hover .pi {
  transform: scale(1.1);
  color: var(--red-hawk);
}

.product-policy.dark-mode,
.product-policy.dark-mode .pi {
  color: var(--cactus-wren);
}

.product-policy.dark-mode:hover,
.product-policy.dark-mode:hover .pi {
  color: var(--toucan);
}

@media (prefers-color-scheme: dark) {
  .product-policy,
  .product-policy .pi {
    color: var(--cactus-wren);
  }

  .product-policy:hover,
  .product-policy:hover .pi {
    color: var(--toucan);
  }

  .product-policy.light-mode,
  .product-policy.light-mode .pi {
    color: var(--wren);
  }

  .product-policy.light-mode:hover,
  .product-policy.light-mode:hover .pi {
    color: var(--red-hawk);
  }
}
</style>

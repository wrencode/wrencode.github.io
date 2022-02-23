<!--suppress HtmlUnknownTarget -->
<template>
  <div class="p-grid">
    <div class="p-col">
      <Accordion v-model:activeIndex="activeIndex" v-on:click="onClickAccordion">
        <AccordionTab>
          <template #header>
            <i class="pi pi-globe">&nbsp;</i>
            <span>History</span>
          </template>
          <p>
            Wrencode, LLC was founded in March of 2021 by Wren Rudolph to support his side job as an independent
            technical consultant. In this capacity he provides software engineering services, machine learning and
            natural language processing expertise, as well as implementation of best practices for software
            documentation, hiring, team-building, and agile software development.
          </p>
          <p>
            Wren is a software engineer by trade, with many years of experience in the tech government contracting space
            building applications for the intelligence community. Wren completed his undergraduate studies at the
            College of William & Mary, where he double-majored in applied mathematics and linguistics. The intersection
            of these areas of interest subsequently led to his discovery of computational linguistics, which in turn
            introduced him to the worlds of natural language processing, machine learning, and artificial intelligence.
            Wren now works as a Senior Machine Learning Engineer for a FinTech startup called Botkeeper.
          </p>
        </AccordionTab>
        <AccordionTab>
          <template #header>
            <i class="pi pi-compass">&nbsp;</i>
            <span>Roadmap</span>
          </template>
          <p>
            Wrencode, LLC is a privately-owned, single-member LLC. At the present time the company exists exclusively to
            provide technical consulting services, and as such there are currently no expected upcoming milestones for
            the growth and development of the company.
          </p>
        </AccordionTab>
        <AccordionTab>
          <template #header>
            <i class="pi pi-question-circle">&nbsp;</i>
            <span>FAQs</span>
          </template>
          <p>
            <b>Q: Are you hiring?</b>
            <br />
            <i>A: No, Wrencode is a single-member LLC, and is not currently in need of any services.</i>
            <br /><br />
            <b>Q: Are you looking for additional clients?</b>
            <br />
            <i
              >A: At the present time Wrencode is not actively seeking new clients, but please contact
              <a href="/contact">Wren Rudolph</a> to discuss available opportunities.</i
            >
            <br /><br />
            <b>Q: Do you provide additional technical services besides those listed?</b>
            <br />
            <i
              >A: Yes, Wrencode is open to a variety of technical services beyond those explicitly specified in
              <a href="/services">Services</a>. Please reach out to <a href="/contact">Wren Rudolph</a> with any
              inquiries.
            </i>
          </p>
        </AccordionTab>
      </Accordion>
    </div>
  </div>
</template>

<script>
import Accordion from "primevue/accordion"
import AccordionTab from "primevue/accordiontab"

export default {
  name: "About",
  components: {
    Accordion,
    AccordionTab
  },
  props: {
    setMode: Function
  },
  methods: {
    onClickAccordion() {
      this.setMode()
    }
  },
  mounted() {
    this.setMode()
  },
  data() {
    return {
      activeIndex: 0
    }
  }
}
</script>

<!--suppress CssUnusedSymbol -->
<style>
.p-accordion {
  background: var(--cactus-wren) !important;
  font-family: "Source Code Pro", Roboto, sans-serif !important;
}

.p-accordion.dark-mode {
  background: var(--wren) !important;
}

.p-accordion-tab {
  margin-top: 20px;
  border-style: solid;
  border-width: 4px;
  border-color: var(--wren) !important;
  border-radius: 5px;
}

.p-accordion-tab.dark-mode {
  border-color: var(--cactus-wren) !important;
}

.p-accordion-tab:hover {
  border-color: var(--red-hawk) !important;
}

.p-accordion-tab.dark-mode:hover {
  border-color: var(--toucan) !important;
}

.p-accordion-header-link {
  background: var(--cactus-wren) !important;
  color: var(--wren) !important;
  border: none !important;
  border-radius: 0 !important;
}

.p-accordion-header-link.dark-mode {
  background: var(--wren) !important;
  color: var(--cactus-wren) !important;
}

.p-accordion-header-link:focus {
  box-shadow: none !important;
}

.p-accordion-content {
  text-align: left;
  font-size: var(--font-size-normal);
  background: var(--cactus-wren) !important;
  color: var(--wren) !important;
  border: none !important;
}

.p-accordion-content.dark-mode {
  background: var(--wren) !important;
  color: var(--cactus-wren) !important;
}

.p-accordion-tab:hover > .p-accordion-header .p-accordion-header-link,
.p-accordion-tab-active:hover > .p-accordion-header .p-accordion-header-link {
  color: var(--red-hawk) !important;
}

.p-accordion-tab:hover > .p-accordion-header .p-accordion-header-link.dark-mode,
.p-accordion-tab-active:hover > .p-accordion-header .p-accordion-header-link.dark-mode {
  color: var(--toucan) !important;
}

a {
  color: var(--wren) !important;
}

a.dark-mode {
  color: var(--cactus-wren) !important;
}

a:hover {
  color: var(--red-hawk) !important;
}

a.dark-mode:hover {
  color: var(--toucan) !important;
}

a:visited {
  color: #4f859f !important;
}

a.dark-mode:visited {
  color: #aac4e2 !important;
}

@media (prefers-color-scheme: dark) {
  .p-accordion {
    background: var(--wren) !important;
  }

  .p-accordion.light-mode {
    background: var(--cactus-wren) !important;
  }

  .p-accordion-tab {
    border-color: var(--cactus-wren) !important;
  }

  .p-accordion-tab.light-mode {
    border-color: var(--wren) !important;
  }

  .p-accordion-tab:hover {
    border-color: var(--toucan) !important;
  }

  .p-accordion-tab.light-mode:hover {
    border-color: var(--red-hawk) !important;
  }

  .p-accordion-header-link {
    background: var(--wren) !important;
    color: var(--cactus-wren) !important;
  }

  .p-accordion-header-link.light-mode {
    background: var(--cactus-wren) !important;
    color: var(--wren) !important;
  }

  .p-accordion-content {
    background: var(--wren) !important;
    color: var(--cactus-wren) !important;
  }

  .p-accordion-content.light-mode {
    background: var(--cactus-wren) !important;
    color: var(--wren) !important;
  }

  .p-accordion-tab:hover > .p-accordion-header .p-accordion-header-link,
  .p-accordion-tab-active:hover > .p-accordion-header .p-accordion-header-link {
    color: var(--toucan) !important;
  }

  .p-accordion-tab:hover > .p-accordion-header .p-accordion-header-link.light-mode,
  .p-accordion-tab-active:hover > .p-accordion-header .p-accordion-header-link.light-mode {
    color: var(--red-hawk) !important;
  }

  a {
    color: var(--cactus-wren) !important;
  }

  a.light-mode {
    color: var(--wren) !important;
  }

  a:hover {
    color: var(--toucan) !important;
  }

  a.light-mode:hover {
    color: var(--red-hawk) !important;
  }

  a:visited {
    color: #aac4e2 !important;
  }

  a.light-mode:visited {
    color: #4f859f !important;
  }
}
</style>

<template>
  <div class="p-grid">
    <div class="p-col">
      <Accordion v-model:activeIndex="activeIndex">
        <AccordionTab>
          <template #header>
            <i class="pi pi-globe">&nbsp;</i>
            <span>History</span>
          </template>
          <p style="text-indent: 1em">
            Wrencode, LLC was founded in March of 2021 by Wren Rudolph to
            support his side job as an independent technical consultant. In this
            capacity he provides software engineering services, machine learning
            and natural language processing expertise, as well as implementation
            of best practices for software documentation, hiring, team-building,
            and agile software development.
          </p>
          <p style="text-indent: 1em">
            Wren is a software engineer by trade, with many years of experience
            in the tech government contracting space building applications for
            the intelligence community. Wren completed his undergraduate studies
            at the College of William & Mary, where he double-majored in applied
            mathematics and linguistics. The intersection of these areas of
            interest subsequently led to his discovery of computational
            linguistics, which in turn introduced him to the worlds of natural
            language processing, machine learning, and artificial intelligence.
            Wren now works as a Senior Machine Learning Engineer for a FinTech
            startup called Botkeeper.
          </p>
        </AccordionTab>
        <AccordionTab>
          <template #header>
            <i class="pi pi-compass">&nbsp;</i>
            <span>Roadmap</span>
          </template>
          <p style="text-indent: 1em">
            Wrencode, LLC is a privately-owned, single-member LLC. At the
            present time the company exists exclusively to provide technical
            consulting services, and as such there are currently no expected
            upcoming milestones for the growth and development of the company.
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
            <i
              >A: No, Wrencode is a single-member LLC, and is not currently in
              need of any services.</i
            >
            <br /><br />
            <b>Q: Are you looking for additional clients?</b>
            <br />
            <i
              >A: No, at the present time Wrencode is not accepting new
              clients.</i
            >
            <br /><br />
            <b
              >Q: Do you provide additional technical services besides those
              listed above?</b
            >
            <br />
            <i
              >A: Yes, Wrencode is open to a variety of technical services
              beyond those previously specified. Please reach out to
              <a href="/contact">Wren Rudolph</a> with any inquiries.
            </i>
          </p>
        </AccordionTab>
      </Accordion>
    </div>
  </div>
</template>

<script>
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";

export default {
  name: "About",
  components: {
    Accordion,
    AccordionTab,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      activeIndex: 0,
    };
  },
};
</script>

<style>
.p-accordion {
  background: #aba18c !important;
}

.p-accordion-tab {
  margin-top: 20px;
  border-style: solid;
  border-width: 4px;
  border-color: #4a4139;
  border-radius: 5px;
}

.p-accordion-tab:hover {
  border-color: #7e3227;
}

.p-accordion-header-link {
  background: #aba18c !important;
  color: #4a4139 !important;
  border: none !important;
  border-radius: 0 !important;
}

.p-accordion-header-link:focus {
  box-shadow: none !important;
}

.p-accordion-content {
  text-align: left;
  font-size: 14pt;
  background: #aba18c !important;
  color: #4a4139 !important;
  border: none !important;
}

.p-accordion-tab:hover > .p-accordion-header .p-accordion-header-link,
.p-accordion-tab-active:hover > .p-accordion-header .p-accordion-header-link {
  color: #7e3227 !important;
}

@media (prefers-color-scheme: dark) {
  .p-accordion {
    background: #4a4139 !important;
  }

  .p-accordion-tab {
    border-color: #aba18c;
  }

  .p-accordion-tab:hover {
    border-color: #f09651;
  }

  .p-accordion-header-link {
    background: #4a4139 !important;
    color: #aba18c !important;
  }

  .p-accordion-content {
    background: #4a4139 !important;
    color: #aba18c !important;
  }

  .p-accordion-tab:hover > .p-accordion-header .p-accordion-header-link,
  .p-accordion-tab-active:hover > .p-accordion-header .p-accordion-header-link {
    color: #f09651 !important;
  }
}
</style>

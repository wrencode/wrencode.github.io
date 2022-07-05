<template>
  <div class="p-grid">
    <div class="p-col">
      <Fieldset :toggleable="false" :collapsed="false">
        <!--TODO: figure out how to update dynamic content collection legend with dark/light modes -->
        <template #legend v-if="!contentCollectionLegend.includes('html')"> {{ contentCollectionLegend }}</template>
        <template #legend v-else>
          <span
            v-if="contentCollectionLegend.includes('href')"
            v-on:click="clickInternal(contentCollectionLegendRoute)"
            v-html="contentCollectionLegend"
          ></span>
          <span v-else v-html="contentCollectionLegend"></span>
        </template>
        <div class="content-cards">
          <ContentCard
            v-for="(content, index) in contents"
            :class="createContentClass(contentCollectionItemClass)"
            :key="content.key"
            :card-index="index"
          >
            <!--TODO: figure out how to update dynamic content collection header SVG with dark/light modes -->
            <template v-slot:cardHeaderImage>
              <div
                v-if="Object.prototype.hasOwnProperty.call(content, 'tooltip')"
                v-tooltip.top="getCardHeaderTooltip(content.tooltip)"
              >
                <!--  <a-->
                <!--    v-if="Object.prototype.hasOwnProperty.call(content, 'url') && !content.url.startsWith('/')"-->
                <!--    v-bind:href="content.url"-->
                <!--  >-->
                <a
                  v-if="Object.prototype.hasOwnProperty.call(content, 'url') && !content.url.startsWith('/')"
                  :href="content.url"
                  target="_blank"
                  rel="noopener"
                >
                  <component :is="content.headerComponent" />
                </a>
                <a
                  v-else-if="Object.prototype.hasOwnProperty.call(content, 'url') && content.url.startsWith('/')"
                  v-on:click="clickInternal(content.url)"
                  href="javascript:"
                >
                  <component :is="content.headerComponent" />
                </a>
                <component v-else :is="content.headerComponent" />
              </div>
              <div v-else>
                <!--  <a-->
                <!--    v-if="Object.prototype.hasOwnProperty.call(content, 'url') && !content.url.startsWith('/')"-->
                <!--    v-bind:href="content.url"-->
                <!--  >-->
                <a
                  v-if="Object.prototype.hasOwnProperty.call(content, 'url') && !content.url.startsWith('/')"
                  :href="content.url"
                  target="_blank"
                  rel="noopener"
                >
                  <component :is="content.headerComponent" />
                </a>
                <a
                  v-else-if="Object.prototype.hasOwnProperty.call(content, 'url') && content.url.startsWith('/')"
                  v-on:click="clickInternal(content.url)"
                  href="javascript:"
                >
                  <component :is="content.headerComponent" />
                </a>
                <component v-else :is="content.headerComponent" />
              </div>
            </template>
            <template v-if="Object.prototype.hasOwnProperty.call(content, 'title')" v-slot:cardTitle>
              <!--  <a-->
              <!--    v-if="Object.prototype.hasOwnProperty.call(content, 'url') && !content.url.startsWith('/')"-->
              <!--    v-bind:href="content.url"-->
              <!--  >-->
              <a
                v-if="Object.prototype.hasOwnProperty.call(content, 'url') && !content.url.startsWith('/')"
                :href="content.url"
                target="_blank"
                rel="noopener"
              >
                {{ content.title }}
              </a>
              <a
                v-else-if="Object.prototype.hasOwnProperty.call(content, 'url') && content.url.startsWith('/')"
                v-on:click="clickInternal(content.url)"
                href="javascript:"
              >
                {{ content.title }}
              </a>
              <span v-else>
                {{ content.title }}
              </span>
            </template>
            <template v-if="Object.prototype.hasOwnProperty.call(content, 'subtitle')" v-slot:cardSubtitle>
              {{ content.subtitle }}
              <div v-if="Object.prototype.hasOwnProperty.call(content, 'subtitleGitHubUrl')">
                <a :href="content.subtitleGitHubUrl" target="_blank" rel="noopener">
                  {{ content.subtitleGitHubUrl }}
                </a>
              </div>
            </template>
            <template v-if="Object.prototype.hasOwnProperty.call(content, 'about')" v-slot:cardContent>
              <div class="content-container">
                <p :key="index" v-for="(paragraph, index) in content.about.description">
                  <i>{{ paragraph }}</i>
                </p>
                <div v-if="Object.prototype.hasOwnProperty.call(content, 'screenshotComponentPath')">
                  <br class="divider" />
                  <component :is="content.screenshotComponent" />
                </div>
                <br class="divider" />
                <p>
                  <b>{{ content.about.bulletsTitle }}</b>
                </p>
                <ul>
                  <li :key="index" v-for="(project, index) in content.about.bullets">
                    {{ project.name }}
                    <ul>
                      <li :key="index" v-for="(task, index) in project.items">
                        {{ task }}
                      </li>
                    </ul>
                  </li>
                </ul>
                <!-- https://prismjs.com/#supported-languages -->
                <div
                  v-bind:class="`product-markdown language-` + content.markdown.prismProgrammingLanguage"
                  v-if="Object.prototype.hasOwnProperty.call(content, 'markdown')"
                  v-html="markdownToHtml(content.markdown.body)"
                />
              </div>
            </template>
            <template v-if="Object.prototype.hasOwnProperty.call(content, 'footerComponent')" v-slot:cardFooter>
              <component :is="content.footerComponent" :footer-component-content="content.footerComponentContent" />
            </template>
          </ContentCard>
        </div>
      </Fieldset>
    </div>
  </div>
</template>

<script>
import Fieldset from "primevue/fieldset"
import ContentCard from "@/components/content-card"
import { defineAsyncComponent } from "vue"
import { marked } from "marked"
import Prism from "prismjs"

export default {
  name: "ContentCollection",
  components: {
    Fieldset,
    ContentCard
  },
  props: {
    contentCollectionLegend: String,
    contentCollectionLegendRoute: String,
    contentCollectionItemClass: String,
    contents: {
      type: Object,
      default() {
        return {
          key: String,
          url: String,
          tooltip: String,
          headerComponentPath: String,
          headerComponent: String,
          title: String,
          subtitle: String,
          subtitleGitHubUrl: String,
          about: {
            description: Object,
            bulletsTitle: String,
            bullets: Object
          },
          screenshotComponentPath: String,
          screenshotComponent: String,
          markdown: {
            body: String,
            prismProgrammingLanguage: String
          },
          footerComponentPath: String,
          footerComponent: String,
          footerComponentContent: Object
        }
      }
    }
  },
  created() {
    for (let content of this.contents) {
      console.log(content)
      if (
        Object.prototype.hasOwnProperty.call(content, "headerComponent") &&
        Object.prototype.hasOwnProperty.call(content, "headerComponentPath")
      ) {
        this.$options.components[content.headerComponent] = defineAsyncComponent(() =>
          import(`@/components/${content.headerComponentPath}.vue`)
        )
      }
      if (
        Object.prototype.hasOwnProperty.call(content, "footerComponent") &&
        Object.prototype.hasOwnProperty.call(content, "footerComponentPath")
      ) {
        this.$options.components[content.footerComponent] = defineAsyncComponent(() =>
          import(`@/components/${content.footerComponentPath}.vue`)
        )
      }
      if (
        Object.prototype.hasOwnProperty.call(content, "screenshotComponent") &&
        Object.prototype.hasOwnProperty.call(content, "screenshotComponentPath")
      ) {
        this.$options.components[content.screenshotComponent] = defineAsyncComponent(() =>
          import(`@/components/${content.screenshotComponentPath}.vue`)
        )
      }
    }
  },
  mounted() {
    if (!this.contentCollectionLegend) {
      Array.from(document.getElementsByClassName("p-fieldset-legend")).forEach((elem) => (elem.style.display = "none"))
    }

    window.Prism = window.Prism || {}
    window.Prism.manual = true
    Prism.highlightAll()
  },
  computed: {},
  methods: {
    getCardHeaderTooltip(cardHeaderTooltip) {
      return cardHeaderTooltip
    },
    markdownToHtml(markdown) {
      return marked(markdown)
    },
    createContentClass(contentName) {
      return `${contentName.toString().toLowerCase()}-content-item`
    },
    clickInternal(internalRouteUrl) {
      this.$router.push(internalRouteUrl)
    }
  }
}
</script>

<!--suppress CssUnusedSymbol -->
<style scoped>
.p-fieldset {
  display: inline-block;
}

.content-cards {
  text-align: center;
}

.content-container {
  position: relative;
  overflow: hidden;
  /*padding-top: 70%;*/
  text-align: center;
}

.content-container .product-markdown {
  text-align: left;
}

.divider {
  display: block;
  content: "";
  margin-top: 20px;
}

.p-card-content p {
  text-align: left;
  font-size: var(--font-size-small);
}

.p-card-content ul {
  text-align: left;
  margin-top: 0.5em;
  font-size: var(--font-size-small);
}

.p-card-content li {
  margin-bottom: 0.5em;
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

.p-card-subtitle a {
  color: var(--wren);
}

.p-card-subtitle a.dark-mode {
  color: var(--cactus-wren);
}

.p-card-subtitle a:hover {
  color: var(--red-hawk) !important;
}

.p-card-subtitle a.dark-mode:hover {
  color: var(--toucan) !important;
}

.p-card-subtitle a:visited {
  color: #4f859f;
}

.p-card-subtitle a.dark-mode:visited {
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

  .p-card-subtitle a {
    color: var(--cactus-wren);
  }

  .p-card-subtitle a.light-mode {
    color: var(--wren);
  }

  .p-card-subtitle a:hover {
    color: var(--toucan) !important;
  }

  .p-card-subtitle a.light-mode:hover {
    color: var(--red-hawk) !important;
  }

  .p-card-subtitle a:visited {
    color: #aac4e2;
  }

  .p-card-subtitle a.light-mode:visited {
    color: #4f859f;
  }
}
</style>

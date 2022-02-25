<template>
  <div class="p-grid">
    <div class="p-col">
      <Fieldset :toggleable="false" :collapsed="false">
        <template #legend> {{ contentCollectionLegend }}</template>
        <div class="content-cards">
          <ContentCard
            v-for="(content, index) in contents"
            :key="content.key"
            :card-index="index"
            :card-header-url="content.url"
            :card-header-tooltip="content.tooltip"
          >
            <template v-slot:cardHeaderImage>
              <component :is="content.headerComponent" />
            </template>
            <template v-if="Object.prototype.hasOwnProperty.call(content, 'title')" v-slot:cardTitle>
              {{ content.title }}
            </template>
            <template v-if="Object.prototype.hasOwnProperty.call(content, 'subtitle')" v-slot:cardSubtitle>
              {{ content.subtitle }}
            </template>
            <template v-slot:cardContent>
              <div class="content-container">
                <p :key="index" v-for="(paragraph, index) in content.about.description">
                  <i>{{ paragraph }}</i>
                </p>
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
              </div>
            </template>
            <template v-if="Object.prototype.hasOwnProperty.call(content, 'footerComponent')" v-slot:cardFooter>
              <component :is="content.footerComponent" />
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

export default {
  name: "ContentCollection",
  components: {
    Fieldset,
    ContentCard
  },
  props: {
    contentCollectionLegend: String,
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
          about: {
            description: Object,
            bulletsTitle: String,
            bullets: Object
          },
          footerComponentPath: String,
          footerComponent: String
        }
      }
    }
  },
  created() {
    for (let content of this.contents) {
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

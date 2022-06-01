<!--suppress JSUnusedLocalSymbols -->
<template>
  <div class="p-grid">
    <div class="p-col">
      <div class="chart-container">
        <Chart type="doughnut" :data="chartData" :options="options" :key="darkMode" />
      </div>
    </div>
  </div>
</template>

<script>
import Chart from "primevue/chart"
// noinspection ES6CheckImport
import { Chart as ChartJs } from "chart.js"
import ChartDataLabels from "chartjs-plugin-datalabels"

ChartJs.plugins.register(ChartDataLabels)

export default {
  name: "Services",
  components: {
    Chart
  },
  props: {
    darkMode: Boolean
  },
  methods: {
    getServices() {
      return [
        {
          category: "Software Engineering",
          abbr: "SE",
          value: 30
        },
        {
          category: "Technical Consulting",
          abbr: "TC",
          value: 25
        },
        {
          category: "Full-Stack Development",
          abbr: "FSD",
          value: 30
        },
        {
          category: "Natural Language Processing",
          abbr: "NLP",
          value: 15
        }
      ]
    },
    getServicesLabels() {
      let services = this.getServices().sort(function (first, second) {
        return second.value - first.value
      })

      let sortedServicesLabels = []
      for (let service of services) {
        sortedServicesLabels.push(service.category)
      }

      return sortedServicesLabels
    },
    getServicesAbbrs() {
      let services = this.getServices().sort(function (first, second) {
        return second.value - first.value
      })

      let sortedServicesAbbrs = []
      for (let service of services) {
        sortedServicesAbbrs.push(service.abbr)
      }

      return sortedServicesAbbrs
    },
    getServicesValues() {
      let services = this.getServices().sort(function (first, second) {
        return second.value - first.value
      })

      let sortedServicesValues = []
      for (let service of services) {
        sortedServicesValues.push(service.value)
      }

      return sortedServicesValues
    }
  },
  data() {
    return {
      chartData: {
        labels: this.getServicesLabels(),
        // labels: [
        //   "Software Development",
        //   "Technical Consulting",
        //   "Full-Stack Development",
        //   "Natural Language Processing",
        // ],
        datasets: [
          {
            data: this.getServicesValues(),
            // data: [40, 25, 20, 15],
            backgroundColor: [
              "rgba(79, 133, 159, 0.75)", // jay bird
              "rgba(209,242,235,0.75)", // humming bird
              "rgba(120, 82, 88, 0.75)", // falcon
              "rgba(170, 196, 226, 0.75)" // blue bird
            ],
            hoverBackgroundColor: [
              "#4f859f", // jay bird
              "#d1f2eb", // humming bird
              "#785258", // falcon
              "#aac4e2" // blue bird
            ]
          }
        ]
      },
      plugins: [ChartDataLabels]
    }
  },
  computed: {
    options() {
      let darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches

      let darkModeSelected = false
      let lightModeSelected = false
      if (this.darkMode) {
        if (document.getElementById("app").classList.contains("dark-mode")) {
          darkModeSelected = true
        }
      } else {
        if (document.getElementById("app").classList.contains("light-mode")) {
          lightModeSelected = true
        }
      }

      let colorSchemeFontColor = "#4a4139"
      let colorSchemeBorderColor = "#aba18c"
      let colorSchemeHoverBorderColor = "#7e3227"
      let colorSchemeBackgroundColor = "rgba(256, 256, 256, 0.75)"
      if ((darkMode || darkModeSelected) && !lightModeSelected) {
        colorSchemeFontColor = "#aba18c"
        colorSchemeBorderColor = "#4a4139"
        colorSchemeHoverBorderColor = "#f09651"
        colorSchemeBackgroundColor = "rgba(0, 0, 0, 0.75)"
      }

      return {
        responsive: true,
        maintainAspectRatio: false,
        hoverMode: "index",
        stacked: false,
        cutoutPercentage: "25",
        elements: {
          arc: {
            borderColor: colorSchemeBorderColor,
            borderWidth: 2,
            borderAlign: "inner",
            hoverBorderColor: colorSchemeHoverBorderColor,
            hoverBorderWidth: 4,
            hoverOffset: 4
          }
        },
        events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
        legend: {
          position: "top",
          align: "center",
          labels: {
            fontSize: 20,
            fontWeight: "bold",
            fontFamily: "Source Code Pro",
            fontColor: colorSchemeFontColor,
            align: "left"
          },
          onClick: function (e, legendItem) {
            // TODO: come up with something interesting to do when the legends are clicked
            /* eslint-disable no-unused-vars */
            let event = e
            let item = legendItem
            /* eslint-enable no-unused-vars */
          }
        },
        title: {
          display: true,
          position: "top",
          textAlign: "left",
          text: "Services",
          fontSize: 20,
          fontWeight: "bold",
          fontColor: colorSchemeFontColor,
          fontFamily: "Source Code Pro",
          lineHeight: 1
        },
        tooltips: {
          bodyFontFamily: "Source Code Pro",
          bodyFontSize: 16,
          bodyFontColor: colorSchemeFontColor,
          backgroundColor: colorSchemeBackgroundColor,
          displayColors: false,
          caretSize: 5,
          caretPadding: 10,
          callbacks: {
            label: function (tooltipItem, data) {
              return data.labels[tooltipItem.index]
              // let label = data.labels[tooltipItem.index];
              // let value =
              //   data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
              // return label + ": " + value + "%";
            }
          }
        },
        plugins: {
          datalabels: {
            color: colorSchemeFontColor,
            font: {
              family: "Source Code Pro",
              size: 20,
              weight: "bold"
            },
            // borderWidth: 2,
            // borderColor: colorSchemeBorderColor,
            borderRadius: 5,
            backgroundColor: colorSchemeBorderColor,
            formatter: (value, context) => {
              return this.getServicesAbbrs()[context.dataIndex] + ": " + value + "%"
              // return context.chart.data.labels[context.dataIndex] + "\n" + value + "%"
              // return value + "%"
            }
          }
        }
      }
    }
  }
}
</script>

<!--suppress CssUnusedSymbol -->
<style>
.chart-container {
  position: relative;
  width: 100%;
  /*height: 1000px;*/
  height: 75vh;
  min-height: 640px;
}

.p-chart {
  height: 75vh;
  min-height: 540px;
}
</style>

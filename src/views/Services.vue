<template>
  <div class="p-grid">
    <div class="p-col">
      <div class="chart-container">
        <Chart type="doughnut" :data="chartData" :options="options" />
      </div>
    </div>
  </div>
</template>

<script>
import Chart from "primevue/chart";

export default {
  name: "Services",
  components: {
    Chart,
  },
  props: {
    msg: String,
  },
  data() {
    let darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

    let colorSchemeFontColor = "#4a4139";
    let colorSchemeBorderColor = "#aba18c";
    let colorSchemeHoverBorderColor = "#7e3227";
    let colorSchemeBackgroundColor = "rgba(256, 256, 256, 0.75)";
    if (darkMode) {
      colorSchemeFontColor = "#aba18c";
      colorSchemeBorderColor = "#4a4139";
      colorSchemeHoverBorderColor = "#f09651";
      colorSchemeBackgroundColor = "rgba(0, 0, 0, 0.75)";
    }

    return {
      chartData: {
        labels: [
          "Software Development",
          "Technical Consulting",
          "Machine Learning",
          "Natural Language Processing",
        ],
        datasets: [
          {
            data: [40, 25, 20, 15],
            backgroundColor: [
              "rgba(79, 133, 159, 0.75)",
              "rgba(209, 242, 235, 0.75)",
              "rgba(120, 82, 88, 0.75)",
              "rgba(170, 196, 226, 0.75)",
            ], // jay bird, humming bird, falcon, blue bird
            hoverBackgroundColor: ["#4f859f", "#d1f2eb", "#785258", "#aac4e2"],
          },
        ],
      },
      options: {
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
            hoverOffset: 4,
          },
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
            align: "left",
          },
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
          lineHeight: 1,
        },
        tooltips: {
          bodyFontFamily: "Source Code Pro",
          bodyFontSize: 20,
          bodyFontColor: colorSchemeFontColor,
          backgroundColor: colorSchemeBackgroundColor,
          displayColors: false,
          caretSize: 5,
          caretPadding: 10,
        },
      },
    };
  },
};
</script>

<style>
.chart-container {
  position: relative;
  width: 100%;
  height: 1000px;
}

.p-chart {
  height: 100vh;
}
</style>

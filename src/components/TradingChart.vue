<!-- src/components/TradingChart.vue -->
<template>
  <div ref="chartContainer" class="chart-container"></div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
import { createChart } from 'lightweight-charts';

export default {
  name: 'TradingChart',
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const chartContainer = ref(null); // Reference to the chart container
    const chart = ref(null); // Reference to the chart instance
    const lineSeries = ref(null); // Reference to the line series

    // Function to initialize the chart
    const initChart = () => {
      chart.value = createChart(chartContainer.value, {
        width: chartContainer.value.clientWidth,
        height: 400,
      });
      lineSeries.value = chart.value.addLineSeries();
      lineSeries.value.setData(props.data);
    };

    // Watch for data changes and update the chart
    watch(
      () => props.data,
      (newData) => {
        if (lineSeries.value) {
          lineSeries.value.setData(newData);
        }
      }
    );

    // Resize chart on window resize
    const resizeChart = () => {
      chart.value.resize(chartContainer.value.clientWidth, 400);
    };

    // Initialize the chart on mount and set up resize listener
    onMounted(() => {
      initChart();
      window.addEventListener('resize', resizeChart);
    });

    // Clean up on unmount
    onBeforeUnmount(() => {
      window.removeEventListener('resize', resizeChart);
      chart.value?.remove();
    });

    return {
      chartContainer,
    };
  },
};
</script>

<style scoped>
.chart-container {
  width: 95%;
  height: 100%;
  box-shadow: #000 0px 0px 3px;
  border-radius: 10px;
  background-color:rgb(58, 58, 58);
}
</style>

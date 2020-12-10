<script>
import { Chart } from 'highcharts-vue'

export default {
  components: {
    highcharts: Chart
  },
  data: () => ({
    chartOptions: {
      series: [{
        data: [1,2,3]
      }]
    }
  }),
}
</script>

<template>
  <highcharts :options="chartOptions"></highcharts>
</template>

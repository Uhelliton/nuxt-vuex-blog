<script>
import ChartLine from '../../../../components/charts/ChartLine'
import ChartDual from '../../../../components/charts/ChartDual'
export default {
  name: 'Dashboard',
  components: { ChartLine, ChartDual },
  layout: 'auth',
  middleware: 'authenticated',
}
</script>

<template>
  <div class="row mt-5">
    <div class="col-md-6">
      <chart-line />
    </div>
    <div class="col-md-6">
      <chart-dual />
    </div>
  </div>
</template>

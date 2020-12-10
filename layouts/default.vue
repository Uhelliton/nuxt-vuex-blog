<template>
  <div>
    <LayoutHeader />
    <LayoutMain />
    <div class="main-wrapper">
      <Nuxt />
      <LayoutFooter />
    </div>
  </div>
</template>

<script>
import LayoutHeader from '../components/layouts/header'
import LayoutMain from '../components/layouts/main'
import LayoutFooter from '../components/layouts/footer'

export default {
  name: 'LayoutDefault',
  components: {
    LayoutHeader,
    LayoutMain,
    LayoutFooter
  }
}
</script>

<template>
  <div>
    <LayoutHeader />
    <div class="main-wrapper">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import LayoutHeader from '../components/layouts/header'
import LayoutFooter from '../components/layouts/footer'

export default {
  name: 'LayoutAuth',
  components: {
    LayoutHeader,
    LayoutFooter
  }
}
</script>

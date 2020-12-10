<template>
  <footer class="footer text-center py-2 theme-bg-dark">
    <small class="copyright">
      <i class="fas fa-heart" style="color: #fb866a;"></i>
      Copyright © 2013-{{ now }}
    </small>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data: () => ({
    now: new Date().getFullYear()
  })
}
</script>

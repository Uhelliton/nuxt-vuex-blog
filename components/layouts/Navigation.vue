<template>
  <ul class="navbar-nav flex-column text-left">
    <li class="nav-item active">
      <NuxtLink class="nav-link" to="/">
        <i class="fas fa-home fa-fw mr-2"></i>
        Blog Home
        <span class="sr-only">(current)</span>
      </NuxtLink>
    </li>
    <li class="nav-item">
      <NuxtLink class="nav-link" to="/about-dsd">
        <i class="fas fa-user fa-fw mr-2"></i> Quem Somos
      </NuxtLink>
    </li>
    <li class="nav-item">
      <NuxtLink class="nav-link" to="/dashboard">
        <i class="fa fa-envelope fa-fw mr-2"></i> Dashboard
      </NuxtLink>
    </li>
    <li class="nav-item">
      <NuxtLink class="nav-link" :to="{ name: 'category.single', params: {slug: 'slug-post'} }">
        <i class="fa fa-envelope fa-fw mr-2"></i> Dashboards
      </NuxtLink>
    </li>
    <li class="nav-item">
      <NuxtLink class="nav-link" to="/contact">
        <i class="fa fa-envelope fa-fw mr-2"></i> Contato
      </NuxtLink>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Navigation',
}
</script>

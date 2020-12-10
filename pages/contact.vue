<template>
  <article class="about-section py-5">
    <div class="container">
      <h2 class="title mb-3">Pagina de contato</h2>
    </div>
  </article>
</template>

<script>
export default {
  name: 'Contact',
  head: {
    title: 'Contato',
    meta: [
      { charset: 'utf-8' },
      {
        hid: 'description',
        name: 'description',
        content: 'descrição do meu site'
      },
    ],
    script: [
      {
        src: 'goomap/15456'
      }
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap'
      }
    ]
  }
}
</script>

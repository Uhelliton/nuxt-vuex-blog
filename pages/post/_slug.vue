<template>
  <article class="about-section py-5">
    <div class="container">
      <h2 class="title mb-3">Postagem: {{ slug }} </h2>

      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. </p>
      <figure>
        <img class="img-fluid" src="images/about-me.jpg" alt="image">
      </figure>
    </div>
  </article>
</template>

<script>
export default {
  name: 'About',
  head: {
    title: 'Postagem',
    meta: [
      { charset: 'utf-8' },
      {
        hid: 'description',
        name: 'description',
        content: 'descrição do meu site'
      }
    ],
  },
  async asyncData({ params }) {
    const { slug } = params
    return { slug }
  }
}
</script>

<template>
  <div>
    <section class="blog-list px-3 py-5 p-md-5">
      <div class="container">
        <p v-if="$fetchState.pending">Buscando registro...</p>
        <p v-else-if="$fetchState.error">Ocorreu um error :(</p>
        <div v-else>
          <div class="item mb-5"
               v-for="(post, index) in posts"
               :key="index">
                <div class="media">
                  <img class="mr-3 img-fluid post-thumb d-none d-md-flex" src="images/blog/blog-post-thumb-4.jpg" alt="image">
                  <div class="media-body">
                    <h3 class="title mb-1">
                      <a href="#"></a>
                      <nuxt-link :to="'/post/' + slugify(post.title)" append>
                        {{ post.title }}
                      </nuxt-link>
                    </h3>
                    <div class="meta mb-1">
                      <span class="date">{{ post.publishedAt }}</span>
                      <span class="time">15 min leitura</span>
                      <span class="comment">
                        <a href="#">{{ post.author }}</a>
                      </span>
                      <span class="comment">
                        <a href="#">3 comentários</a>
                      </span>
                    </div>
                    <div class="intro">
                      {{ post.content }}
                    </div>
                    <a class="more-link" href="#">saiba mais &rarr;</a>
                  </div>
                </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Logo from '../components/Logo'
import PostService from '../app/domains/blog/services/post-service'
import { slugify } from '../app/supports/utils/helpers'

export default {
  name: 'IndexPage',
  components: { Logo },
  data: () => ({
    slugify,
    posts: []
  }),
  async fetch () {
    await this.fetchPosts()
  },
  methods: {
    async fetchPosts () {
      const request = await PostService.all()
      const { status, data: response } = request
      this.posts = response.articles
    }
  },
  fetchOnServer: true
}
</script>

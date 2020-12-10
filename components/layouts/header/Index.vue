<template>
  <header class="header text-center">
    <h1 class="blog-name pt-lg-4 mb-0">
      <a href="/">Megawhat Blog</a>
    </h1>
    <nav class="navbar navbar-expand-lg navbar-dark" >
      <button class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navigation"
              aria-controls="navigation"
              aria-expanded="false"
              aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div id="navigation" class="collapse navbar-collapse flex-column" >
        <div class="profile-section pt-3 pt-lg-0">
          <img class="profile-image mb-3 rounded-circle mx-auto"
               src="https://s3.amazonaws.com/img-prod-editor-wordpress/app/cdn/logo-2020/logos_mw.png" alt="image" >

          <div class="bio mb-3">
            A MegaWhat contribui para o desenvolvimento constante do setor de energia. Oferecemos inteligência integrada para sua tomada de decisão em todos os segmentos desse mercado.
          </div>
          <ul class="social-list list-inline py-3 mx-auto">
            <li class="list-inline-item"><a href="#"><i class="fab fa-twitter fa-fw"></i></a></li>
            <li class="list-inline-item"><a href="#"><i class="fab fa-linkedin-in fa-fw"></i></a></li>
            <li class="list-inline-item"><a href="#"><i class="fab fa-github-alt fa-fw"></i></a></li>
          </ul>
          <hr>
        </div>
        <navigation></navigation>

        <div class="my-2 my-md-3" v-if="isAuthenticate">
          <button class="btn btn-primary">
            Olá {{ user.email }}
          </button>

          <button class="btn btn-primary mt-5" @click="onLogout">
           Sair
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import Navigation from '../Navigation'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Header',
  components: { Navigation },
  computed: {
    ...mapGetters({
      user: 'user/user',
      isAuthenticate: 'user/isAuthenticate',
    })
  },
  methods: {
    ...mapActions({
      logout: 'user/logout'
    }),
    onLogout () {
      this.logout()
      this.$router.push('/')
    }
  }
}
</script>

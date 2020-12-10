<template>
  <article class="about-section py-5">
    <div class="container">
      <form class="signup-form form-inline justify-content-center pt-3" @submit.prevent="userLogin">
        <div class="form-group">
          <label class="sr-only">Email</label>
          <input type="email" class="form-control mr-md-1 semail" v-model="form.username">
        </div>
        <div class="form-group">
          <label class="sr-only">Senha</label>
          <input type="password" class="form-control mr-md-1 semail" v-model="form.password">
        </div>
        <button type="submit" class="btn btn-primary">Logar</button>
      </form>
    </div>
  </article>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Login',
  layout: 'auth',
  data() {
    return {
      form: {
        username: 'uhelliton@uol.com.br',
        password: 'asd147'
      }
    }
  },
  computed: {
    ...mapGetters({
      user: 'user/user'
    })
  },
  methods: {
    ...mapActions('user', ['attemptLogin']),
    userLogin () {
      this.attemptLogin({ ...this.form })
        .then((response) => {
          this.$router.push('/dashboard')
        })
        .finally(() => console.log('error'))
    }
  }
}
</script>

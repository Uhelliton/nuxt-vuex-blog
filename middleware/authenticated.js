export default function ({ store, redirect }) {
  // Se o usuário não estiver autenticado
  if (!store.state.user.token.length) {
    return redirect('/login')
  }
}

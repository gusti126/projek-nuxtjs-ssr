export default function ({ store, redirect }) {
  if (!store.state.auth.loggedIn | (store.state.auth.user.roles !== 'admin')) {
    return redirect('/')
  }
}

export default ['$window', '$firebaseAuth', function ($window, $firebaseAuth) {
  let auth = $firebaseAuth()
  return {
    register(user) {
      return auth.$createUserWithEmailAndPassword(user.email, user.password)
    },
    login(user) {
      return auth.$signInWithEmailAndPassword(user.email, user.password)
    },
    logout() {
      auth.$signOut()
    },
    isLoggedIn() {
      return auth.$getAuth()
    }
  }
}]

import Home from '@/router/views/home'
import SignIn from '@/router/views/signin'
import SignUp from '@/router/views/signup'
import View from '@/router/views/view'
import Create from '@/router/views/create'
import About from '@/router/views/about'

export default ['$stateProvider', function($stateProvider) {

  $stateProvider.state(Home)
  $stateProvider.state(SignIn)
  $stateProvider.state(SignUp)
  $stateProvider.state(View)
  $stateProvider.state(Create)
  $stateProvider.state(About)

}]

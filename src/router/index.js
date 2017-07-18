import Home from '@/components/router/view/home'
import SignIn from '@/components/router/view/signin'
import SignUp from '@/components/router/view/signup'
import View from '@/components/router/view/view'
import Create from '@/components/router/view/create'
import About from '@/components/router/view/about'

export default function($stateProvider) {

  $stateProvider.state(Home)
  $stateProvider.state(SignIn)
  $stateProvider.state(SignUp)
  $stateProvider.state(View)
  $stateProvider.state(Create)
  $stateProvider.state(About)

}

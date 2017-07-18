export default function($stateProvider) {

  const home = {
    name: 'home',
    url: '/',
    template: require('angularjs-template-loader!@/router/views/home')
  }

  $stateProvider.state(home)

  const signin = {
    name: 'signin',
    url: '/signin',
    template: require('angularjs-template-loader!@/router/views/signin')
  }

  $stateProvider.state(signin)

  const signup = {
    name: 'signup',
    url: '/signup',
    template: require('angularjs-template-loader!@/router/views/signup')
  }

  $stateProvider.state(signup)

  const view = {
    name: 'view/:id',
    url: '/view',
    template: require('angularjs-template-loader!@/router/views/view')
  }

  $stateProvider.state(view)

  const create = {
    name: 'create',
    url: '/create',
    template: require('angularjs-template-loader!@/router/views/create')
  }

  $stateProvider.state(create)

  const about = {
    name: 'about',
    url: '/about',
    template: require('angularjs-template-loader!@/router/views/about')
  }

  $stateProvider.state(about)

}

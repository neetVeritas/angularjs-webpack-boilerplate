import controller from '@/router/views/signin/controller.js'

export default {
  name: 'signin',
  url: '/signin',
  controllerAs: 'signinCtrl',
  controller,
  template: require('angularjs-template-loader!@/router/views/signin/view.html')
}

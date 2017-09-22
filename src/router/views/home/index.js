import controller from '@/router/views/home/controller.js'

export default {
  name: 'protected_home',
  url: '/',
  controllerAs: 'homeCtrl',
  controller,
  template: require('angularjs-template-loader!@/router/views/home/view.html')
}

import controller from '@/router/views/home/controller.js'

export default {
  name: 'home',
  url: '/',
  controllerAs: 'homeCtrl',
  requiresAuth: true,
  controller,
  template: require('angularjs-template-loader!@/router/views/home/view.html')
}

import controller from '@/router/views/about/controller.js'

export default {
  name: 'about',
  url: '/about',
  requiresAuth: true,
  controllerAs: 'aboutCtrl',
  controller,
  template: require('angularjs-template-loader!@/router/views/about/view.html')
}

import controller from '@/router/views/about/controller.js'

export default {
  name: 'protected_about',
  url: '/about',
  controllerAs: 'aboutCtrl',
  controller,
  template: require('angularjs-template-loader!@/router/views/about/view.html')
}

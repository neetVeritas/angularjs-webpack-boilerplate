export default {
  name: 'about',
  url: '/about',
  controllerAs: 'aboutCtrl',
  controller: require('@/router/views/about/controller.js'),
  template: require('angularjs-template-loader!@/router/views/about/view.html')
}

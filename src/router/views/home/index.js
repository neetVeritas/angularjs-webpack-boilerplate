export default {
  name: 'home',
  url: '/',
  controllerAs: 'homeCtrl',
  controller: require('@/router/views/home/controller.js'),
  template: require('angularjs-template-loader!@/router/views/home/view.html')
}

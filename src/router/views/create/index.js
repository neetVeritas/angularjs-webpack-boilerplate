export default {
  name: 'create',
  url: '/create',
  controllerAs: 'createCtrl',
  controller: require('@/router/views/create/controller.js'),
  template: require('angularjs-template-loader!@/router/views/create/view.html')
}

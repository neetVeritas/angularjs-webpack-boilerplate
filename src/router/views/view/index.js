export default {
  name: 'view',
  url: '/view:taskid',
  requiresAuth: true,
  controllerAs: 'viewCtrl',
  controller: require('@/router/views/view/controller.js'),
  template: require('angularjs-template-loader!@/router/views/view/view.html')
}

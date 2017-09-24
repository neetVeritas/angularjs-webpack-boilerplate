import controller from '@/router/views/create/controller.js'

export default {
  name: 'create',
  url: '/create',
  requiresAuth: true,
  controllerAs: 'createCtrl',
  controller,
  template: require('angularjs-template-loader!@/router/views/create/view.html')
}

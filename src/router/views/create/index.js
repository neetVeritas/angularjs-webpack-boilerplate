import controller from '@/router/views/create/controller.js'

export default {
  name: 'protected_create',
  url: '/create',
  controllerAs: 'createCtrl',
  controller,
  template: require('angularjs-template-loader!@/router/views/create/view.html')
}

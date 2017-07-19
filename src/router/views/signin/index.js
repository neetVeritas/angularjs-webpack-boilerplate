export default {
  name: 'signin',
  url: '/signin',
  controllerAs: 'signinCtrl',
  controller: require('@/router/views/signin/controller.js'),
  template: require('angularjs-template-loader!@/router/views/signin/view.html')
}

export default {
  name: 'signup',
  url: '/signup',
  controllerAs: 'signupCtrl',
  controller: require('@/router/views/signup/controller.js'),
  template: require('angularjs-template-loader!@/router/views/signupabout/view.html')
}

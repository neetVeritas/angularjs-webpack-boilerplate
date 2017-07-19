export default {
  template: require('angularjs-template-loader!@/components/task-tile/component.html'),
  controllerAs: 'taskTileController',
  controller: require('@/components/task-tile/controller.js'),
  bindings: {
    task: '='
  }
}

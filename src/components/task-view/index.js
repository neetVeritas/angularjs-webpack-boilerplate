import controller from '@/components/task-tile/controller.js'

export default {
  template: require('angularjs-template-loader!@/components/task-tile/component.html'),
  controllerAs: 'taskEditorController',
  controller,
  bindings: {
    task: '='
  }
}

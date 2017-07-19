export default {
  template: require('angularjs-template-loader!@/components/task-editor/component.html'),
  controllerAs: 'taskEditorController',
  controller: require('@/components/task-editor/controller.js'),
  bindings: {
    task: '='
  }
}

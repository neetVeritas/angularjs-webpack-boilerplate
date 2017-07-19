import controller from '@/components/task-editor/controller.js'

export default {
  template: require('angularjs-template-loader!@/components/task-editor/component.html'),
  controllerAs: 'taskEditorController',
  controller,
  bindings: {
    task: '='
  }
}

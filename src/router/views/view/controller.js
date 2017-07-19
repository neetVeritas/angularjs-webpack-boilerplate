export default ['$scope', '$stateParams', function($scope, $stateParams) {
  if (!$stateParams.taskid) console.error('Could not find task id')
}]

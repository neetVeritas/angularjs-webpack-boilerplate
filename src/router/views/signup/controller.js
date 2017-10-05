export default ['$scope', '$state', function($scope, $state) {
  self = this
  self.signup = function() {
    console.log($scope.email)
  }
  self.login = function() {
    $state.target('login')
  }
}]

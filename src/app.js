import 'angular'
import 'angular-ui-router'
import 'angularfire'

import Header from '@/components/header'
import Footer from '@/components/footer'
import TaskEditor from '@/components/task-editor'
import TaskMaker from '@/components/task-editor'
import TaskTile from '@/components/task-editor'
import TaskView from '@/components/task-editor'

import config from '@/config.json'
import router from '@/router'
import authService from '@/providers/auth'

const App = angular.module('bp', ['ui.router', 'firebase'])

App.component('header', Header)  // # install components
App.component('footer', Footer)
App.component('task-editor', TaskEditor)
App.component('task-maker', TaskMaker)
App.component('task-tile', TaskTile)
App.component('task-view', TaskView)

App.config(function() {
  firebase.initializeApp(config.firebase)
})  // # authorize firebase

App.config(router)  // # init router

App.factory('$authService', authService)  // # inject authentication service

App.run(['$rootScope', '$state', '$transitions', '$authService', function ($rootScope, $state, $transitions, $authService) {
  $transitions.onBefore({ to: 'protected_**' }, function(trans) {
    console.log('nigga')
    var auth = trans.injector().get('$authService')
    if (!auth.isLoggedIn()) {
      return $state.target('signup')
    }
  })
}])

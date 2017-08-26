import 'angular'
import 'angular-ui-router'
import 'angularfire'

const App = angular.module('bp', ['ui.router', 'firebase'])

import Header from '@/components/header'
import Footer from '@/components/footer'
import TaskEditor from '@/components/task-editor'
import TaskMaker from '@/components/task-editor'
import TaskTile from '@/components/task-editor'
import TaskView from '@/components/task-editor'

  App.component('header', Header)  // # install components
  App.component('footer', Footer)
  App.component('task-editor', TaskEditor)
  App.component('task-maker', TaskMaker)
  App.component('task-tile', TaskTile)
  App.component('task-view', TaskView)

import config from '@/config.json'

  App.config(function() {
    firebase.initializeApp(config.firebase) // authorize firebase
  })

import router from '@/router'

  App.config(router)  // # init router

import authService from '@/providers/auth'

  App.factory('$authService', authService)

App.run(['$rootScope', '$state', '$transitions', '$authService', function ($rootScope, $state, $transitions, $authService) {
  $transitions.onStart({}, function(trans) {
    console.log(trans)
    // var auth = trans.injector().get('$authService')
    // if (!auth.isLoggedIn()) {
    //   return trans.router.stateService.target('login')
    // }
  })
}])

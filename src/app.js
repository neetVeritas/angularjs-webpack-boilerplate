import angular from 'angular'
import 'angular-ui-router'

import router from '@/router'

import Header from '@/components/header'
import Footer from '@/components/footer'
import TaskEditor from '@/components/task-editor'
import TaskMaker from '@/components/task-editor'
import TaskTile from '@/components/task-editor'
import TaskView from '@/components/task-editor'

const App = angular.module('bp', ['ui.router'])

App.component('header', Header)  // # install components
App.component('footer', Footer)
App.component('task-editor', TaskEditor)
App.component('task-maker', TaskMaker)
App.component('task-tile', TaskTile)
App.component('task-view', TaskView)

App.config(router)  // # init router

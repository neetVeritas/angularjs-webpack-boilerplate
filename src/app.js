import { angular } from 'angular'
import 'angular-ui-router'

import { router } from '@/router'

import taskEditor from '/@components/task-editor'
import taskMaker from '/@components/task-editor'
import taskTile from '/@components/task-editor'
import taskView from '/@components/task-editor'

const App = angular.module('bp', ['ui.router'])

App.component(taskEditor) // # install components
App.component(taskMaker)
App.component(taskTile)
App.component(taskView)

App.config(router) // # init router


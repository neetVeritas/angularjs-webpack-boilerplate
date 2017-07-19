import angular from 'angular'
import 'angular-ui-router'

import { router } from '@/router'

import Header from '@/components/header'
import Footer from '@/components/footer'
import TaskEditor from '@/components/task-editor'
import TaskMaker from '@/components/task-editor'
import TaskTile from '@/components/task-editor'
import TaskView from '@/components/task-editor'

const App = angular.module('bp', ['ui.router'])

App.component(Header)  // # install components
App.component(Footer)
App.component(TaskEditor)
App.component(TaskMaker)
App.component(TaskTile)
App.component(TaskView)

App.config(router)  // # init router


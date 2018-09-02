import "./stylesheets/main.css";
import "./stylesheets/bootstrap.css";
import "./stylesheets/newRecord.css";
import 'angular';
import '@uirouter/angularjs';
import 'angular-ui-bootstrap'

import mainController from './homepage/controller';
import newRecordController from './newRecord/controller';
import recordsController from './records/controller';
import PouchService from './core/PouchService';

angular.module('inventoryApp', ['ui.router','ui.bootstrap'])
    .controller('mainController', mainController)
    .controller('newRecordController', newRecordController)
    .controller('recordsController', recordsController)
    .service('PouchService', PouchService)
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('homepage', {
                url: "/",
                template: require("./homepage/homepage.html"),
                controller: 'mainController as $ctrl'
            })
            .state('records', {
                url: "/records",
                controller: 'recordsController as $ctrl',
                template: require("./records/records.html"),
            })
            .state('newRecord', {
                url: "/newRecord",
                template: require("./newRecord/newRecord.html"),
                controller: 'newRecordController as $ctrl'
            })
    }]);
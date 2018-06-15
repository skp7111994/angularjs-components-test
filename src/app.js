import "./stylesheets/main.css";

import 'angular';
import '@uirouter/angularjs';

import mainController from './homepage/controller';
import pouchService from './core/PouchService';

angular.module('inventoryApp', ['ui.router'])
    .controller('mainController', mainController)
    .service('pouchService', pouchService)
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('homepage', {
                url: "/",
                template: require("./homepage/homepage.html"),
                controller: 'mainController'
            })
            .state('calculator', {
                url: "/calculator",
                template: require("./calculator/calculator.html")
            })
            .state('inventory', {
                url: "/inventory",
                template: require("./inventory/inventory.html")
            })
    }]);
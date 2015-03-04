'use strict'

var app = angular.module('app' , ['ngRoute' ,'ngAnimate' ,'ngResource']);
//var app = angular.module('app' , ['ngRoute' ,'ngAnimate','app.services']);



app.config(['$routeProvider'  , '$locationProvider' , '$provide', function ($routeProvider, $locationProvider,$provide) {
				
		app.register = {
			factory: $provide.factory,
			service: $provide.service
		};


        $routeProvider.when('/customers' ,
        {
            templateUrl : 'views/customers.html' ,
            controller : 'customerscontroller'
        });
        $routeProvider.otherwise(
            {
                redirectTo : '/'
            });

        //$locationProvider.html5Mode(false).hashPrefix('!');
    }]);






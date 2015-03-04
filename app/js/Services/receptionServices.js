'use strict'

//angular.module('app.services' , ['ngResource'])
	//.factory('receptionServices' ,['$resource' ,  function($resource) {
	app.factory('receptionServices' ,['$resource' ,  function($resource) {
			return $resource('http://localhost:3500/customers') ; 
	}]) ; 
	

	
	
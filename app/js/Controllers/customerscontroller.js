'use strict'

app.controller('customerscontroller' , ['$scope' ,'receptionServices',function ($scope,receptionServices) {
        $scope.title = 'customerscontroller';
        
		$scope.receptionList = receptionServices.query();
        
    }]);

//customerFactory
//customerscontroller.$inject = ['$scope']; 
'use strict'

app.controller('homecontroller' , ['$scope' , function ($scope) {
    $scope.title = 'המשכנתא שלי';
    $scope.loginLogoutText = "כניסה";
}]);

//var injectParams = ['$scope'];

//homecontroller.$inject = injectParams; 
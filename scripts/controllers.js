angular.module('app.controllers', [])
    .controller('FormCtrl', function($scope, $timeout){
//    $scope.name = '';
//    $scope.email = '';
//    $scope.website = '';
//    $scope.message = '';
    $scope.nameError = false;
    $scope.emailError1 = false;
    $scope.emailError2 = false;
    $scope.siteError1 = false;
    $scope.siteError2 = false;
    $scope.messageError = false;

    $scope.checkFields = function(){
        
        if(!$scope.name)
        {
            $scope.nameError = true;
        }
        else if(!$scope.message)
        {
            $scope.messageError = true;
        }
        
        console.log('Email' + $scope.email.contains('@'));
//        else if(!$scope.email)
//        {
//            $scope.emailError1 = true;
//        }
//        else if(!$scope.email.contains('@'))
//        {
//            console.log($scope.email);
//            $scope.emailError2 = true;
//        }
//        
//        else if(!$scope.website)
//        {
//            $scope.siteError1 = true;
//        }
//        else if(!$scope.website.includes('http://'))
//        {
//            $scope.siteError2 = true;
    }
});
angular.module('app.controllers', [])
    .controller('FormCtrl', function($scope, $timeout){
    $scope.name = '';
    $scope.email = '';
    $scope.website = '';
    $scope.message = '';
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
        
        if(!$scope.message)
        {
            $scope.messageError = true;
        }
        
        if(!$scope.email)
        {
            $scope.emailError1 = true;
        }
        else if(!$scope.email.includes('@'))
        {
            $scope.emailError2 = true;
        }
        // must start with http://...
        if(!$scope.website)
        {
            $scope.siteError = true;
        }

            
    };

});
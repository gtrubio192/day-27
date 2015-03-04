angular.module('app.controllers', [])
    .controller('FormCtrl', function($scope){
//    $scope.name = '';
//    $scope.email = '';
//    $scope.website = '';
//    $scope.message = '';
//    $scope.nameError = false;
//    $scope.emailError1 = false;
//    $scope.emailError2 = false;
//    $scope.siteError1 = false;
//    $scope.siteError2 = false;
//    $scope.messageError = false;
    $scope.success = false;
    $scope.formPage = true;
    

    $scope.checkFields = function(){
        console.log("click");
        $scope.nameError = false;
        $scope.emailError1 = false;
        $scope.emailError2 = false;
        $scope.siteError1 = false;
        $scope.siteError2 = false;
        $scope.messageError = false;        
        
        if(!$scope.name)
        {
            $scope.nameError = true;
            console.log("name success");

        }
        if(!$scope.message)
        {
            $scope.messageError = true;
            console.log("message success");

        }
        if(!$scope.email)
        {
            $scope.emailError1 = true;
            console.log("email 1 success");

        }
        
        if($scope.email.indexOf('@') === -1)
        {
            console.log($scope.email);
            $scope.emailError2 = true;
            console.log("email 2 success");

        }
        
        if(!$scope.website)
        {
            $scope.siteError1 = true;
            console.log("site success");

        }
        
        if($scope.website.substring(0,7) !== 'http://')
        {
            $scope.siteError2 = true;
        }
        
        if(!$scope.nameError &&
            !$scope.emailError1 &&
            !$scope.emailError2 &&
            !$scope.siteError1 &&
            !$scope.siteError2 &&
            !$scope.messageError)
        {
            console.log("success");
            $scope.success = true;
            $scope.form = false;
        }

//        if($scope.form.$valid)
//        {
//            alert("something cool");
////            $scope.allgood = true;
//            $scope.form = false;
//        }
    }
});
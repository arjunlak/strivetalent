var app = angular.module('arjun', []);

app.controller("control",function($scope,$http){
            $scope.checkChecked = function(){
                        if(!$scope.checkVal){
                            alert("Please agree before submitting!");
                            return false;
                        } else{
                            $('#verifyInfo').submit();
                            return true;
                        }

            }
            //$scope.fetchShilpa();
        });
var app = angular.module('arjun', []);

app.controller("control",function($scope,$http){
            $scope.selected_monthly_repeat_option = [{
                name: 'Date of the month',
                selected: true
            }, {
                name: 'Day of the month',
                selected: false
            }];


            $scope.checkChecked = function(){
                        if(!$scope.checkVal){
                            alert("Please agree before submitting!");
                            return false;
                        } else{
                            //$('#verifyInfo').submit();
                            alert($scope.fname);
                            var newObj = [{
                                fname : $scope.fname,
                                lname :  $scope.lname,
                                email : $scope.email
                            }];



                            $http.post('/saveUser',{newObj}).success(function(res){
                               var result = res;
                               console.log(res);

                           });

                           location.href = "./questions.html"
                            return true;
                        }

            }
            //$scope.fetchShilpa();
        });
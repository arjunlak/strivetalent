var app = angular.module('arjun', []);

app.controller("control",function($scope,$http){
            $scope.selected_answer = [{
                name: 'I dont know',
                selected: true
            }, {
                name: 'Because the sea is',
                selected: false
            }];

            $scope.next = function(){
                //if (!form.$valid) return;
                angular.forEach($scope.selected_answer, function(value, key) {
                                        if (value.selected) {
                                            console.log($scope.selected_answer[key].name);
                                        }
                                    });
            }



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
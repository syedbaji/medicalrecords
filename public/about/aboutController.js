myApp.controller('aboutController', function($scope, userService) {
    $scope.about = "ABOUT";
    $scope.parentcat = "This is parent cat 'Roshel singh'";
    //var userdata = userService.userinfoReport();
    userService.userinfoReport().then(function(res) {
        console.log(res.data);
        $scope.userInfo = res.data;
    });
    $scope.userReport = function() {

    }
});
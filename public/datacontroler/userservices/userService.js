myApp.service('userService', function($http) {
    this.userinfoReport = function() {
        var uData = $http.get('/api/userInfo/all')
            .then(function(response) {
                return response;
            });
        return uData;
    }

    // this.userinfoReport = function() {
    //     return $http.get('/api/userInfo/all')
    //         .then(function(response) {
    //             console.log(response.data);
    //             return response.data;
    //         });
    // };
});
myApp.controller('userInformationController', ['$scope', '$http', function($scope, $http, $state) {
    // this.ReportId = "123456";
    // this.FirstName = "Raja";
    // this.LastName = "Hindusthani";
    // this.Gender = "Male";
    // this.HusbandWife = "India";
    // this.Age = "28";
    // this.DateOfAdmission = "25-Aug-2017";
    // this.UserInputEmail = "rajahind@gmail.com";
    // this.Mobile = "9123456789";
    // this.Address = "HSR Layout, Bangalore";
    // this.DiagnosisDescription = "Diagnosed by Viral fever";
    // this.TreatmentDescription = "Paracetemol tablet";

    this.save = function(information) {
        $http.post('/api/userInfo/all', information).then(function() {
            console.log(information);
        }, function(error) {
            console.log(error);
        });
        window.open('#!/about', '_blank');
    };


    // FirstName
    // LastName
    // HusbandWife
    // Age
    // DateOfAdmission
    // UserInputEmail
    // Mobile
    // Address
    // DiagnosisDescription
    // TreatmentDescription

}]);
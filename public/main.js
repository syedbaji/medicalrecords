var myApp = angular.module("myApp", ["ngRoute"]);
myApp.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "home/home.html"
        })
        .when("/about", {
            templateUrl: "about/about.html"
        })
        .when("/product", {
            templateUrl: "product/product.html"
        })
        .when("/contact", {
            templateUrl: "contact/contact.html"
        });
});
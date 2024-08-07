let app = angular.module('luxchill', ['ngRoute'])

app.config(function ($routeProvider) {
    $routeProvider
        .when('/list-camera', {
            templateUrl: "./views/list.html",
            controller: "ListController"
        })
        .when('/camera/add', {
            templateUrl: "./views/create.html",
            controller: "CreateController"
        })
        .when('/detail/camera/:id', {
            templateUrl: "./views/detail.html",
            controller: "DetailController"
        })
        .when('/edit/camera/:id', {
            templateUrl: "./views/edit.html",
            controller: "EditController"
        })
        .otherwise('/list-camera')
})
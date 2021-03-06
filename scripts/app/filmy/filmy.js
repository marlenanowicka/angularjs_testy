'use strict';
angular.module('yellowjasmine.bazafilmow', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.
            when('/baza/filmow', {
                templateUrl: 'scripts/app/filmy/filmy.html',
                controller: 'moviesController'
            }).
            otherwise({
                redirectTo: '/baza/filmow'
            });
    }])
.controller('moviesController',['$scope', '$http', function moviesController ($scope, $http){
        $http.get('sample_data/dane.json').success(function(data){
            $scope.filmy = data;
        });
        $scope.wybor = "tytul";

        $scope.wyslij = function (filmy) {
            $scope.rezultatJSON = angular.toJson(filmy);
            $scope.przyciskDisabled = true;
        };

        $scope.kategorie = [
            {id: '1', name: 'komedia'},
            {id: '2', name: 'melodramat'},
            {id: '3', name: 'Sci-Fi'},
            {id: '4', name: 'Katastroficzny'},
            {id: '5', name: 'Biograficzny'}
        ];


    }])
    .controller("addMoviesController", function(){

        this.film = {};

        this.addFilm = function(filmy){
            filmy.push(this.film);
            this.film = {};
        };

    });
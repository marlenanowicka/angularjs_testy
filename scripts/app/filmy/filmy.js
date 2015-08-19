'use strict';
angular.module('yellowjasmine.bazafilmow', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.
            when('/baza/filmow', {
                templateUrl: 'scripts/app/filmy/filmy.html',
                controller: 'filmsController'
            }).
            otherwise({
                redirectTo: '/baza/filmow'
            });
    }])
.controller('filmsController',['$scope', function filmsController ($scope) {

            $scope.filmy = [
                {
                    tytul : 'Zielona mila',
                    slug : 'zielona_mila',
                    kategoria: 'Dramat',
                    rokProdukcji: '1999',
                    ocena: '8,6',
                    rezyser: 'Frank Darabont',
                    opis: 'Emerytowany strażnik więzienny opowiada przyjaciółce o niezwykłym mężczyźnie, którego skazano na śmierć za zabójstwo dwóch 9-letnich dziewczynek.'
                },

                {
                    tytul: 'Forrest Gump',
                    slug: 'forrest_gump',
                    kategoria: 'Dramat, Komedia',
                    rokProdukcji: '1994',
                    ocena: '8,6',
                    rezyser: 'Robert Zemeckis',
                    opis: 'Historia życia Forresta, chłopca o niskim ilorazie inteligencji z niedowładem kończyn, który staje się miliarderem i bohaterem wojny w Wietnamie'
                },
                {
                    tytul: 'Avatar',
                    slug: 'avatar',
                    kategoria: 'Sci-Fi',
                    rokProdukcji: '2009',
                    ocena: '7,4',
                    rezyser: 'James Cameron',
                    opis: 'Jake, sparaliżowany były komandos, otrzymuje misję i zostaje wysłany na planetę Pandora, gdzie zaprzyjaźnia się z lokalną społecznością oraz postanawia jej pomóc. '
                },
                {
                    tytul: 'Tytanic',
                    slug: 'tytanic',
                    kategoria: 'Melodramat, Katastroficzny',
                    rokProdukcji: '1997',
                    ocena: '7,3',
                    rezyser: 'James Cameron',
                    opis: 'Rok 1912, brytyjski statek Titanic wyrusza w swój dziewiczy rejs do USA. Na pokładzie emigrant Jack przypadkowo spotyka arystokratkę Rose '
                },
                {
                    tytul: 'Gladiator',
                    slug: 'gladiator',
                    kategoria: 'Dramat historyczny',
                    rokProdukcji: '2000',
                    ocena: '8,1',
                    rezyser: 'Ridley Scott',
                    opis: 'Generał Maximus - prawa ręka cesarza, szczęśliwy mąż i ojciec - w jednej chwili traci wszystko. Jako niewolnik-gladiator musi walczyć na arenie o przeżycie. '
                }
            ];

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
    .controller("addFilmsController", function(){

        this.film = {};

        this.addFilm = function(filmy){
            filmy.push(this.film);
            this.film = {};
        };

    });
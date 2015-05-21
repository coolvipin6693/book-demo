'use strict';

var bookApp = angular.module('bookApp', [
  'ngRoute',
  'bookAnimations',
  'bookControllers',
  'bookServices'
]);

bookApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/books', {
        templateUrl: 'partials/list.html',
        controller: 'BookList'
      }).
      when('/books/:bookId', {
        templateUrl: 'partials/detail.html',
        controller: 'BookInfo'
      }).
      when('/books/:bookId/reviews', {
        templateUrl: 'partials/review.html',
        controller: 'BookReview'
      }).
      otherwise({
        redirectTo: '/books'
      });
  }]);

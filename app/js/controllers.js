'use strict';

var bookControllers = angular.module('bookControllers', []);

bookControllers.controller('BookList', ['$scope', 'Book',
  function($scope, Book) {
    $scope.books = Book.query();
    $scope.orderProp = 'age';
  }]);

bookControllers.controller('BookInfo', ['$scope', '$routeParams', 'Book',
  function($scope, $routeParams, Book) {
    $scope.book = Book.get({bookId: $routeParams.bookId}, function(book) {
      $scope.mainImageUrl = book.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);

bookControllers.controller('BookReview', ['$scope', '$routeParams', 'Book',
  function($scope, $routeParams, Book) {
    $scope.book = Book.get({bookId: $routeParams.bookId}, function(book) {
      $scope.mainImageUrl = book.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);
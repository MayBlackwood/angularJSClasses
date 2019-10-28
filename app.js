(function() {
  'use strict';

  var app = angular.module('LunchCheck', []);
  app.controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject=['$scope'];

  function LunchCheckController($scope) {
    $scope.listOfDishes = '';
    $scope.message;

    $scope.checkAmountOfDishes = function(dishes) {
      var array = dishes.split(',');
      array = removeSpaces(array);
      checkIfToMuch(array);
    };

    function removeSpaces(array) {
      var formattedArray = [];
      array.forEach(function(item) {
        if (item.replace(/\s/g, '').length !== 0) {
          formattedArray.push(item);
        }
      });

      return formattedArray;
    }

    function checkIfToMuch(list) {
      if (list.length === 0) {
        $scope.message = 'Please enter data first!';
      } else if (list.length <= 3) {
        $scope.message = 'Enjoy!';
      } else {
        $scope.message = 'Too much!';
      }
    }
  }
})();

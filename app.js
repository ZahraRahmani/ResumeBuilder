(function () {
    var app = angular.module('app', []);
    app.controller('MyCtrl', MyCtrl);

    MyCtrl.$inject = ['$scope'];


    function MyCtrl($scope) {
        $scope.message = body.summary.name;
        

      

    }


})();
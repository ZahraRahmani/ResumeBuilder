(function () {
    var app = angular.module('app', []);
    app.controller('MyCtrl', MyCtrl);

    MyCtrl.$inject = ['$scope','MyService'];


    function MyCtrl($scope,MyService) {
        $scope.summary=MyService.getSummary();
        $scope.skills=MyService.getSkills();
        $scope.experience=MyService.getExperience();
        $scope.education=MyService.getEducation();
      

    }


})();
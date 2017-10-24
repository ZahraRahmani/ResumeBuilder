(function () {
    var app = angular.module('app', []);

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD-5kNnhWUkxzvMBK9Ci50Yl4EcNYbnvkk",
    authDomain: "resumebuilder-8c22b.firebaseapp.com",
    databaseURL: "https://resumebuilder-8c22b.firebaseio.com",
    projectId: "resumebuilder-8c22b",
    storageBucket: "resumebuilder-8c22b.appspot.com",
    messagingSenderId: "823751751382"
  };
  firebase.initializeApp(config);


    app.controller('MyCtrl', MyCtrl);

    MyCtrl.$inject = ['$scope','MyService'];


    function MyCtrl($scope,MyService) {
        $scope.summary=MyService.getSummary();
        $scope.skills=MyService.getSkills();
        $scope.experience=MyService.getExperience();
        $scope.education=MyService.getEducation();
        $scope.affiliation=MyService.getaffiliation();

      

    }


})();
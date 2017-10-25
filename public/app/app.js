(function () {
   
  'use strict'
  
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



})();
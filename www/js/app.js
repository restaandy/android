// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var control=angular.module('starter', ['ionic']);

control.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});
control.controller('TODO',function($scope,$ionicModal,$ionicSideMenuDelegate){
 $scope.datacomplains = 
  [
    { nama: 'Andy',waktu:'19 Mei 2016', keluhan:'kelas kotor' },
    { nama:'Resta',waktu:'29 Mei 2016', keluhan: 'Wifi lemot' }
  ];
 $scope.beritas = 
  [
    { judul:'Sidang TA 1',waktu:'19 Mei 2016', berita:'Diberitahukan kepada seluruh...' },
    { judul:'Sidang TA 2',waktu:'29 Mei 2016', berita:'Diberitahukan kepada seluruh...' }
  ]; 
  $scope.subheader="Home";
  $scope.itemTemplate = function() {
    return 'home.html'; 
  };   

  $ionicModal.fromTemplateUrl('new-task.html', function(modal) {
    $scope.taskModal = modal;
  }, {
    scope: $scope,
    animation: 'slide-in-up'
  });
  $scope.selectProject=function(index){
   if(index==0){
     $scope.subheader="Home";
     $scope.itemTemplate = function() {
      return 'home.html';
    }; 
   }
   if(index==1){
     $scope.subheader="Semua Complain";
     $scope.itemTemplate = function() {
      return 'complain.html';
    }; 
   }
   if(index==2){
     $scope.subheader="Tulis Complain";
     $scope.itemTemplate = function() {
     return 'tulis-complain.html';   
    }; 
   }
  if(index==3){
    $scope.subheader="Berita";
     $scope.itemTemplate = function() {
     return 'berita.html';   
    }; 
   }
   $ionicSideMenuDelegate.toggleLeft();
  }
  $scope.newTask = function() {
    $scope.taskModal.show();
  };
  $scope.closeNewTask = function() {
    $scope.taskModal.hide();
  };
   $scope.toggleProjects = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };

});

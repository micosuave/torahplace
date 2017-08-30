
  window.app = angular.module('fileBrowserApp', ['ngRoute', 'jsTree.directive', 'angular-filepicker', 'angularFileUpload','pageslide-directive']).config(function (filepickerProvider) {
      filepickerProvider.setKey('AZf2OQsBJT8qKOX8EfI8Qz');
  }).config(['$routeProvider',
      function ($routeProvider) {
          $routeProvider.
              when('/', {
                  templateUrl: '/lexlab-starter/public/fileBroswerApp/client/partials/home.html',
                  controller: 'HomeCtrl'
              }).
              otherwise({
                  redirectTo: '/home'
              });
      }
  ]);





    
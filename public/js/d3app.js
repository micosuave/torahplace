var app = angular.module('d3app', ['mini']);

app.config(function ($locationProvider) {
  $locationProvider.html5Mode(false)
})
// app.config(function($stateProvider){
//     $stateProvider.state('report-detail',{'url':'/:oppid', views: {
//             'reportview': {
//                 templateUrl: '{widgetsPath}/getphd/src/view.html',
//                 controller: 'ReportDetailController'
//             }
//         }})
// })

app.controller('ReportController', function ($scope, $http, $location,$filter,Collection,$firebaseArray) {
  var app = this
    
//   var config = {
//       apiKey: 'dab1aa30f0df2c0d11c7c0b0d3234c7902767ba8',
//       authDomain: 'firebase-lexlab.iam.gserviceaccount.com',
//       databaseURL: 'https://lexlab.firebaseio.com',
//       storageBucket: 'firebase-lexlab.appspot.com'
//   }
//   firebase.initializeApp(config);
  var request = {method: 'GET',url: '/report/all'}

  $http(request).then(function (resp) { app.filehistories = resp.data });
    
  app.getphd = function(patentid){
      var idnum = patentid.replace(/\D/g, '');
      var options = {
          method: 'GET', 
          url: '/getphd/patents/'+idnum
      };
      $http(options).then(function(resp){
         var pa =  resp.data;
         var appnum = pa.application_number.replace(/\D/g, '');
         var pubappyear = pa.pub.replace(/\D/g, '').slice(0,4);
         var pubappnum = pa.pub.replace(/\D/g, '').slice(4, pa.pub.length);
         var opions = {
             method: 'GET',
             url: '/getphd/'+appnum+'/'+idnum+'/'+pubappyear+'/'+pubappnum+'/REPORT'+appnum+'/reedtech'
         }
         $http(opions).then(function(resp){
             $http(request).then(function (resp) { app.filehistories = resp.data });

         });
      }
          
  )
  }
  app.dofunction = function (history) {
    var a = history.funconfig;
    var options = {
      method: 'GET',
      url: '/getphd/' + a.APPNUM + '/' + a.PNUM + '/' + a.IPAYEAR + '/' + a.IPANUM + '/' + a.id +'/reedtech'
    }
    $http(options).then(function (resp) {
      $scope.report = resp.data;
    });
  };
  app.refresh = function(history){
      var a = history.funconfig;
      var options = {
          method: 'DELETE',
          url: '/patents/' + a.PNUM + '/preview'
      }
      var options2 = {
          method: 'DELETE',
          url: '/patents/' + a.IPAYEAR + a.IPANUM + '/preview'
      }
      $http(options).then(function(resp){
          alertify.error('deleted!');
      });
      $http(options2).then(function (resp) {
          alertify.error('deleted!');
      });
  };
  app.allrecords = $firebaseArray(firebase.database().ref().child('content'));
});

// app.controller('ReportDetailController', function($scope, $http, $stateParams){
//     var appnum = $stateParams.oppid
//     /*:appnum/:pnum/:year/:ipa/:idref*/

// })


angular.module('patentindex',['ui.bootstrap','angular-loading-bar','ui.highlight','ngAnimate','ngSanitize','adf','roar']);
var app = angular.module('patentindex');

app.controller('AppCtrl',function($scope,$http, $location){
    var app = this;
    $scope.p = {
        showconfig: false
    };
    console.log($location);
    var s = $location.$$absUrl.slice($location.$$absUrl.indexOf('US')+2, $location.$$absUrl.length);
    $scope.config = {
        PNUM: s
    };
    $http.get('/getphd/patents/'+s).then(function(resp){
        $scope.patent = resp.data;
        
    });
});
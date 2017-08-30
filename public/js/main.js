// $(document).ready(function() {

//   // Place JavaScript code here...
// $(function(){
//    $("a.embed").oembed();
// });

// });

// var angular = require('angular');

var app = angular.module("HomePageApp", ["ui.bootstrap",
"ngSanitize",
            "com.2fdevs.videogular",
            "com.2fdevs.videogular.plugins.controls",
            "com.2fdevs.videogular.plugins.overlayplay",
            "com.2fdevs.videogular.plugins.poster",
                       "pageslide-directive",
            "mini"



]).config(function($locationProvider) {
    $locationProvider.html5Mode(false);
}).controller('HomePageCtrl',
        ["$sce","$scope","$window","$document", function ($sce,$scope,$window,$document) {
            $document.on('ready', function() {
            $('body').addClass('animated');
            $scope.pageReady = true;
           
        });
            this.config = {
                sources: [
                    //{src: $sce.trustAsResourceUrl("https://cdn.filepicker.io/api/file/bbQUjDxLTUumApIUStAg"), type: "video/webm"}
                     {src: $sce.trustAsResourceUrl("/files/public/charm.webm"), type: "video/webm"}
                    //{src: $sce.trustAsResourceUrl("/files/public/lexspacevideo1.mov"), type: "video/mp4"}
                    //{src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.webm"), type: "video/webm"},
                    //{src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.ogg"), type: "video/ogg"}
                ],
                tracks: [
                    // {
                    //     src: "http://www.videogular.com/assets/subs/pale-blue-dot.vtt",
                    //     kind: "subtitles",
                    //     srclang: "en",
                    //     label: "English",
                    //     default: ""
                    // }
                ],
                theme: "/lexlab-starter/node_modules/videogular-themes-default/videogular.css",
                plugins: {
                    poster: "/llp_core/img/lexlab.svg"
                }
            };
            var home = this;
            home.currentStep = 0;  
            home.govid = function(){
                var d = new Date();
                var randomstring = d.getTime();
                $window.open('/private/welcome/?='+randomstring, '_self');  
            };
            home.gohome = function(){
                $window.open('/', '_self');  
            };
        }]
    );
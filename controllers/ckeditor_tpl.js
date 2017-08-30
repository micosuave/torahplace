const  ckstarter = '<!DOCTYPE html><html class="html">'+
    '<head><title></title>'+
    '<link data-require="jqueryui@*" data-semver="1.10.0" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.10.0/css/smoothness/jquery-ui-1.10.0.custom.min.css" rel="stylesheet" />'+
    '<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.css" rel="stylesheet" />'+
    '<link href="/llp_core/bower_components/ngDialog/css/ngDialog.css" rel="stylesheet" />'+
    '<link data-require="ngDialog@*" data-semver="0.4.0" href="https://rawgit.com/likeastore/ngDialog/0.4.0/css/ngDialog.min.css" rel="stylesheet" />'+
    '<link data-require="ngDialog@*" data-semver="0.4.0" href="https://rawgit.com/likeastore/ngDialog/0.4.0/css/ngDialog-theme-default.min.css" rel="stylesheet" />'+
    '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tether-select/1.1.1/css/select-theme-default.css"/>'+
    '<link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.2/css/bootstrap.min.css" rel="stylesheet" />'+
    '<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" rel="stylesheet"/>'+
    '<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Julius+Sans+One|EB+Garamond&subset=latin,latin-ext"/>'+
    '<link href="/llp_core/dist/app.full.min.css" rel="stylesheet" />'+

   
    '</head>'+
    '<body class="dark-bg">'+
    '<div class="container-fluid"><div class="row"><div class="col-xs-12">'+
    '<div class="card"><!--CUTSLIDEHEAD-->';
    
    
    
    
    const ckender = '<!--CUTSLIDETAIL--><footer class="navbar-fixed-bottom">'+
    '<p style="text-align:center;">CONTAINS MATERIAL SUBJECT TO PROTECTIVE ORDER</p>'+
    '</footer>'+
    '</div></div></div></div>'+
    '<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2014-11-29/FileSaver.min.js"></script>'+
   '<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.16/d3.min.js"></script>'+
   '<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/1.0.2/Chart.min.js"></script>'+
   '<script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.2.0/js/tether.min.js"></script>'+
   '<script src="https://cdnjs.cloudflare.com/ajax/libs/tether-select/1.1.1/js/select.min.js"></script>'+
   '<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.2/js/bootstrap.min.js"></script>'+
   '<script src="https://apis.google.com/js/client.js"></script>'+
   '<script src="https://apis.google.com/js/api.js"></script>'+
   '<script src="https://www.gstatic.com/firebasejs/3.2.1/firebase.js"></script>'+
   '<script src="/lexlab-starter/public/jQuery-Plugin-For-Auto-Resizing-iFrame-iFrame-Resizer/src/iframeResizer.js"></script>'+
   '<script src="/lexlab-starter/public/js/jquery.pageslide.js"></script>'+
   '<script src="/lexlab-starter/node_modules/reveal.js/lib/js/head.min.js"></script>'+
   '<script src="/lexlab-starter/node_modules/reveal.js/js/reveal.js"></script>'+
   '<script src="/llp_core/dist/app.bower.js"></script>'+
   '<script data-require="jszip@2.4.0" data-semver="2.4.0" src="https://cdn.rawgit.com/Stuk/jszip/v2.4.0/dist/jszip.js" data-build="exclude"></script>'+
   '<script src="https://rawgit.com/alexk111/ngImgCrop/master/compile/unminified/ng-img-crop.js"></script>'+
   '<script src="/newwidget/dist/adf-widget-testwidget.js"></script>'+
   '<script src="/getphdwidget/dist/adf-widget-getphd.js"></script>'+
   '<script src="/pagebuilderwidget/dist/adf-widget-pagebuilder.js"></script>'+
   '<script src="/collectionwidget/dist/adf-widget-collectionwidget.js"></script>'+
   '<script src="/treewidget/dist/adf-widget-treewidget.js"></script>'+
   '<script src="/llp_core/dist/app.mini.js"></script>'+
   '<script src="/llp_core/dist/minicache.js"></script>'+
   '<script>$("body").flowtype({ minimum   : 450, maximum   : 1500, minFont   : 12, maxFont   : 48, fontRatio : 30 });</script>'+
    '<script>angular.module("mini").config(function($locationProvider) {$locationProvider.html5Mode(false);});angular.element(document).ready(function(){angular.bootstrap(document, ["mini"]);});</script>';

     /*
     '<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js">&nbsp;</script>\n'+
    '<script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.10.0/jquery-ui.js">&nbsp;</script>\n'+

    '<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.16/d3.min.js">&nbsp;</script>\n'+
    '<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/1.0.2/Chart.min.js">&nbsp;</script>\n'+
    '<script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.2.0/js/tether.min.js">&nbsp;</script>\n'+
    '<script src="https://cdnjs.cloudflare.com/ajax/libs/tether-select/1.1.1/js/select.min.js">&nbsp;</script>\n'+
    '<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.2/js/bootstrap.min.js">&nbsp;</script>\n'+
    '<script src="/llp_core/bower_components/Flowtype.js/flowtype.js">&nbsp;</script>\n'+
    '<script src="https://code.angularjs.org/1.5.3/angular.js">&nbsp;</script>\n'+
    '<script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/0.14.3/ui-bootstrap-tpls.js">&nbsp;</script>\n'+
    '<script src="https://cdn.firebase.com/js/client/2.3.2/firebase.js">&nbsp;</script>\n'+
    '<script src="https://cdn.firebase.com/libs/angularfire/1.1.1/angularfire.min.js">&nbsp;</script>\n'+
    '<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.3/angular-animate.js">&nbsp;</script>\n'+
    '<script src="/lexlab-starter/public/jQuery-Plugin-For-Auto-Resizing-iFrame-iFrame-Resizer/js/iframeResizer.contentWindow.min.js">&nbsp;</script>\n'+
    '<script src="/llp_core/dist/app.bower.js"></script>\n'+
     '<script src="/newwidget/dist/adf-widget-testwidget.js"></script>'+
   '<script src="/getphdwidget/dist/adf-widget-getphd.js"></script>'+
   '<script src="/pagebuilderwidget/dist/adf-widget-pagebuilder.js"></script>'+
   '<script src="/collectionwidget/dist/adf-widget-collectionwidget.js"></script>'+
   '<script src="/treewidget/dist/adf-widget-treewidget.js"></script>'+
    '<script src="/llp_core/dist/app.mini.js"></script>\n'+
    '<script src="/llp_core/dist/minicache.js"></script>\n'+*/
    
    module.exports = {
        ckstarter: ckstarter,
        ckender: ckender
    };

    
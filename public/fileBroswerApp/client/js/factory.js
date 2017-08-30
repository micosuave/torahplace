/* global LocalFileSystem */

 var app = angular.module('fileBrowserApp');
  app.factory('FetchFileFactory', ['$http',
      function ($http) {
          var _factory = {};

          _factory.fetchFile = function (file) {
              return $http.get('/files/resource?resource=' + encodeURIComponent(file));
          };

          return _factory;
      }
  ]).factory("$fileFactory", function ($q) {

      var File = function () { };

      File.prototype = {

          getParentDirectory: function (path) {
              var deferred = $q.defer();
              window.resolveLocalFileSystemURI(path, function (fileSystem) {
                  fileSystem.getParent(function (result) {
                      deferred.resolve(result);
                  }, function (error) {
                      deferred.reject(error);
                  });
              }, function (error) {
                  deferred.reject(error);
              });
              return deferred.promise;
          },

          getEntriesAtRoot: function () {
              var deferred = $q.defer();
              window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function (fileSystem) {
                  var directoryReader = fileSystem.root.createReader();
                  directoryReader.readEntries(function (entries) {
                      deferred.resolve(entries);
                  }, function (error) {
                      deferred.reject(error);
                  });
              }, function (error) {
                  deferred.reject(error);
              });
              return deferred.promise;
          },

          getEntries: function (path) {
              var deferred = $q.defer();
              window.resolveLocalFileSystemURI(path, function (fileSystem) {
                  var directoryReader = fileSystem.createReader();
                  directoryReader.readEntries(function (entries) {
                      deferred.resolve(entries);
                  }, function (error) {
                      deferred.reject(error);
                  });
              }, function (error) {
                  deferred.reject(error);
              });
              return deferred.promise;
          }

      };

      return File;

  }).directive('uploadQ', ['FileUploader', function (FileUploader) {
      return {
          restrict: 'EA',
          template: '<div class="card"><input type="file" nv-file-select="" uploader="uploader" multiple /><h3>Upload queue</h3> <p>Queue length: {{ uploader.queue.length }}</p> <table class="table"> <thead> <tr> <th width="50%">Name</th> <th ng-show="uploader.isHTML5">Size</th> <th ng-show="uploader.isHTML5">Progress</th> <th>Status</th> <th>Actions</th> </tr> </thead> <tbody> <tr ng-repeat="item in uploader.queue"> <td><strong>{{ item.file.name }}</strong></td> <td ng-show="uploader.isHTML5" nowrap>{{ item.file.size/1024/1024|number:2 }} MB</td> <td ng-show="uploader.isHTML5"> <div class="progress" style="margin-bottom: 0;"> <div class="progress-bar" role="progressbar" ng-style="{ \'width\': item.progress + \'%\' }"></div> </div> </td> <td class="text-center"> <span ng-show="item.isSuccess"><i class="glyphicon glyphicon-ok"></i></span> <span ng-show="item.isCancel"><i class="glyphicon glyphicon-ban-circle"></i></span> <span ng-show="item.isError"><i class="glyphicon glyphicon-remove"></i></span> </td> <td nowrap> <button type="button" class="btn btn-success btn-xs" ng-click="item.upload()" ng-disabled="item.isReady || item.isUploading || item.isSuccess"> <span class="glyphicon glyphicon-upload"></span> Upload </button> <button type="button" class="btn btn-warning btn-xs" ng-click="item.cancel()" ng-disabled="!item.isUploading"> <span class="glyphicon glyphicon-ban-circle"></span> Cancel </button> <button type="button" class="btn btn-danger btn-xs" ng-click="item.remove()"> <span class="glyphicon glyphicon-trash"></span> Remove </button> </td> </tr> </tbody> </table> <div> <div> Queue progress: <div class="progress" style=""> <div class="progress-bar" role="progressbar" ng-style="{ \'width\': uploader.progress + \'%\' }"></div> </div> </div> <button type="button" class="btn btn-success btn-s" ng-click="uploader.uploadAll()" ng-disabled="!uploader.getNotUploadedItems().length"> <span class="glyphicon glyphicon-upload"></span> Upload all </button> <button type="button" class="btn btn-warning btn-s" ng-click="uploader.cancelAll()" ng-disabled="!uploader.isUploading"> <span class="glyphicon glyphicon-ban-circle"></span> Cancel all </button> <button type="button" class="btn btn-danger btn-s" ng-click="uploader.clearQueue()" ng-disabled="!uploader.queue.length"> <span class="glyphicon glyphicon-trash"></span> Remove all </button> </div> </div>',
          controller: 'AppController',
          controllerAs: 'uploader',
          bindToController: true,
          scope: { url: '@' },
          link: function ($scope, $elem, $attr, $ctrl) {

          }

      };
  }]).controller('AppController', ['$scope', 'FileUploader', function($scope, FileUploader) {
        var uploader = $scope.uploader = new FileUploader({
            url: $scope.url || '/upload'
        });

        // FILTERS

        uploader.filters.push({
            name: 'customFilter',
            fn: function(item /*{File|FileLikeObject}*/, options) {
                return this.queue.length < 10;
            }
        });

        // CALLBACKS

        uploader.onWhenAddingFileFailed = function(item /*{File|FileLikeObject}*/, filter, options) {
            console.info('onWhenAddingFileFailed', item, filter, options);
        };
        uploader.onAfterAddingFile = function(fileItem) {
            console.info('onAfterAddingFile', fileItem);
        };
        uploader.onAfterAddingAll = function(addedFileItems) {
            console.info('onAfterAddingAll', addedFileItems);
        };
        uploader.onBeforeUploadItem = function(item) {
            console.info('onBeforeUploadItem', item);
        };
        uploader.onProgressItem = function(fileItem, progress) {
            console.info('onProgressItem', fileItem, progress);
        };
        uploader.onProgressAll = function(progress) {
            console.info('onProgressAll', progress);
        };
        uploader.onSuccessItem = function(fileItem, response, status, headers) {
            console.info('onSuccessItem', fileItem, response, status, headers);
        };
        uploader.onErrorItem = function(fileItem, response, status, headers) {
            console.info('onErrorItem', fileItem, response, status, headers);
        };
        uploader.onCancelItem = function(fileItem, response, status, headers) {
            console.info('onCancelItem', fileItem, response, status, headers);
        };
        uploader.onCompleteItem = function(fileItem, response, status, headers) {
            console.info('onCompleteItem', fileItem, response, status, headers);
        };
        uploader.onCompleteAll = function() {
            console.info('onCompleteAll');
        };

        console.info('uploader', uploader);
    }]);

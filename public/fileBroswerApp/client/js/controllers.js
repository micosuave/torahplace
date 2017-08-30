
    var app = angular.module('fileBrowserApp');
  app.controller('HomeCtrl', ['$scope', 'FetchFileFactory','$fileFactory','filepickerService','$window',
    function($scope, FetchFileFactory, $fileFactory, filepickerService, $window) {
      $scope.files = JSON.parse($window.localStorage.getItem('files') || '[]');
      $scope.pickFile = pickFile;

    $scope.onSuccess = onSuccess;
    $scope.checked = false;
    $scope.toggle = function () {
        $scope.checked = !$scope.checked;
    };
    function pickFile(){
        filepickerService.pick(
            {mimetype: 'image/*'},
            onSuccess
        );
    }

    function onSuccess(Blob){
        $scope.files.push(Blob);
        $window.localStorage.setItem('files', JSON.stringify($scope.files));
    }
      
      $scope.fileViewer = 'Please select a file to view its contents';

      $scope.tree_core = {
        
        multiple: false,  // disable multiple node selection

        check_callback: function (operation, node, node_parent, node_position, more) {
            // operation can be 'create_node', 'rename_node', 'delete_node', 'move_node' or 'copy_node'
            // in case of 'rename_node' node_position is filled with the new node name

            if (operation === 'move_node') {
                //return false;   // disallow all dnd operations
            }
            return true;  // allow all other operations
        }
      };

      $scope.nodeSelected = function(e, data) {
        var _l = data.node.li_attr;
        if (_l.isLeaf) {
          FetchFileFactory.fetchFile(_l.base).then(function(data) {
            var _d = data.data;
            if (typeof _d == 'object') {

              //http://stackoverflow.com/a/7220510/1015046//
              _d = JSON.stringify(_d, undefined, 2);
            }
            $scope.fileViewer = _d;
            $scope.file = $fileFactory(_l.base);
          });
        } else {

          //http://jimhoskins.com/2012/12/17/angularjs-and-apply.html//
          $scope.$apply(function() {
            $scope.fileViewer = 'Please select a file to view its contents';
          });
        }
      };
    }
  ]);

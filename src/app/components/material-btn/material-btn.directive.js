(function() {
  'use strict';

  angular
    .module('testX1')
    .directive('jxBtn', jxBtn);

  /** @ngInject */
  function jxBtn() {
    var directive = {
      restrict: 'A',
      transclude: true,
      templateUrl: 'app/components/material-btn/material-btn.html',
      scope: {},
      link: postLink
    };

    return directive;

    /** @ngInject */
    function postLink(scope, element){
      element[0].addEventListener('click', clickBtn);
      var work = true;
      function clickBtn(event) {
        if(work) {
          work = false;
          var x;
          var y;
          if(window.innerWidth > 997){
            x = event.layerX + 71;
            y = event.layerY + 23;
          } else {
            x = event.layerX;
            y = event.layerY;
          }
          scope.xcod = x-4;
          scope.ycod = y-4;
          scope.scale = true;
          setTimeout(function() {
            scope.scale = false;
            scope.$applyAsync();
            work = true;
          }, 750);
          scope.$applyAsync();
        }
      }
      scope.$on("$destroy", function() {
        element[0].removeEventListener('click', clickBtn);
      });
    }

  }

})();

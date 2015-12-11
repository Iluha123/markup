(function() {
  'use strict';

  angular
    .module('testX1')
    .directive('myPlaceholder', myPlaceholder);

  /** @ngInject */
  function myPlaceholder() {
    var directive = {
      restrict: 'A',
      transclude: true,
      templateUrl: 'app/components/my-placeholder/my-placeholder.html',
      scope: {},
      link: postLink
    };

    return directive;

    /** @ngInject */
    function postLink(scope, element){
      scope.value = false;
      if(element[0].children[0].children[0].children[0].tagName === 'INPUT') {
        element[0].addEventListener('input', focusInp);
        scope.$on("$destroy", function() {
          element[0].removeEventListener('input', focusInp);
        });
      } else if(element[0].children[0].children[0].children[0].tagName === 'SELECT'){
        element[0].addEventListener('change', focusInp);
        scope.$on("$destroy", function() {
          element[0].removeEventListener('change', focusInp);
        });
      }
      function focusInp(event) {
        if(event.target.value.length > 0) {
          scope.value = true;
        } else {
          scope.value = false;
        }
        scope.$applyAsync();
      }

    }

  }

})();

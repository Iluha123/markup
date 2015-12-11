(function() {
  'use strict';

  angular
    .module('testX1')
    .directive('footer', footer);

  /** @ngInject */
  function footer() {
    var directive = {
      restrict: 'A',
      templateUrl: 'app/components/footer/footer.html',
      scope: {},
      controller: 'FooterController',
      controllerAs: 'foot'
    };

    return directive;

  }

})();

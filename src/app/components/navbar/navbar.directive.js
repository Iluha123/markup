(function() {
  'use strict';

  angular
    .module('testX1')
    .directive('navbar', navbar);

  /** @ngInject */
  function navbar() {
    var directive = {
      restrict: 'A',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {},
      controller: 'NavbarController',
      controllerAs: 'nav'
    };

    return directive;

  }

})();

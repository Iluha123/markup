(function() {
  'use strict';

  angular
    .module('testX1')
    .directive('xtSelect', xtSelect);

  function xtSelect() {
    return {
      restrict: 'AE',
      templateUrl: 'app/components/select/select.html',
      scope: {},
      controller: 'SelectController',
      controllerAs: 'select',
      bindToController: {
        selectItems: '=',
        xtPlaceholder: '@'
      }
    };
  }

}());

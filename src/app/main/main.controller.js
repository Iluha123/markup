(function() {
  'use strict';

  angular
    .module('testX1')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout) {
    var vm = this;
    vm.startVeiw = false;
    $timeout(function() {
      vm.startVeiw = true;
    }, 300);
  }
})();

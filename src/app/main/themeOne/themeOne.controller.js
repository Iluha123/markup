(function() {
  'use strict';

  angular
    .module('testX1')
    .controller('ThemeOneController', ThemeOneController);

  /** @ngInject */
  function ThemeOneController() {
    var vm = this;
    vm.items = ['USA', 'England', 'France', 'Ukraine'];
  }
})();

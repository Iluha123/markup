(function() {
  'use strict';

  angular
    .module('testX1')
    .controller('ThemeTwoController', ThemeTwoController);

  /** @ngInject */
  function ThemeTwoController() {
    var vm = this;
    vm.items = ['USA', 'England', 'France', 'Ukraine'];
  }
})();

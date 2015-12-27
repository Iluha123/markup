(function() {
  'use strict';

  angular
    .module('testX1')
    .controller('SelectController', SelectController);

  function SelectController() {
    var vm = this;

    vm.isOpen = false;
    vm.selectItem = selectItem;
    vm.select = 0;
    vm.selePlace = false;

    function selectItem(index) {
      vm.item = vm.selectItems[index];
      vm.isOpen = false;
      vm.select = index;
      vm.selePlace = true;
    }

    function placeholder() {
      if(vm.xtPlaceholder) {
        vm.showPlace = true;
        vm.item = '';
      } else {
        vm.item = vm.selectItems[0];
      }
    }
    placeholder();
  }

}());

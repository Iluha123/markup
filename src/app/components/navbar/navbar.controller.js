(function() {
  'use strict';

  angular
    .module('testX1')
    .controller('NavbarController', NavbarController);

  /** @ngInject */
  function NavbarController($state) {
    var vm = this;
    vm.toggleLink = toggleLink;
    vm.swipeRight = swipeRight;
    vm.swipeLeft = swipeLeft;
    vm.menuOpen = false;
    var prevLink = 0;
    vm.ArrLink = [
      {
        name: 'Basics',
        active: true,
        stateGo: 'home.theme1'
      },
      {
        name: 'Plans',
        active: false,
        stateGo: 'home.theme2'
      },
      {
        name: 'account & biling',
        active: false,
        stateGo: 'home.theme1'
      },
      {
        name: 'Expansion plans',
        active: false,
        stateGo: 'home.theme2'
      },
      {
        name: 'polices',
        active: false,
        stateGo: 'home.theme1'
      },
      {
        name: 'small businesses',
        active: false,
        stateGo: 'home.theme2'
      }
    ];

    function toggleLink(index) {
      if(prevLink !== index) {
        vm.ArrLink[prevLink].active = false;
        vm.ArrLink[index].active = true;
        prevLink = index;
      }
    }

    function swipeRight() {
      if(!vm.menuOpen){
        vm.menuOpen = true;
      }
    }

    function swipeLeft() {
      if(vm.menuOpen){
        vm.menuOpen = false;
      }
    }

    function firstState() {
      var name = $state.current.name;
      for(var i=0; i < vm.ArrLink.length; i++) {
        if(vm.ArrLink[i].stateGo === name) {
          toggleLink(i);
          i = vm.ArrLink.length - 1;
        }
      }

    }
    firstState();

  }
})();

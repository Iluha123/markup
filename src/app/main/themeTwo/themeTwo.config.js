(function() {
  'use strict';

  angular
    .module('testX1')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider) {


    $stateProvider
      .state('home.theme2', {
        url: '/theme2',
        templateUrl: 'app/main/themeTwo/themeTwo.html',
        controller: 'ThemeTwoController',
        controllerAs: 'one'
      });

  }

})();

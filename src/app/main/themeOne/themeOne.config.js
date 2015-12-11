(function() {
  'use strict';

  angular
    .module('testX1')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider) {


    $stateProvider
      .state('home.theme1', {
        url: '/theme1',
        templateUrl: 'app/main/themeOne/themeOne.html',
        controller: 'ThemeOneController',
        controllerAs: 'one'
      });

  }

})();

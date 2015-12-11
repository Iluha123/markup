(function() {
  'use strict';

  angular
    .module('testX1')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    //$urlRouterProvider.otherwise('/home');
    $urlRouterProvider.otherwise(function($injector) {
      $injector.invoke(function($state) {
        $state.go('home.theme1');
      });
    });

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      });

  }

})();

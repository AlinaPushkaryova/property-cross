myApp.$inject = ['$stateProvider', '$urlRouterProvider', '$qProvider', '$sceDelegateProvider'];

myApp.config(function($stateProvider, $urlRouterProvider, $qProvider, $sceDelegateProvider) {
    $urlRouterProvider.otherwise('/');
    $qProvider.errorOnUnhandledRejections(false);

    $sceDelegateProvider.resourceUrlWhitelist([
        'self',
        'http://api.nestoria.co.uk/**'
    ]);

    $stateProvider
        .state ('home', {
            url: '/',
            templateUrl: 'app/pages/main/main-page.html',
            controller: 'mainController'
        })
        .state ('favorites', {
            url: '/favorites',
            templateUrl: 'app/pages/favorites/favorites-page.html',
            controller: 'favoritesController'
        })
        .state ('details', {
            url: '/details',
            templateUrl: 'app/pages/details/details-page.html',
            controller: 'detailsController',
            params:{item: null}
        });
});


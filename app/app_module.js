var myApp = angular.module("myApp", ["ui.router"]);

myApp.$inject = ["$stateProvider", "$urlRouterProvider", "$qProvider", "$sceDelegateProvider"];

myApp.config(function($stateProvider, $urlRouterProvider, $qProvider, $sceDelegateProvider) {
	$urlRouterProvider.otherwise("/");
	$qProvider.errorOnUnhandledRejections(false);

  // Лучше разрешать ресурсы так
  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'http://api.nestoria.co.uk/**'
  ]);

	$stateProvider
		.state ("home", {
			url: "/",
			templateUrl: "app/pages/main/main.html",
			controller: "mainController"
		})
		.state ("favorites", {
			url: "/favorites",
			templateUrl: "app/pages/favorites/favorites.html",
			controller: "favoritesController"
		})
		.state ("details", {
			url: "/details",
			templateUrl: "app/pages/details/details.html",
			controller: "detailsController",
			params:{item: null}
		});
});

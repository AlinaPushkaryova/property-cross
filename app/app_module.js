var myApp = angular.module("myApp", ["ui.router"]);

myApp.$inject = ["$stateProvider", "$urlRouterProvider", "$qProvider"];

myApp.config(function($stateProvider, $urlRouterProvider, $qProvider) {
	$urlRouterProvider.otherwise("/");
	$qProvider.errorOnUnhandledRejections(false);

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


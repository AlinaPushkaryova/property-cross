myApp.controller ('detailsController', detailsController);

detailsController.$inject = ['$state', '$stateParams', 'dataStorageService', 'ITEMS', 'storageService'];

function detailsController($state, $stateParams, dataStorageService, ITEMS, storageService) {
	var vm = this;
	vm.house = $stateParams.item;

	vm.saveHouse = function () {
		console.log(localStorage.house);
		return dataStorageService.setFaveItems([vm.house]);

	};

	vm.setDetails = function (house) {
		$state.go('details', {
			item: house
		})
	};

}

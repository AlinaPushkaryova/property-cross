myApp.controller ('detailsController', detailsController);

detailsController.$inject = ['$state', '$stateParams', 'dataStorageService'];

function detailsController($state, $stateParams, dataStorageService) {
	var vm = this; 
	vm.house = $stateParams.item;
	vm.started = false;
	vm.itemIndex = null;
	vm.addHouse = true;

	vm.onInit = function () {
		vm.itemIndex = dataStorageService.findItem(vm.house);
	};

	vm.setDetails = function (house) {
		$state.go('details', {
			item: house
		})
	};

	vm.toggleHouse = function () {
		vm.itemIndex = dataStorageService.setFaveItems(vm.house);
	};

	vm.onInit();
}

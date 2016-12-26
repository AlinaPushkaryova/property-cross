myApp.controller ('detailsController', detailsController);

detailsController.$inject = ['$state', '$stateParams', 'storageService', 'detailsService'];

function detailsController($state, $stateParams, storageService, detailsService) {
	var vm = this;
	vm.house = $stateParams.item;

	vm.saveHouse = function () {
		return storageService.setHouse(vm.house);

	};

	vm.setDetails = function (house) {
		$state.go('details', {
			item: house
		})
	};

	 // vm.saveHouse = function (house) {
		//
	 // }

	// this.setDetails = function () {
	//     detailsService.setDetails(house);
	//     $state.go('details');
	// };

	//
	// this.houseGet = function () {
	// 	return apiService.getHouse();
	// };
    //
	// this.setDetails = function () {
     //    return detailsService.setDetails();
    // };
    //
	// this.getDetails = function (house) {
     //   return detailsService.getDetails(house);

  // };
	
}

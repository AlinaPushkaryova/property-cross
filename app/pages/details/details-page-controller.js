myApp.controller ('detailsController', detailsController);

detailsController.$inject = ['apiService', '$scope', 'detailsService', '$state', '$stateParams'];

function detailsController(apiService, $scope, detailsService, $state, $stateParams) {
	$scope.house = $stateParams.item;

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

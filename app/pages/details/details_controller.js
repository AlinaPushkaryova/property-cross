myApp.controller ('detailsController', detailsController);

detailsController.$inject = ['apiService', '$scope', 'detailsService'];

function detailsController(apiService, $scope, detailsService) {
  
	$scope.houseGet = function () {
		return apiService.getHouse();
	};

	$scope.setDetails = function () {
        return detailsService.setDetails();
    };

	$scope.getDetails = function (house) {
       return detailsService.getDetails(house);
   };

	// $scope.house = $stateParams.item;
	// console.log($scope.house);

}
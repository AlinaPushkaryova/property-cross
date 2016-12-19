myApp.controller('mainController', mainController);

mainController.$inject = ['$scope', 'apiService', '$state', 'detailsService', '$q'];

function mainController($scope, apiService, $state, detailsService, $q) {
    // console.log($stateParams);
    
    $scope.data = {};
    $scope.page = 1;
    $scope.keyword = '';
    $scope.totalListing = 0;
    $scope.index = 0;

    $scope.search = function () {
        apiService.getData($scope.keyword, $scope.page);
        console.log("search");
        // .then(function() {
        // $scope.showButton = true;
    };

    $scope.setDetails = function (house) {
        detailsService.setDetails(house);
        $state.go('details');
    };

    $scope.getListing = function () {
        return apiService.getData()
            .then(function(response) {
                
            });
    };

    $scope.getTotalResult = function () {
        return apiService.getTotalResult();
    };

    // $scope.getCurrentPage = function () {
    //     return apiService.getCurrentPage();
    //     $scope.page = getCurrentPage().length;
    //     console.log($scope.page);

    // };

    $scope.showMoreResults = function () {
        $scope.page++;
        apiService.getData($scope.keyword, $scope.page);
        $scope.totalListing += $scope.getListing().length;
        console.log($scope.totalListing);

    };

    $state.go("home", {
        page_number: $scope.page
    });


    $scope.keyEnter = function (event) {
        if (event.keyCode === 13) {
            $scope.search();
        }
    }

}



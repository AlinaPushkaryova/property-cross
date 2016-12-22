myApp.controller('mainController', mainController);

mainController.$inject = ['$scope', '$state', 'mainService', 'TYPES', 'KEYS', '$stateParams'];

function mainController($scope, $state, mainService, TYPES, KEYS, $stateParams) {

    $scope.data = {};
    $scope.page = 1;
    $scope.keyword = '';
    $scope.totalListing = 0;




    this.search = function () {
        mainService.getData($scope.keyword, $scope.page);
    };

    this.getListing = function () {
        return mainService.getOptions(TYPES.LISTINGS);
    };

    this.getTotalResult = function () {
        return mainService.getCounts(TYPES.TOTAL_RESULTS);
    };

    this.getCurrentPage = function () {
        return mainService.getCounts(TYPES.PAGE);
    };


    this.setDetails = function (house) {
    $state.go('details', {
        item: house
    })
    };

    // $scope.house = $stateParams.item;
    // console.log($scope.house);

    // $state.go('details', {
    //     $stateParams: $scope.house
    // });


    this.keyEnter = function ($event) {
        if ($event.keyCode == KEYS.ENTER) {
            this.search();
        }
    };

}



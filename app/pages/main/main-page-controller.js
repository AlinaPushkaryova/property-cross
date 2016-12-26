myApp.controller('mainController', mainController);

mainController.$inject = ['$state', 'mainService', 'TYPES', 'KEYS', '$stateParams'];

function mainController($state, mainService, TYPES, KEYS, $stateParams) {
    var vm = this;
    vm.page = 1;
    vm.keyword = '';
    vm.totalListing = 0;


    vm.search = function () {
        mainService.getData(vm.keyword, vm.page);
    };

    vm.getListing = function () {
        return mainService.getOptions(TYPES.LISTINGS);
    };

    vm.getTotalResult = function () {
        return mainService.getCounts(TYPES.TOTAL_RESULTS);
    };

    vm.getCurrentPage = function () {
        return mainService.getCounts(TYPES.PAGE);
    };

    vm.setDetails = function (house) {
        $state.go('details', {
            item: house
        })
    };

    // $scope.house = $stateParams.item;
    // console.log($scope.house);

    // $state.go('details', {
    //     $stateParams: $scope.house
    // });


    vm.keyEnter = function ($event) {
        if ($event.keyCode == KEYS.ENTER) {
            this.search();
        }
    };
}




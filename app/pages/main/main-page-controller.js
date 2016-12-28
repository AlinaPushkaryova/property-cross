myApp.controller('mainController', mainController);

mainController.$inject = ['$state', 'mainService', 'TYPES', 'KEYS', '$stateParams'];

function mainController($state, mainService, TYPES, KEYS, $stateParams) {
    var vm = this;
    vm.page = 1;
    vm.keyword = '';
    vm.showButton = false;

    vm.search = function () {
        this.showButton = true;
        return mainService.getData(vm.keyword, vm.page);
    };

    vm.getListing = function () {
        return mainService.getOptions(TYPES.LISTINGS);

    };

    vm.getTotalResult = function () {
        return mainService.getCounts(TYPES.TOTAL_RESULTS);
    };

    vm.getTotalPages = function () {
        return mainService.getCounts(TYPES.TOTAL_PAGES);
    };

    vm.setDetails = function (house) {
        $state.go('details', {
            item: house
        })
    };

    vm.showMoreResults = function () {

        vm.page++;
        return vm.search();

    };

    vm.keyEnter = function ($event) {
        if ($event.keyCode == KEYS.ENTER) {
            this.search();
        }
    };
}





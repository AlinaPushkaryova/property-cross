myApp.controller('mainController', mainController);

mainController.$inject = ['$state', 'mainService', 'TYPES', 'KEYS'];

function mainController($state, mainService, TYPES, KEYS) {
    var vm = this;
    vm.keyword = '';
    vm.showButton = false;

    vm.search = function () {
        return mainService.getData(vm.keyword);
    };

    vm.getListing = function () {
        if (vm.getTotalPages() !== 0) {
            vm.showButton = true;
        } else {
            vm.showButton = false;
        }
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

    vm.currentPage = function () {
        return mainService.getCounts (TYPES.PAGE)
    };

    vm.showMoreResults = function () {
       mainService.showMoreResults();
    
    };

    vm.keyEnter = function ($event) {
        if ($event.keyCode == KEYS.ENTER) {
            this.search();
        }
    };

    // vm.recentSearches = function () {
    //     return dataStorageService.setRecentSearches(vm.keyword)
    //
    // }

}






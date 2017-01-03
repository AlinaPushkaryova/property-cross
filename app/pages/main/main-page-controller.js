myApp.controller('mainController', mainController);

mainController.$inject = ['$state', 'mainService', 'TYPES', 'KEYS', 'dataStorageService'];

function mainController($state, mainService, TYPES, KEYS, dataStorageService) {
    var vm = this;
    vm.keyword = '';
    vm.showButton = false;
    vm.listing = 0;
    vm.responseCodeError = 0;

    vm.search = function () {
        vm.listing = 0;
        dataStorageService.setRecentSearch(vm.keyword);
        return mainService.getData(vm.keyword);
    };

    vm.recentSearch = function (recentSearch) {
        vm.listing = 0;
        return mainService.getData(recentSearch)
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
    vm.listing = vm.getListing().length + vm.listing;
       mainService.showMoreResults();

    };

    vm.keyEnter = function ($event) {
        if ($event.keyCode == KEYS.ENTER) {
            this.search();
        }
    };

    vm.getSearches = function () {
        return dataStorageService.getRecentSearches();
    };

    vm.responseCode = function () {
    return mainService.getOptions (TYPES.RESPONSE_CODE);
    };

    vm.errorMessage = function () {
        if (vm.responseCode()==404) {
            vm.responseCodeError = 'ERROR: An error occurred while searching. Please check your network connection and try again.'
        } else if (vm.responseCode()==200 || vm.responseCode()==201) {
            vm.responseCodeError = 'ERROR: There were no properties found for the given location.'
        } else if (vm.responseCode()==900) {
            vm.responseCodeError = 'ERROR: Bad server request. Please enter location name.'
        } else {
            vm.responseCodeError = '';
        }
        return vm.responseCodeError;
    }
}






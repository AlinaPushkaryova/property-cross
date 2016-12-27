myApp.controller ('favoritesController', favoritesController);

favoritesController.$inject = ['$state', '$stateParams', 'dataStorageService', 'ITEMS', 'storageService'];

function favoritesController($state, $stateParams, dataStorageService, ITEMS, storageService) {

var vm = this;
vm.house = $stateParams.item;


vm.showFavorites = function () {
    return storageService.getItem(ITEMS.HOUSE);
};

vm.setDetails = function (house) {
        $state.go('details', {
            item: house
        })
    };



}

myApp.controller ('favoritesController', favoritesController);

favoritesController.$inject = ['$state', '$stateParams', 'storageService'];

function favoritesController($state, $stateParams, storageService) {

var vm = this;
vm.house = $stateParams.item;


vm.showFavorites = function () {
    return storageService.getHouse();
};

vm.setDetails = function (house) {
        $state.go('details', {
            item: house
        })
    };



}

myApp.service('dataStorageService', dataStorageService);

dataStorageService.$inject = ['storageService', 'ITEMS'];

function dataStorageService(storageService, ITEMS) {

    return {
        getFaveItems: getFaveItems,
        setFaveItems: setFaveItems
    };

    // var faveItems = [];

    function getFaveItems() {
        faveItems = storageService.getItem(ITEMS.HOUSE) || [];
        return faveItems;
    };

    function setFaveItems(value) {
        getFaveItems();
        if(!Array.isArray(value)) {
            value = [value];
        }

        faveItems = !faveItems.length ?
            value : faveItems.concat(value);

        storageService.setItem(ITEMS.HOUSE, faveItems)
    };

}

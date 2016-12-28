myApp.service('dataStorageService', dataStorageService);

dataStorageService.$inject = ['storageService', 'ITEMS'];

function dataStorageService(storageService, ITEMS) {

    return {
        getFaveItems: getFaveItems,
        setFaveItems: setFaveItems,
        deleteFaveItems: deleteFaveItems
    };

    var faveItems = [];

    function getFaveItems() {
        return faveItems.length ?
            faveItems :
            faveItems = storageService.getItem(ITEMS.HOUSE) || [];
    }

    function setFaveItems(value) {
        if(!Array.isArray(value)) {
            value = [value];
        }

        faveItems = getFaveItems().concat(value);
        storageService.setItem(ITEMS.HOUSE, faveItems);
    }

    function findItem(item) {
        return getFaveItems().indexOf(function (currentItem) {
            console.log(currentItem);
            return currentItem === item;
        })
    }

    function deleteFaveItems (value) {
        for (var i=0; i<faveItems.length; i++) {
            if(faveItems[i]===value) {
                faveItems.splice(i, 1);
            }
        }
        return faveItems;
    }


}

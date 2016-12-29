myApp.service('dataStorageService', dataStorageService);

dataStorageService.$inject = ['storageService', 'ITEMS'];

function dataStorageService(storageService, ITEMS) {

    function getFaveItems() {
        return storageService.getItem(ITEMS.HOUSE) || [];
    }

    function setFaveItems(value) {
        var index = findItem(value),
            currentItems = getFaveItems();

        index === -1 ?
            currentItems.push(value) :
            currentItems.splice(index, 1);

        storageService.setItem(ITEMS.HOUSE, currentItems);
        return findItem(value);
    }

    function findItem(item) {
        var items = getFaveItems(),
            index = -1;

        for (var i = 0; i < items.length; i++){
            if(items[i].img_url === item.img_url) {
                index = i;
            }
        }

        return index;
    }

    // function setRecentSearches(value) {
    //     var searchesResult = new Array (5);
    //     searchesResult.push(value);
    //     console.log(searchesResult);
    //     storageService.setItem(ITEMS.SEARCHES, searchesResult);
    //     return searchesResult;
    // }

    return {
        getFaveItems: getFaveItems,
        setFaveItems: setFaveItems,
        findItem: findItem
        // setRecentSearches: setRecentSearches

    };
}

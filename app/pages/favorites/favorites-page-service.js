myApp.service ('favoritesService', favoritesService);

favoritesService.$inject = ['$http', 'apiService'];

function favoritesService () {

    this.setDetails = function (house) {
        var houseData = window.localStorage.setItem('houseData', JSON.stringify(house));
        // getDetails = JSON.parse (session.getItem ('houseData'));
        console.log(houseData);
        return getDetails;
    };

    this.getDetails = function () {
        var houseItem = window.JSON.parse(sessionStorage.getItem('houseData'));
        console.log(houseItem);
        return houseItem;
    };

}

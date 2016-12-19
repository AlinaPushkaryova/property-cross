myApp.service ("detailsService", detailsService);

function detailsService () {
    this.setDetails = function (house) {
       var houseData = window.sessionStorage.setItem("houseData", JSON.stringify(house));
        // getDetails = JSON.parse (session.getItem ("houseData"));
        console.log(houseData);
        return getDetails;
    };

    this.getDetails = function () {
        var houseItem = window.JSON.parse(sessionStorage.getItem("houseData"));
        console.log(houseItem);
        return houseItem;
    };
}
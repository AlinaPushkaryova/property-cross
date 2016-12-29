myApp.service('mainService', mainService);

mainService.$inject = ['apiService', 'TYPES'];

function mainService(apiService) {
    var data = {},
        totalPages=null,
        currentPage = 1,
        currentLocation = '';

    this.getData = function (location, page) {
        var page = page || 1;
        apiService.get(location, page).then(function (res) {
            data = res.data.response;
            currentLocation = location;
            totalPages = data.total_pages;
            console.log(data);
        }, function (err) {
            console.error(err);
        })
    };

    this.showMoreResults = function () {
        currentPage++;
        return this.getData(currentLocation, currentPage);
    };

    this.getOptions = function (type) {
        return data[type] || [];
    };
    this.getCounts = function (type) {
        return data[type] || 0;
    };
    
    

}






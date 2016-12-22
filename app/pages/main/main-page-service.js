myApp.service('mainService', mainService);

mainService.$inject = ['apiService', 'TYPES'];

function mainService(apiService) {
    var data = {};

    this.getData = function (location, page) {
        apiService.get(location, page).then(function (res) {
            data = res.data.response;
            console.log(data);
        }, function (err) {
            console.error(err);
        })
    };

    this.getOptions = function (type) {
        return data[type] || [];
    };
    this.getCounts = function (type) {
        return data[type] || 0;
    };


}






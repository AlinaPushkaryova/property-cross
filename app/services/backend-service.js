// var response = false;

myApp.service ('apiService', apiService);

apiService.$inject = ['$http', '$q', '$sce'];

function apiService ($http, $q, $sce) {
    
    this.get = function (location, page) {
        return $http({
            method: 'JSONP',
            url: 'http://api.nestoria.co.uk/api',
            params: {
                country: 'uk',
                pretty: 1,
                action: 'search_listings',
                encoding: 'json',
                listing_type: 'buy',
                place_name: location,
                page: page
            },
            jsonpCallbackParam: 'callback'
        });
    };
    
}




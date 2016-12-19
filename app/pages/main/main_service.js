var response = false;

myApp.service ("apiService", apiService);

apiService.$inject = ["$http", "$q", '$sce'];

function apiService ($http, $q, $sce) {
  this.getData = function (location, page) {
    return $http({
      method: 'JSONP',
      // Но можно разрешить URL и так
      // url: $sce.trustAsResourceUrl("http://api.nestoria.co.uk/api"),
      url: "http://api.nestoria.co.uk/api",
      crossDomain : true,
      params: {
        country: 'uk',
        encoding: 'json',
        listing_type: 'buy',
        action: 'search_listings',
        place_name: location,
        page: page,
        pretty: 1
      },
      jsonpCallbackParam: 'callback'
    }).then(function(res) {
      console.log(res);
      return res.response;
    }).catch(function (err) {
      console.error(err);
    });
	};

	this.getListing = function () {
		var listing = [];
		if (response) {
			listing=response.listings;
		}
	 	return listing;
   	};

	this.getTotalResult = function () {
   		var total = 0;
		if (response) {
   			total = response.total_results;
   	   	}

   	   	return total;
   	};

  // this.getCurrentPage = function () {
  //  		var currentPage = 0;
  //  		if(response) {
  //  			currentPage = response.page;
  //  		}
  //  	      return currentPage;
  //  	      // console.log(currentPage);
  // };

  this.getHouse = function () {
      return house;
  };

}

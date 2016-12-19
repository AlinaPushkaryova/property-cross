var response = false;

myApp.service ("apiService", apiService);

apiService.$inject = ["$http", "$q"];

function apiService ($http, $q) {
    this.getData = function (location, page) {
		// this.location = location;
		var deferred = $q.defer();
		$http({
			method: 'jsonp',
			url: "http://api.nestoria.co.uk/api?country=uk&pretty=1&&encoding=json&listing_type=buy&action=search_listings&callback=JSON_CALLBACK&place_name=${location}&page=${page}",
			params: {
				json_callback: "JSON_CALLBACK"
			}
		}).then(function (resp) {
			deferred.resolve(resp.data.response);
		}).catch(function (err) {
			deferred.reject(err);
		});
		return deferred.promise;

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

// function apiCallback (data, error) {
//     if (data && data.response) {
//         response = data.response;
//         console.log(response);

	  //   for (var i = 0; i < response.listings.length; i++)
			// listing.push(response.listings[i]);
		//}
//}






myApp.service ('storageService', storageService);

storageService.$inject = [];

function storageService () {
    var vm = this;
    

    vm.setItem= function (key, item) {
        localStorage.setItem(key, JSON.stringify(item));
    };

    vm.getItem = function (key) {
      return JSON.parse(localStorage.getItem(key));
    };
}

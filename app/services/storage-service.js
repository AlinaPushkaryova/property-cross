myApp.service ('storageService', storageService);

storageService.$inject = ['$stateParams', '$state'];

function storageService ($stateParams, $state) {

    var vm = this,
        houseList = [];


    vm.setHouse= function (house) {
        houseList.push(house);
        console.log(houseList);
        // console.log(localStorage.houseData);
        // console.log(localStorage.houseData);
        localStorage.setItem('houseData', JSON.stringify(houseList));

    };

    vm.getHouse = function () {
       var houseItem = JSON.parse(localStorage.getItem('houseData'));
        // console.log(houseItem);
        return houseItem;

    };

    // vm.getTotalData = function () {
    //     localStorage.setItem('totalData', JSON.stringify(house));
    // }


}

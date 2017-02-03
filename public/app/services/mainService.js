angular.module('app').service('mainService',function($http){

    var data = [
        {
            action: 'going to the store',
            inProcess: true,
            completed: false
        },
        {
            action: 'take battery out',
            inProcess: false,
            completed: true
        }
    ];

    this.getData = data;

});//closing

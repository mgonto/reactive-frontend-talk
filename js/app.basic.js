angular.module('counter', ['rx']);

angular.module('counter').service('ApiServer', function($q) {
    this.getCounterAmount = function(dt) {
        var random = Math.floor((Math.random()*10)+1);
        var deferred = $q.defer();

        deferred.resolve(random);

        return deferred.promise;
    }

    this.logCounter = function(val) {
        console.log("Current value logged is", val);
    }
});

angular.module('counter').controller('MainCtrl', 
    function(ApiServer, rx, $scope) {
        // $scope.$createObservableFunction('increaseCounter')
        // .flatMap(function() {
        //     return rx.Observable.fromPromise(ApiServer.getCounterAmount(new Date()));
        // })
        // .do(ApiServer.logCounter)
        // .sum()
        // .subscribe(function(counter) {
        //     $scope.counter = counter;
        //     console.log("Total counter is", counter);
        // }, function(error) {
        //     console.error("There was an error");
        // });

        $scope.counter = 0;
        $scope.increaseCounter = function() {
            var val = Math.floor((Math.random()*10)+1);
            ApiServer.logCounter(val);
            $scope.counter += val;
            console.log("Total counter is", $scope.counter);
        }
        
        
});


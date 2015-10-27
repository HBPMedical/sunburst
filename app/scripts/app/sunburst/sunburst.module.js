
angular.module('chuvApp.sunburst', ['ngResource','ui.router'])
.config(['$stateProvider', function ($stateProvider) {
    $stateProvider
    .state('myapp', {
        url: '/hbpapps/sunburst',
        templateUrl: 'scripts/app/sunburst/index.html',
        controller:'sunburstController'
    })
}]);

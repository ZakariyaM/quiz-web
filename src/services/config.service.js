angular.module('app').factory('ConfigService', [function() {

    var service = {};

    service.apiBase = 'https://quiz-api-zm.qaalabs.com/';

    return service;
}]);
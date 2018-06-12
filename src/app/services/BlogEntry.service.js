import angular from 'angular';

/**
 *  Blog Service
 * @param $http;
 */
function BlogService($http){}





const MODULE_NAME = 'BlogEntry';
let module;
try { 
  module = angular.module(MODULE_NAME);
} catch(err) {
  module = angular.module(MODULE_NAME, []);
}
module
    .service('BlogService', ['$http', BlogService]);

import angular from 'angular';

/**
 *  Blog Service
 * @param $http;
 */
function BlogService($http){
  this.$http = $http;
  this.blogPosts = [];
}

BlogService.prototype.getAllBlogPosts = function getAllBlogPosts(){
  // TODO
};

BlogService.prototype.save = function save(){
  // TODO
};

BlogService.prototype.refreshBlogPosts = function refreshBlogPosts(){
  // TODO
  this.getAllBlogPosts();
};


const MODULE_NAME = 'BlogEntry';
let module;
try { 
  module = angular.module(MODULE_NAME);
} catch(err) {
  module = angular.module(MODULE_NAME, []);
}
module
    .service('BlogService', ['$http', BlogService]);

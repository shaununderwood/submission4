import angular from 'angular';

/**
 *  Blog Service
 * @param $http;
 */
function BlogService($http){
  this.$http = $http;
  this.blogPosts = [
    { id: 2, title: 'title2', text: 'text2', tags: 'tag1,tag2' },
    { id: 3, title: 'title3', text: 'text3', tags: 'tag2,tag3' }
  ];
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

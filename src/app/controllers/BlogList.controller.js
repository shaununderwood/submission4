import angular from 'angular';

/**
 * Blog List Controller
 * 
 * @param BlogService 
 * @constructor
 */
function BlogListController(BlogService) {
	this.BlogService = BlogService;
}


const MODULE_NAME = 'BlogEntry';

let module;
try {
	module = angular.module(MODULE_NAME);
} catch (err) {
	module = angular.module(MODULE_NAME, []);
}
module
	.controller('BlogListController', ['BlogService', BlogListController]);

export default MODULE_NAME;
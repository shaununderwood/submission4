import angular from 'angular';

/**
 * Blog Entry Controller
 * 
 * @param BlogService 
 * @constructor
 */
function BlogEntryController(BlogService) {
	this.BlogService = BlogService;
	this.model = {
		title: '',
		text: '',
		tags: '',
		id: 0
	};
}

/**
 *  Function to save the content of model back to the service
 */
BlogEntryController.prototype.save = function save() { };

/**
 *  Function to clear model to a blank state
 */
BlogEntryController.prototype.clear = function clear() { };

/**
 *  Function to reset the model back to the original state
 */
BlogEntryController.prototype.reset = function reset() { };


const MODULE_NAME = 'BlogEntry';

let module;
try {
	module = angular.module(MODULE_NAME);
} catch (err) {
	module = angular.module(MODULE_NAME, []);
}
module
	.controller('BlogEntryController', ['BlogService', BlogEntryController]);

export default MODULE_NAME;
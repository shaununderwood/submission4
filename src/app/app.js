import angular from 'angular';
import '@uirouter/angularjs';
import './controllers/BlogEntry.controller';
import './controllers/BlogList.controller';
import './services/Blog.service';

import '../style/app.css';

function routing($stateProvider) {

	let defaultState = {
		name: 'bloglist',
		url: '',
		template: require('./templates/blog-list.html'),
		controller: 'BlogListController',
		controllerAs: '$ctrl'
	};

	let newBlogEntryState = {
		name: 'newblog',
		url: '/new',
		template: require('./templates/blog-edit.html'),
		controller: 'BlogEntryController',
		controllerAs: '$ctrl'
	};

	$stateProvider.state(defaultState);
	$stateProvider.state(newBlogEntryState);
}

let app = () => {
	return {
		template: require('./app.html'),
	}
};

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, ['BlogEntry', 'ui.router'])
	.directive('app', app)
	.config(routing)
;

export default MODULE_NAME;
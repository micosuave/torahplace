var app = angular.module('admin',['ng-admin']);
app.config(['$stateProvider', function ($stateProvider) {
	$stateProvider
		.state('login', {
			url: '/login',
			templateUrl: './modules/authorization/login.html',
			controller: 'LoginCtrl'

		});
 }]); app.run(['Restangular', '$location', function(Restangular, $location){
		// ==== CODE TO DO 401 NOT LOGGED IN CHECKING
		//This code will intercept 401 unauthorized errors returned from web requests.
		//On default any 401 will make the app think it is not logged in.
		Restangular.setErrorInterceptor(function(response, deferred, responseHandler) {
			if(response.status === 401){
				$location.path('/login');
				return false;
			}
		});
	}]);
app.config(['RestangularProvider', function (RestangularProvider) {

		// use the custom query parameters function to format the API request correctly
		RestangularProvider.addFullRequestInterceptor(function(element, operation, what, url, headers, params) {
			if (operation === 'getList') {
				// custom pagination params
				if (params._page) {
					var start = (params._page - 1) * params._perPage;
					var end = params._page * params._perPage - 1;
					params.range = "[" + start + "," + end + "]";
					delete params._page;
					delete params._perPage;
				}
				// custom sort params
				if (params._sortField) {
					params.sort = '["' + params._sortField + '","' + params._sortDir + '"]';
					delete params._sortField;
					delete params._sortDir;
				}
				// custom filters
				if (params._filters) {
					params.filter = params._filters;
					delete params._filters;
				}
			}
			return { params: params };
		});

		RestangularProvider.addResponseInterceptor(function(data, operation, what, url, response) {
			if (operation === "getList") {
				var headers = response.headers();
				if (headers['content-range']) {
					response.totalCount = headers['content-range'].split('/').pop();
				}
			}

			return data;
		});
	}]);

	// Admin definition
	app.config(['NgAdminConfigurationProvider', function (NgAdminConfigurationProvider) {
		var nga = NgAdminConfigurationProvider;

		function truncate(value) {
			if (!value) {
				return '';
			}

			return value.length > 50 ? value.substr(0, 50) + '...' : value;
		}

		var admin = nga.application('LexSpace™ - Admin') // application main title
			.debug(true) // debug disabled
			.baseApiUrl('/data_api/'); // main API endpoint

		// define all entities at the top to allow references between them
		var post = nga.entity('posts').baseApiUrl('/data_api/'); // the API endpoint for posts will be http://localhost:3000/posts/:id

		var comment = nga.entity('comments')
			.baseApiUrl('/data_api/') // The base API endpoint can be customized by entity
			.identifier(nga.field('id')); // you can optionally customize the identifier used in the api ('id' by default)
        var user = nga.entity('users')
            .baseApiUrl('/data_api/');
        var link = nga.entity('links')
            .baseApiUrl('/data_api/');
        var dashboard = nga.entity('dashboards')
            .baseApiUrl('/data_api/');
        var message = nga.entity('messages')
            .baseApiUrl('/data_api/');
        var group = nga.entity('groups')
            .baseApiUrl('/data_api/');
        var file = nga.entity('files')
            .baseApiUrl('/data_api/');
            
		var tag = nga.entity('tags')
			.baseApiUrl('/data_api/')
			.readOnly(); // a readOnly entity has disabled creation, edition, and deletion views

		var subCategories = [
			{ category: 'tech', label: 'Computers', value: 'computers' },
			{ category: 'tech', label: 'Gadgets', value: 'gadgets' },
			{ category: 'lifestyle', label: 'Travel', value: 'travel' },
			{ category: 'lifestyle', label: 'Fitness', value: 'fitness' }
		];

		// set the application entities
		admin
			.addEntity(post)
			.addEntity(tag)
			.addEntity(comment)
            .addEntity(user)
            .addEntity(link)
            .addEntity(message)
            .addEntity(dashboard)
            .addEntity(group)
            .addEntity(file);

		// customize entities and views

		/*****************************
		 * post entity customization *
		 *****************************/
		post.listView()
			.title('All posts') // default title is "[Entity_name] list"
			.description('List of posts with infinite pagination') // description appears under the title
			.infinitePagination(true) // load pages as the user scrolls
			.fields([
				nga.field('id').label('id'), // The default displayed name is the camelCase field name. label() overrides id
				nga.field('title'), // the default list field type is "string", and displays as a string
				nga.field('published_at', 'date'),  // Date field type allows date formatting
				nga.field('average_note', 'float') // Float type also displays decimal digits
					.cssClasses('hidden-xs'),
				nga.field('views', 'number')
					.cssClasses('hidden-xs'),
				nga.field('backlinks', 'embedded_list') // display list of related comments
					.label('Links')
					.map(links => links ? links.length : '')
					.template('{{ value }}'),
				nga.field('tags', 'reference_many') // a Reference is a particular type of field that references another entity
					.targetEntity(tag) // the tag entity is defined later in this file
					.targetField(nga.field('name')) // the field to be displayed in this list
					.cssClasses('hidden-xs')
					.singleApiCall(ids => { return {'id': ids }; })
			])
			.filters([
				nga.field('category', 'choice').choices([
					{ label: 'Tech', value: 'tech' },
					{ label: 'Lifestyle', value: 'lifestyle' }
				]).label('Category'),
				nga.field('subcategory', 'choice').choices(subCategories).label('Subcategory')
			])
			.listActions(['show', 'edit', 'delete']);

		post.creationView()
			.fields([
				nga.field('title') // the default edit field type is "string", and displays as a text input
					.attributes({ placeholder: 'the post title' }) // you can add custom attributes, too
					.validation({ required: true, minlength: 3, maxlength: 100 }), // add validation rules for fields
				nga.field('teaser', 'text'), // text field type translates to a textarea
				nga.field('body', 'wysiwyg'), // overriding the type allows rich text editing for the body
				nga.field('published_at', 'date') // Date field type translates to a datepicker
			]);

		post.editionView()
			.title('Edit post "{{ entry.values.title }}"') // title() accepts a template string, which has access to the entry
			.actions(['list', 'show', 'delete']) // choose which buttons appear in the top action bar. Show is disabled by default
			.fields([
				post.creationView().fields(), // fields() without arguments returns the list of fields. That way you can reuse fields from another view to avoid repetition
				nga.field('category', 'choice') // a choice field is rendered as a dropdown in the edition view
					.choices([ // List the choice as object literals
						{ label: 'Tech', value: 'tech' },
						{ label: 'Lifestyle', value: 'lifestyle' }
					]),
				nga.field('subcategory', 'choice')
					.choices(function(entry) { // choices also accepts a function to return a list of choices based on the current entry
						return subCategories.filter(function (c) {
							return c.category === entry.values.category;
						});
					}),
				nga.field('tags', 'reference_many') // ReferenceMany translates to a select multiple
					.targetEntity(tag)
					.targetField(nga.field('name'))
					.attributes({ placeholder: 'Select some tags...' })
					.remoteComplete(true, {
						refreshDelay: 300 ,
						searchQuery: function(search) { return { q: search }; }
					})
					.singleApiCall(ids => { return {'id': ids }; })
					.cssClasses('col-sm-4'), // customize look and feel through CSS classes
				nga.field('pictures', 'json'),
				nga.field('views', 'number')
					.cssClasses('col-sm-4'),
				nga.field('average_note', 'float')
					.cssClasses('col-sm-4'),
				nga.field('backlinks', 'embedded_list') // display embedded list
					.targetFields([
						nga.field('date', 'datetime'),
						nga.field('url')
							.cssClasses('col-lg-10')
					])
					.sortField('date')
					.sortDir('DESC'),
				nga.field('comments', 'referenced_list') // display list of related comments
					.targetEntity(nga.entity('comments'))
					.targetReferenceField('post_id')
					.targetFields([
						nga.field('id').isDetailLink(true),
						nga.field('created_at').label('Posted'),
						nga.field('body').label('Comment')
					])
					.sortField('created_at')
					.sortDir('DESC')
					.listActions(['edit']),
				nga.field('').label('')
					.template('<span class="pull-right"><ma-filtered-list-button entity-name="comments" filter="{ post_id: entry.values.id }" size="sm"></ma-filtered-list-button><ma-create-button entity-name="comments" size="sm" label="Create related comment" default-values="{ post_id: entry.values.id }"></ma-create-button></span>')
			]);

		post.showView() // a showView displays one entry in full page - allows to display more data than in a a list
			.fields([
				nga.field('id'),
				nga.field('category', 'choice') // a choice field is rendered as a dropdown in the edition view
					.choices([ // List the choice as object literals
						{ label: 'Tech', value: 'tech' },
						{ label: 'Lifestyle', value: 'lifestyle' }
					]),
				nga.field('subcategory', 'choice')
					.choices(subCategories),
				nga.field('tags', 'reference_many') // ReferenceMany translates to a select multiple
					.targetEntity(tag)
					.targetField(nga.field('name')),
				nga.field('pictures', 'json'),
				nga.field('views', 'number'),
				nga.field('average_note', 'float'),
				nga.field('backlinks', 'embedded_list') // display embedded list
					.targetFields([
						nga.field('date', 'datetime'),
						nga.field('url')
					])
					.sortField('date')
					.sortDir('DESC'),
				nga.field('comments', 'referenced_list') // display list of related comments
					.targetEntity(nga.entity('comments'))
					.targetReferenceField('post_id')
					.targetFields([
						nga.field('id').isDetailLink(true),
						nga.field('created_at').label('Posted'),
						nga.field('body').label('Comment')
					])
					.sortField('created_at')
					.sortDir('DESC')
					.listActions(['edit']),
				nga.field('').label('')
					.template('<span class="pull-right"><ma-filtered-list-button entity-name="comments" filter="{ post_id: entry.values.id }" size="sm"></ma-filtered-list-button><ma-create-button entity-name="comments" size="sm" label="Create related comment" default-values="{ post_id: entry.values.id }"></ma-create-button></span>'),
				nga.field('custom_action').label('')
					.template('<send-email post="entry"></send-email>')
			]);

		/********************************
		 * comment entity customization *
		 ********************************/
		comment.listView()
			.title('Comments')
			.perPage(10) // limit the number of elements displayed per page. Default is 30.
			.fields([
				nga.field('created_at', 'date')
					.label('Posted'),
				nga.field('author.name')
					.label('Author')
					.cssClasses('hidden-xs'),
				nga.field('body', 'wysiwyg')
					.stripTags(true)
					.map(truncate),
				nga.field('post_id', 'reference')
					.label('Post')
					.targetEntity(post)
					.targetField(nga.field('title').map(truncate))
					.cssClasses('hidden-xs')
					.singleApiCall(ids => { return {'id': ids }; })
			])
			.filters([
				nga.field('q')
					.label('')
					.pinned(true)
					.template('<div class="input-group"><input type="text" ng-model="value" placeholder="Search" class="form-control"></input><span class="input-group-addon"><i class="glyphicon glyphicon-search"></i></span></div>')
					.transform(v => v && v.toUpperCase()) // transform the entered value before sending it as a query parameter
					.map(v => v && v.toLowerCase()), // map the query parameter to a displayed value in the filter form
				nga.field('created_at', 'date')
					.label('Posted')
					.attributes({'placeholder': 'Filter by date'}),
				nga.field('post_id', 'reference')
					.label('Post')
					.targetEntity(post)
					.targetField(nga.field('title'))
					.remoteComplete(true, {
						refreshDelay: 200,
						searchQuery: function(search) { return { q: search }; }
					})
			])
			.listActions(['edit', 'delete']);

		comment.creationView()
			.fields([
				nga.field('created_at', 'date')
					.label('Posted')
					.defaultValue(new Date()), // preset fields in creation view with defaultValue
				nga.field('author.name')
					.label('Author'),
				nga.field('body', 'wysiwyg'),
				nga.field('post_id', 'reference')
					.label('Post')
					.targetEntity(post)
					.targetField(nga.field('title').map(truncate))
					.sortField('title')
					.sortDir('ASC')
					.validation({ required: true })
					.remoteComplete(true, {
						refreshDelay: 200,
						searchQuery: function(search) { return { q: search }; }
					})
			]);

		comment.editionView()
			.fields(comment.creationView().fields())
			.fields([
				nga.field('').label('')
					.template('<post-link entry="entry"></post-link>') // template() can take a function or a string
			]);

		comment.deletionView()
			.title('Deletion confirmation'); // customize the deletion confirmation message

		/****************************
		 * tag entity customization *
		 ****************************/
		tag.listView()
			.infinitePagination(false) // by default, the list view uses infinite pagination. Set to false to use regulat pagination
			.fields([
				nga.field('id').label('ID'),
				nga.field('name'),
				nga.field('published', 'boolean').cssClasses(function(entry) { // add custom CSS classes to inputs and columns
					if(entry && entry.values){
						if (entry.values.published) {
							return 'bg-success text-center';
						}
						return 'bg-warning text-center';
					}
				}),
				nga.field('custom')
					.label('Upper name')
					.template('{{ entry.values.name.toUpperCase() }}')
					.cssClasses('hidden-xs')
			])
			.filters([
				nga.field('published')
					.label('Not yet published')
					.template(' ')
					.defaultValue(false)
			])
			.batchActions([]) // disable checkbox column and batch delete
			.listActions(['show', 'edit']);

		tag.editionView()
			.fields([
				nga.field('name'),
				nga.field('published', 'boolean').validation({
					required: true // as this boolean is required, ng-admin will use a checkbox instead of a dropdown
				})
			]);

		tag.showView()
			.fields([
				nga.field('name'),
				nga.field('published', 'boolean')
			]);

        message.creationView()
			.fields([
				nga.field('created_at', 'date')
					.label('Posted')
					.defaultValue(new Date()), // preset fields in creation view with defaultValue
				nga.field('author.name')
					.label('Author'),
				nga.field('body', 'wysiwyg'),
				nga.field('post_id', 'reference')
					.label('Post')
					.targetEntity(post)
					.targetField(nga.field('title').map(truncate))
					.sortField('title')
					.sortDir('ASC')
					.validation({ required: true })
					.remoteComplete(true, {
						refreshDelay: 200,
						searchQuery: function(search) { return { q: search }; }
					})
			]);

		message.editionView()
			.fields(message.creationView().fields())
			.fields([
				nga.field('').label('')
					.template('<post-link entry="entry"></post-link>') // template() can take a function or a string
			]);

		message.deletionView()
			.title('Deletion confirmation'); // customize the deletion confirmation message
        file.creationView()
			.fields([
				nga.field('created_at', 'date')
					.label('Posted')
					.defaultValue(new Date()), // preset fields in creation view with defaultValue
				nga.field('author.name')
					.label('Author'),
				nga.field('body', 'wysiwyg'),
				nga.field('post_id', 'reference')
					.label('Post')
					.targetEntity(post)
					.targetField(nga.field('title').map(truncate))
					.sortField('title')
					.sortDir('ASC')
					.validation({ required: true })
					.remoteComplete(true, {
						refreshDelay: 200,
						searchQuery: function(search) { return { q: search }; }
					})
			]);

		file.editionView()
			.fields(file.creationView().fields())
			.fields([
				nga.field('').label('')
					.template('<post-link entry="entry"></post-link>') // template() can take a function or a string
			]);

		file.deletionView()
			.title('Deletion confirmation'); // customize the deletion confirmation message
        group.creationView()
			.fields([
				nga.field('created_at', 'date')
					.label('Posted')
					.defaultValue(new Date()), // preset fields in creation view with defaultValue
				nga.field('author.name')
					.label('Author'),
				nga.field('body', 'wysiwyg'),
				nga.field('post_id', 'reference')
					.label('Post')
					.targetEntity(post)
					.targetField(nga.field('title').map(truncate))
					.sortField('title')
					.sortDir('ASC')
					.validation({ required: true })
					.remoteComplete(true, {
						refreshDelay: 200,
						searchQuery: function(search) { return { q: search }; }
					})
			]);

		group.editionView()
			.fields(group.creationView().fields())
			.fields([
				nga.field('').label('')
					.template('<post-link entry="entry"></post-link>') // template() can take a function or a string
			]);

		group.deletionView()
			.title('Deletion confirmation'); // customize the deletion confirmation message


		// customize header
		var customHeaderTemplate =
		'<div class="navbar-header">' +
			'<button type="button" class="navbar-toggle" ng-click="isCollapsed = !isCollapsed">' +
			  '<span class="icon-bar"></span>' +
			  '<span class="icon-bar"></span>' +
			  '<span class="icon-bar"></span>' +
			'</button>' +
			'<a class="navbar-brand" href="#" ng-click="appController.displayHome()">SiteAdministration</a>' +
		'</div>' +
		'<p class="navbar-text navbar-right hidden-xs">' +
			'<a href="/blog"><span class="glyphicon glyphicon-sunglasses"></span>&nbsp;View Published</a>' +
		'</p>';
		admin.header(customHeaderTemplate);

		// customize menu
		admin.menu(nga.menu()
			.addChild(nga.menu(post).icon('<span class="glyphicon glyphicon-file"></span>')) // customize the entity menu icon
			.addChild(nga.menu(comment).icon('<strong style="font-size:1.3em;line-height:1em">✉</strong>')) // you can even use utf-8 symbols!
			.addChild(nga.menu(tag).icon('<span class="glyphicon glyphicon-tags"></span>'))
			.addChild(nga.menu(dashboard).icon('<span class="fa fa-dashboard"></span>'))
            .addChild(nga.menu(group).icon('<span class="fa fa-group"></span>'))
            .addChild(nga.menu(link).icon('<span class="fa fa-link"></span>'))
            .addChild(nga.menu(user).icon('<span class="fa fa-user></span>'))
            .addChild(nga.menu().title('Other')
				.addChild(nga.menu().title('Stats').icon('<span class="fa fa-chart">%</span>').link('/stats'))
			)
		);

		// customize dashboard
		var customDashboardTemplate =
		'<!--<div class="row dashboard-starter"></div>-->' +
		'<div class="row dashboard-content"><div class="col-lg-12"><div class="alert btn-glass alert-info">' +
			'Welcome to the Blog Admin!' +
		'</div></div></div>' +
		'<div class="row dashboard-content">' +
			'<div class="col-lg-12">' +
				'<div class="card card-primary">' +
					'<ma-dashboard-panel collection="dashboardController.collections.comments" entries="dashboardController.entries.comments" datastore="dashboardController.datastore"></ma-dashboard-panel>' +
				'</div>' +
			'</div>' +
		'</div>' +
		'<div class="row dashboard-content">' +
			'<div class="col-lg-6">' +
				'<div class="card card-success">' +
					'<ma-dashboard-panel collection="dashboardController.collections.recent_posts" entries="dashboardController.entries.recent_posts" datastore="dashboardController.datastore"></ma-dashboard-panel>' +
				'</div>' +
				'<div class="card card-warning">' +
					'<ma-dashboard-panel collection="dashboardController.collections.popular_posts" entries="dashboardController.entries.popular_posts" datastore="dashboardController.datastore"></ma-dashboard-panel>' +
				'</div>' +
			'</div>' +
			'<div class="col-lg-6">' +
				'<div class="card card-danger">' +
					'<ma-dashboard-panel collection="dashboardController.collections.tags" entries="dashboardController.entries.tags" datastore="dashboardController.datastore"></ma-dashboard-panel>' +
				'</div>' +
			'</div>' +
		'</div>';
		admin.dashboard(nga.dashboard()
			.addCollection(nga.collection(post)
				.name('recent_posts')
				.title('Recent posts')
				.perPage(5) // limit the panel to the 5 latest posts
				.fields([
					nga.field('published_at', 'date').label('Published').format('MMM d'),
					nga.field('title').isDetailLink(true).map(truncate),
					nga.field('views', 'number')
				])
				.sortField('published_at')
				.sortDir('DESC')
				.order(1)
			)
			.addCollection(nga.collection(post)
				.name('popular_posts')
				.title('Popular posts')
				.perPage(5) // limit the panel to the 5 latest posts
				.fields([
					nga.field('published_at', 'date').label('Published').format('MMM d'),
					nga.field('title').isDetailLink(true).map(truncate),
					nga.field('views', 'number')
				])
				.sortField('views')
				.sortDir('DESC')
				.order(3)
			)
			.addCollection(nga.collection(comment)
				.title('Last comments')
				.perPage(10)
				.fields([
					nga.field('created_at', 'date')
						.label('Posted'),
					nga.field('body', 'wysiwyg')
						.label('Comment')
						.stripTags(true)
						.map(truncate)
						.isDetailLink(true),
					nga.field('post_id', 'reference')
						.label('Post')
						.targetEntity(post)
						.targetField(nga.field('title').map(truncate))
				])
				.sortField('created_at')
				.sortDir('DESC')
				.order(2)
			)
			.addCollection(nga.collection(tag)
				.title('Tags publication status')
				.perPage(10)
				.fields([
					nga.field('name'),
					nga.field('published', 'boolean').label('Is published ?')
				])
				.listActions(['show'])
				.order(4)
			)
			.template(customDashboardTemplate)
		);

		nga.configure(admin);
	}]);

	app.directive('postLink', ['$location', function ($location) {
		return {
			restrict: 'E',
			scope: { entry: '&' },
			template: '<p class="form-control-static"><button ng-click="displayPost()">View&nbsp;post</button></p>',
			link: function (scope) {
				scope.displayPost = function () {
					$location.path('/posts/show/' + scope.entry().values.post_id); // jshint ignore:line
				};
			}
		};
	}]);

	app.directive('sendEmail', ['$location', function ($location) {
		return {
			restrict: 'E',
			scope: { post: '&' },
			template: '<button class="btn btn-default" ng-click="send()">Send post by email</button>',
			link: function (scope) {
				scope.send = function () {
					$location.path('/sendPost/' + scope.post().values.id);
				};
			}
		};
	}]);

	// custom 'send post by email' page

	function sendPostController($stateParams, notification) {
		this.postId = $stateParams.id;
		// notification is the service used to display notifications on the top of the screen
		this.notification = notification;
	}
	sendPostController.prototype.sendEmail = function() {
		if (this.email) {
			this.notification.log('Email successfully sent to ' + this.email, {addnCls: 'humane-flatty-success'});
		} else {
			this.notification.log('Email is undefined', {addnCls: 'humane-flatty-error'});
		}
	};
	sendPostController.$inject = ['$stateParams', 'notification'];

	var sendPostControllerTemplate =
		'<div class="row"><div class="col-lg-12">' +
			'<ma-view-actions><ma-back-button></ma-back-button></ma-view-actions>' +
			'<div class="page-header">' +
				'<h1>Send post #{{ controller.postId }} by email</h1>' +
				'<p class="lead">You can add custom pages, too</p>' +
			'</div>' +
		'</div></div>' +
		'<div class="row">' +
			'<div class="col-lg-5"><input type="text" size="10" ng-model="controller.email" class="form-control" placeholder="name@example.com"/></div>' +
			'<div class="col-lg-5"><a class="btn btn-default" ng-click="controller.sendEmail()">Send</a></div>' +
		'</div>';

	app.config(['$stateProvider', function ($stateProvider) {
		$stateProvider.state('send-post', {
			parent: 'main',
			url: '/sendPost/:id',
			params: { id: null },
			controller: sendPostController,
			controllerAs: 'controller',
			template: sendPostControllerTemplate
		});
	}]);

	// custom page with menu item
	var customPageTemplate = '<div class="row"><div class="col-lg-12 card">' +
			'<ma-view-actions><ma-back-button></ma-back-button></ma-view-actions>' +
			'<div class="card-header">' +
				'<h1 class="card-title">Stats</h1>' +
				'<p class="lead">You can add custom pages, too</p>' +
                
			'</div>' +
            '<iframe src="/labs" class="card card-fancy"></iframe>'+
		'</div></div>';
	app.config(['$stateProvider', function ($stateProvider) {
		$stateProvider.state('stats', {
			parent: 'main',
			url: '/stats',
			template: customPageTemplate
		});
	}]);


angular.module('todoService', [])

	// super simple service
	// each function returns a promise object
	.factory('Todos', ['$http',function($http) {
		return {
			get : function() {
				console.log("before get");
				return $http.get('/api/todos');
			},
			create : function(todoData) {
				console.log("before create: "+todoData);
				return $http.post('/api/todos', todoData);
			},
			delete : function(id) {
				return $http.delete('/api/todos/' + id);
			},
			version : function() {
				return $http.get('/api/version');
			}
		}
	}]);

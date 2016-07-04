define(['scripts/services/dependencyResolverFor','scripts/crapRoutes',], function(dependencyResolverFor, config){
	
	var app=angular.module('crap', []);
	app.controller('CrapController', ['$scope','$http', function ($scope, $http) {
		$scope.userId="";
		$scope.password="";
	  $scope.greetMe = 'Welcome Back !';
	/*  $('.summernote').summernote('insertText', 'hello world');*/
	 /* $(document).ready(function() {
		  $('#summernote').summernote({height: 300});
		});*/


/*
		$('.summernote').summernote({
			
			  height: 300,                 // set editor height

			  minHeight: null,             // set minimum height of editor
			  maxHeight: null,             // set maximum height of editor

			  focus: true,                 // set focus to editable area after initializing summernote
			});
		*/
		
	  $scope.tryLogin = function() { 
		  
		  //console.log($scope.userId,$scope.password);
	  var req=[];
	  req.push($scope.userId);
	  req.push($scope.password);
	  
	  $http.post('getsession.do', req).then(function(data){
	//	console.log(data.data);
		
	  if(data.data=="success"){
		  alert("logged In");
		  
	  }
	  else if(data.data=="failure"){
		  alert("login Failed");
	  }
	  },function(data){
		  alert("request failure");
	  });
	  };
	  
	}]);
	app.config(['$controllerProvider','$compileProvider','$provide', '$routeProvider', function($controllerProvider,$compileProvider ,$provide, $routeProvider){
		/*$routeProvider.
		when('/default', {templateUrl: 'modules/default/default.html', controller: 'CrapController'}).
		when('/form', {templateUrl: 'modules/form/form.html', controller: 'formCtrl', resolve:dependencyResolverFor('modules/form/form')}).
		when('/home', {templateUrl: 'modules/home/home.html', controller: 'homeCtrl',resolve:dependencyResolverFor('modules/home/home')}).
		otherwise({redirectTo:'/default'});*/
		
		app.lazy =
	    {
	        controller : $controllerProvider.register,
	        directive  : $compileProvider.directive,
	        service    : $provide.service
	    };
		if(config.routes!= undefined){
		 angular.forEach(config.routes, function(route, path)
	                {
	
			// console.log(route, path);
						$routeProvider.when(path, {templateUrl:route.templateUrl, controller:route.controller ,resolve:dependencyResolverFor(route.dependencies)});
	                });
		}
		if(config.defaultRoutePaths !== undefined)
        {
            $routeProvider.otherwise({redirectTo:config.defaultRoutePaths});
        }
		
	}]);
	
	
	app.run(['$rootScope', '$route',
				function($rootScope, $route) {
		
		$rootScope.checkDigestCycle = function(fn){
	  		var phase = this.$root.$$phase;
	  		if(phase == '$apply' || phase == '$digest'){
	  			if(fn && (typeof(fn) === 'function')){$timeout(function(){fn()});}
	  		}else{this.$apply(fn);}
	  	};
		
			
	}]);

	
	return app;
});


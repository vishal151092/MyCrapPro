define([],function() {
	
	return {
		defaultRoutePaths : '/default',
			routes : {
				
				'/default' : {								
					templateUrl : 'modules/default/default.html', 		
					controller : 'defaultCtrl',
					dependencies : [
					                'modules/default/default',
					                'vendors/summernote',
					                'modules/default/directiveDefault',
					                {style : "vendors/summernote"},
					                {style : "modules/default/default"}
					                ]
					},											
	    		
				'/form' : {
					templateUrl : 'modules/form/form.html',
					controller : 'formCtrl',
					dependencies : [
						'modules/form/form',
						'modules/form/directiveForm',
						   {style : "modules/form/formStyle"}
					]
					},
				'/home' : {
					templateUrl : 'modules/home/home.html',
					controller : 'homeCtrl',
					dependencies : [
					   'modules/home/home',
					   'modules/home/homeDirective',
					   {style : "modules/home/myStyle"},
					   {style : "modules/home/openStyle"}
					   ]
					
					}
				}
	};
	
});
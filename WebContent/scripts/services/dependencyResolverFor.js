define([], function(){
	 
	 return function(dependencies){
		
	
			 
		 var definition={
		
				 currentUser:['$q','$rootScope','$timeout',
									function($q,$rootScope,$timeout){
					
					 
					 var css=[]
						,temp
						,scripts=[];
						for(var i=0;i<dependencies.length;i++){
							if(typeof(dependencies[i])=="object"){
								css.push(dependencies[i]);
							}else{
								scripts.push(dependencies[i]);
							}
						}
						var links= $("link[active=yes]");
						$("link[active=yes]").attr('active','no');
						for(var i=0;i<css.length;i++){
							var j=0;
							for(;j<links.length;j++){
								if(css[i].style==$(links[j]).attr('href')){
									$(links[j]).attr('active','yes');
									break;
								}
							}
							if(j==links.length){
								if(css[i].css){
									temp = document.createElement("link");
									temp.setAttribute("type", "text/css");
									temp.setAttribute("rel", "stylesheet");
									temp.setAttribute("href", css[i].style+'.css');
									temp.setAttribute("active", "yes");
									jQuery("head")[0].appendChild(temp);
								}else{
									$("<link/>",{
										rel: "stylesheet",
										type: "text/css",
										href: css[i].style+'.css'
										
									}).appendTo("head");
									
								}
							}
						}
						var deferred= $q.defer();
						require(scripts, function(){
							$rootScope.checkDigestCycle(function(){
								deferred.resolve();
							});
						});
						return deferred.promise;
		
					}]
		 };
		 
		 
		 
		 
		 return definition;
		 
	 
	 };
	 
 
 });
 
 
 

define(['crapModule'], function (app){
	
	app.lazy.controller('defaultCtrl',['$scope','$http', function($scope, $http){
	
	

		$scope.toNames="";
		$scope.ccNames="";
		$scope.subjectName="";
		$scope.textData="hello Vishal";
		var template={};
		
		
	$scope.addDetails= function(){
		//alert();
		//alert('Your data is \n\n'+$scope.textData+':::::');
		
		
		//alert($('#summernote').text());
		
		var rawText=$("#summernote").val();
		var thought=	rawText;
		
	     alert(thought);
	     
	     var req={};
	     req.toName= $scope.toNames;
	     req.ccNames= $scope.ccNames;
	     req.subjectName= $scope.subjectName;
	     req.textData= rawText;
	     console.log(req);
	};

	$scope.addTemplate= function(){
		var rawText=$("#summernote").val();
		
		
		template.toName= $scope.toNames;
		template.ccNames= $scope.ccNames;
		template.subjectName= $scope.subjectName;
		template.textData= rawText;
		console.log(template);
		var config={
				
		};
		$http.post('/api/mailTemplate/add.do', template).then(function(data){
			alert(data);
		}, 
		function(data){
			alert("error");
		});
	 
	};	
	
	$scope.templates= [
{
	id: 1,
	name: "template1",
	data: '<p>hii <span style="font-weight: bold;">vishal</span> <span style="font-weight: bold; font-style: italic;">!!</span> How<span style="font-style: italic;"> are you</span>&nbsp;</p> 1'
	},
	{
	id: 2,
	name: "template2",
	data: '<p>hii <span style="font-weight: bold;">rahul</span> <span style="font-weight: bold; font-style: italic;">!!</span> How<span style="font-style: italic;"> are you</span>&nbsp;</p> 2'
	},
	{
	id: 3,
	name: "template3",
	data: '<p>hii <span style="font-weight: bold;">vishal</span> <span style="font-weight: bold; font-style: italic;">!!</span> How<span style="font-style: italic;"> are you</span>&nbsp;</p> 3'
	}
	];
	
		
	}]);
});
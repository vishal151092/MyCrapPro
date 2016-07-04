define(['crapModule'], function (app){
	
	app.lazy.controller('homeCtrl',['$scope','$http', function($scope, $http){
	
	

		$(document).ready(function(){
			  var data = [
			    ['Heavy Industry', 12],['Retail', 9], ['Light Industry', 14], 
			    ['Out of home', 16],['Commuting', 7], ['Orientation', 9]
			  ];
			  plot1 = jQuery.jqplot ('chart1', [data], 
			    { 
			      seriesDefaults: {
			        renderer: jQuery.jqplot.PieRenderer, 
			        rendererOptions: {

			          showDataLabels: true
			        }
			      }, 
			      legend: { show:true, location: 'e' }
			    }
			  );
			});
		
		
		
		
		
		
		
		/*
		var width = Math.max(960, innerWidth),
		    height = Math.max(500, innerHeight);

		var i = 0;

		var svg = d3.select("body").append("svg")
		    .attr("width", width)
		    .attr("height", height);

		svg.append("rect")
		    .attr("width", width)
		    .attr("height", height)
		    .on("ontouchstart" in document ? "touchmove" : "mousemove", particle);

		function particle() {
		  var m = d3.mouse(this);

		  svg.insert("circle", "rect")
		      .attr("cx", m[0])
		      .attr("cy", m[1])
		      .attr("r", 1e-6)
		      .style("stroke", d3.hsl((i = (i + 1) % 360), 1, .5))
		      .style("stroke-opacity", 1)
		    .transition()
		      .duration(2000)
		      .ease(Math.sqrt)
		      .attr("r", 100)
		      .style("stroke-opacity", 1e-6)
		      .remove();

		  d3.event.preventDefault();
		}

		*/
	
		$scope.company="TATA CONSULTANCY SERVICES LIMITED";
	$scope.branch="Nagpur";
	$scope.data=undefined;
/*	$scope.docs= {
		"name": "",
		"description": "",
		"fileUps":undefined,
		"uploadTime": new Date()
		
	};*/
	//console.log(document);
	/*$scope.uploadFile= function(){
		
		 var f = document.getElementById('file').files[0],
         r = new FileReader();
     r.onloadend = function(e){
       $scope.data = e.target.result;
     };
     r.readAsBinaryString(f);
	
		
		console.log($scope.docs);
		$http.post('upload.do',$scope.docs).then(function(data){
			alert("success");
			console.log($scope.docs);
		}, function(data){
		  alert("request failed");
	  });
		
	};
	*/
	
	
/*	$scope.uploadFile = function(files) {
	    var fd = new FormData();
	    //Take the first selected file
	    fd.append("file", files[0]);
	    $scope.docs.fileUps=fd;
	    console.log($scope.docs);
	    $http.post('upload.do', $scope.docs, {
	        withCredentials: true,
	        headers: {'Content-Type': undefined },
	        transformRequest: angular.identity
	    }).success(function(data){alert("success");} ).error(function(data){alert("fail");} );

	};*/
	
	
	
	 $scope.$on('go', function (event,x) { 
		 $scope.searchword=x; 
		 
	 });
	
	}]);
});
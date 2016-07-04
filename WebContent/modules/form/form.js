define(['crapModule'], function (app){
	
	app.lazy.controller('formCtrl',['$scope','$http','fileUpload', function($scope, $http, fileUpload){
	
	
		/*jQuery(document).ready(function () {
		    urlDataJSON = 'modules/form/flares.json';

		    $.getJSON(urlDataJSON, "", function (data) {
		        var dataSlices = [];
		        //var dataLabels = "";

		        $.each(data, function (entryindex, entry) {
		        	dataSlices.push([entry['title'], entry['votes']]);
		            //dataLabels = dataLabels + entry['title'];
		        });
		        options = {
		            legend: { show: true },
		            title: 'Poll Results',
		            seriesDefaults: {
		                // Make this a pie chart.
		                renderer: jQuery.jqplot.PieRenderer,
		                rendererOptions: {
		                    // Put data labels on the pie slices.
		                    // By default, labels show the percentage of the slice.
		                    showDataLabels: true
		                }
		            }
		        };
		        plot = $.jqplot('chartdiv', [dataSlices], options);
		    });
		}); */
		
		
		$scope.plotData= function(data){

	        var dataSlices = [];
	        //var dataLabels = "";

	        $.each(data, function (entryindex, entry) {
	        	dataSlices.push([entry['title'], entry['votes']]);
	            //dataLabels = dataLabels + entry['title'];
	        });
	        options = {
	            legend: { show: true },
	            title: 'Poll Results',
	            seriesDefaults: {
	                // Make this a pie chart.
	                renderer: jQuery.jqplot.PieRenderer,
	                rendererOptions: {
	                    // Put data labels on the pie slices.
	                    // By default, labels show the percentage of the slice.
	                    showDataLabels: true
	                }
	            }
	        };
	        plot = $.jqplot('chartdiv', [dataSlices], options);
	    
			
		};
		
		
		$http.get('modules/form/flares.json').success(function(data){
			$scope.plotData(data);
			
		}).error(function(){});
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		$scope.list=[];
		$scope.name="vishal singh";
		$scope.place="VARANASI";
		
		$http.get('getData.do').success(function(data){
		
			$scope.list= data;
		});
		
		$scope.sendData={
				"id": undefined,
			"name": "",
			"address": ""
	};
		
		$scope.addDetails=function(){
			
			 $http.post('addDetails.do', $scope.sendData)
			 .success(function(data){alert(data);} ).error(function(data){alert(data);} );
		};
		
		$scope.deleteDetails=function(e){
			//console.log($scope.list);
			//console.log(e);
			var obj= $scope.list[e];
			console.log(obj);
			 $http.post('deleteDetails.do', obj)
			 .success(function(data){alert(data);} ).error(function(data){alert(data);} );
		};
		
		$scope.editDetails=function(e){
			$scope.sendData= $scope.list[e];
		};
		
		$scope.uploadNow= function(){
		
		var file = $scope.myFile;
		var uploadUrl = 'fileUpload.do';
		console.log(file,uploadUrl);
		fileUpload.uploadFileToUrl(file, uploadUrl);
		};
		
	}]);
	
		
	app.lazy.service('fileUpload', ['$http', function ($http) {
	    this.uploadFileToUrl = function(file, uploadUrl){
	    	alert("hii"+uploadUrl);
	        var fd = new FormData();
	        fd.append('file', file);
	        $http.post(uploadUrl, fd, {
	            transformRequest: angular.identity,
	            headers: {'Content-Type': undefined}
	        })
	        .success(function(data){
	        	alert("success"+data);
	        })
	        .error(function(data){
	        	alert("failure"+data);
	        });
	    };
	    
	}]);	
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		/*var diameter = 960,
	    format = d3.format(",d");

	var pack = d3.layout.pack()
	    .size([diameter - 4, diameter - 4])
	    .value(function(d) { return d.size; });

	var svg = d3.select("body").append("svg")
	    .attr("width", diameter)
	    .attr("height", diameter)
	  .append("g")
	    .attr("transform", "translate(2,2)");

	d3.json("modules/form/flares.json", function(error, root) {
	  if (error) throw error;

	  var node = svg.datum(root).selectAll(".node")
	      .data(pack.nodes)
	    .enter().append("g")
	      .attr("class", function(d) { return d.children ? "node" : "leaf node"; })
	      .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

	  node.append("title")
	      .text(function(d) { return d.name + (d.children ? "" : ": " + format(d.size)); });

	  node.append("circle")
	      .attr("r", function(d) { return d.r; });

	  node.filter(function(d) { return !d.children; }).append("text")
	      .attr("dy", ".3em")
	      .style("text-anchor", "middle")
	      .text(function(d) { return d.name.substring(0, d.r / 3); });
	});

	d3.select(self.frameElement).style("height", diameter + "px");*/
		
	

	
});
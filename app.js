'use strict';

angular.module('app', ['angles'])
	.controller('appCtrl', ['$scope', '$document', function ($scope, $document) {
		$scope.chart = {
			labels : ["Acidity","Floral","Citrus","Soft fruit","Nutty","Malty","Caramel","Chocolate","Spicy","Mouthfeel","Aftertaste"],
			datasets : [
				{
					fillColor : "rgba(102,153,153,0.5)",
					strokeColor : "rgba(118,64,0,1)",
					pointColor : "rgba(118,64,0,1)",
					pointStrokeColor : "#fff",
					data : [6,5,7,9,5,7,8,6,3,5,7]
				}
			], 
		};
		$scope.options = {
			scaleOverride: true,
			scaleSteps: 10,
			scaleStepWidth: 1,
			scaleStartValue: 0
		};
		$scope.toDataURL = function () {
			var ctx = document.getElementById('mycanvas').getContext("2d");
			var dataURL = ctx.canvas.toDataURL("image/png");
			$scope.dataUrl = dataURL;
		};
	}
]);

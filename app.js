'use strict';

angular.module('app', ['angles'])
	.directive('coffeeChart', function() {
		return function(scope, iElement, iAttr) {
		};
	})
	.controller('appCtrl', ['$scope', function ($scope) {
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
		$scope.toDataURL = function () {
			var dataURL = canvas.toDataURL("image/png");
			console.log (dataURL);
		};
	}
]);

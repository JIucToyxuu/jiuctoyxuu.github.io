define(['jquery', 'handlebars', 'flot'], function ($, Handlebars, flot) {

	var wrapButton = {
		isExisting: function() {
			return $('#wrapButton').length;
		},
		create: function() {
			//$('#getCodes').wrap('<div id="wrapButton"></div>');
		},
		// change button color
		changeColor: function(result) {
			(result) ? $('#wrapButton').removeClass("errors").addClass("success") : $('#wrapButton').removeClass("success").addClass("errors");
		}
	};

	function showChart(dataChart) {
		var successChart = {
			"label": "success",
			"color": "green",
			"data": dataChart.success,
		};
		var errorsChart = {
			"label": "errors",
			"color": "red",
			"data": dataChart.errors,
		};

		var options = {
			yaxis: {
				tickSize: 1,
			},
			xaxis: {
				//show: false,
				tickSize: 1,
			},
			grid: {
				borderWidth: 1,
				backgroundColor: {
					colors: ["#fff", "#e4f4f4"]
				},
				margin: {
					bottom: 10,
					left: 10
				}
			},
		};

		$("#chart").addClass("chart");
		$.plot($("#chart"), [successChart, errorsChart], options);
	}

	return {
		render: function (result, data) {
			if(!wrapButton.isExisting()) {
				wrapButton.create(result);
			}
			wrapButton.changeColor(result);
			var source = $("#templateCodes").html();
			var template = Handlebars.compile(source);
			$('tbody').empty().append(template(data));
			//console.log(data)
		},
		showChart: showChart
	};
});
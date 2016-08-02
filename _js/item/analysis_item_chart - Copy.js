$(document).ready(function () {
    //auto draw chart
    google.charts.setOnLoadCallback(drawChart);
	
	$(window).resize(function(){
  		drawChart();
	});
    
    function drawChart() {
        // Get data.
        var item_cd = $('#item_cd').val();
        var hist;
		var similars;
        
        $.ajax({
            url: "/item/?md=get_history_price&item_cd=" + item_cd,
            type: 'GET',
            dataType: "json",
            async: false,
            success: function (data) {
                hist = data;
            }
        });
		
		$.ajax({
            url: "/item/?md=get_similars_history_price&item_cd=" + item_cd,
            type: 'GET',
            dataType: "json",
            async: false,
            success: function (data) {
                similars = data;
            }
        });
		
		var avg_price = parseInt(similars.avg_price);
		var max_price = parseInt(similars.max_price);
		var min_price = parseInt(similars.min_price);
		
        // create chart
        var data = new google.visualization.DataTable();
        data.addColumn('date', 'Date');
        data.addColumn('number', '価格');		
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}}, 'Status');
		data.addColumn({'type': 'string', 'role': 'style'});
		data.addColumn('number', '平均成約価格');
		data.addColumn({type:'string', role:'annotation'});
		data.addColumn({type: 'string', role: 'tooltip', p: {html: true}}, 'Status1');	
		data.addColumn({'type': 'string', 'role': 'style'});
		data.addColumn('number', '最高成約価格');
		data.addColumn({type:'string', role:'annotation'});
		data.addColumn({type: 'string', role: 'tooltip', p: {html: true}}, 'Status2');
		data.addColumn({'type': 'string', 'role': 'style'});
		data.addColumn('number', '最安成約価格');
		data.addColumn({type:'string', role:'annotation'});
		data.addColumn({type: 'string', role: 'tooltip', p: {html: true}}, 'Status3');
		data.addColumn({'type': 'string', 'role': 'style'});
		
        for (var i = 0; i < hist.length; i++) {
            var datetime = new Date(hist[i].date_regist);
            var hist_price = parseInt(hist[i].hist_price);
            var stat_name = hist[i].stat_name;
            
			var datetime1 = new Date(datetime);
			datetime1.setDate(datetime1.getDate() - 1);
			
            var date = datetime.getDate();
            var month = datetime.getMonth() + 1;
			var year = datetime.getFullYear();
			
			if (stat_name == '販売開始') {
				var style = 'point {fill-color: #000000;}';
			}
			if (stat_name == '価格改定') {
				var style = 'point {fill-color: #FF0000;}';
			}
			if (stat_name == '商談') {
				var style = 'point {fill-color: #0000FF;}';
			}
			if (stat_name == '再販' && hist[i-1].stat_name != '商談') {
				var style = 'point {fill-color: #1170FF;}}';
			}
			if (stat_name == '再販' && hist[i-1].stat_name == '商談') {
				var style = 'point {fill-color: #1170FF;}, line {color: #A0A0A0;}';
			}
			if (stat_name == '問合せ') {
				var style = 'point {fill-color: #006600;}';
			}
			if (stat_name == '成約') {
				var style = 'point {fill-color: #000000;}';
			}
            data.addRows([[datetime, hist_price,
                			'<div style = "width: 170px; height: 70px; padding: 15px 20px;">'
                            + '<div style = "font-size: larger;">' + year + '年' + month + '月' + date + '日</div>'
							+ '<br><div style = "font-size: large;"><span style="color: blue">'
                            + stat_name + ': </span>' + hist_price + '万円</div></div>', style, 
							null, null, null, null, null, null, null, null, null, null, null, null]]);	
        }
		
		var now = new Date();
		var sixMonthsAgo = new Date()
		sixMonthsAgo.setDate(sixMonthsAgo.getDate() - 6*30);
		
		var style1 = 'point {fill-color: transparent;}';
		var style2 = 'point {fill-color: transparent;}';
		var style3 = 'point {fill-color: transparent;}';
		
		var avg_price = parseInt(similars.avg_price);
		var max_price = parseInt(similars.max_price);
		var min_price = parseInt(similars.min_price);
		
		var tooltip1 = '<div style = "width: auto; height: auto; padding: 10px 10px; font-size: 14px;">'
					  +'<span style="color: blue">平均成約価格:</span> <b>' + avg_price + '万円</b></div>';
		var tooltip2 = '<div style = "width: auto; height: auto; padding: 10px 10px; font-size: 14px;">'
					  +'<span style="color: blue">最高成約価格:</span> <b>' + max_price + '万円</b></div>';
		var tooltip3 = '<div style = "width: auto; height: auto; padding: 10px 10px; font-size: 14px;">'
					  +'<span style="color: blue">最安成約価格:</span> <b>' + min_price + '万円</b></div>';
					  
		var annotation1 = avg_price + '万円';
		var annotation2 = max_price + '万円';
		var annotation3 = min_price + '万円';
	
		data.addRows([[sixMonthsAgo, null, null, null, avg_price, null, tooltip1, style1, null, null, null, null, null, null, null, null]]);
		data.addRows([[now, null, null, null, avg_price, annotation1, tooltip1, style1, null, null, null, null, null, null, null, null]]);
		data.addRows([[sixMonthsAgo, null, null, null, null, null, null, null, max_price, null, tooltip2, style2, null, null, null, null]]);
		data.addRows([[now, null, null, null, null, null, null, null, max_price, annotation2, tooltip2, style2, null, null, null, null]]);
		data.addRows([[sixMonthsAgo, null, null, null, null, null, null, null, null, null, null, null, min_price, null, tooltip3, style3]]);
		data.addRows([[now, null, null, null, null, null, null, null, null, null, null, null, min_price, annotation3, tooltip3, style3]]);

		
        // Set chart options
		
		var xAxis_max_1 = new Date(hist[hist.length - 1].date_regist);
		xAxis_max_1.setDate(xAxis_max_1.getDate() + 5);
		
		var xAxis_min_1 = new Date(hist[0].date_regist);
		//xAxis_min_1.setDate(xAxis_min_1.getDate() - 5);
		
		var yAxis_max_1 = parseInt(hist.reduce(function(max, obj) {
											return max >= obj.hist_price ? max : obj.hist_price;
										}, -Infinity)) + 200;
		
		var yAxis_min_1 = parseInt(hist.reduce(function(min, obj) {
											return min <= obj.hist_price ? min : obj.hist_price;
										}, Infinity)) - 200;
		
		if (similars != null) {
			var yAxis_max_2 = max_price + 500;
			var yAxis_min_2 = min_price - 200;
			
			var xAxis_min = xAxis_min_1;
			var xAxis_max = xAxis_max_1;
			var xAxis_max = new Date();
			xAxis_max.setDate(xAxis_max.getDate() + 5);

			var yAxis_max = (yAxis_max_1 > yAxis_max_2) ? yAxis_max_1 : yAxis_max_2;
			var yAxis_min = (yAxis_min_1 < yAxis_min_2) ? yAxis_min_1 : yAxis_min_2;
		} else {
			var xAxis_min = xAxis_min_1;
			var xAxis_max = xAxis_max_1;
			var yAxis_min = yAxis_min_1;
			var yAxis_max = yAxis_max_1;
		}
        
        var options = {
			annotations: {
			  textStyle: {
				  fontSize: 18,
				  bold: true,	 
			  }
			},
			series : {      
			    0: { tooltip : true},
			    1: { tooltip : false, pointSize: 0},
			    2: { tooltip : false, pointSize: 0},
			    3: { tooltip : false, pointSize: 0}
      		},
			explorer: { 
				actions: ['dragToZoom', 'rightClickToReset'],
				axis: 'horizontal',
				keepInBounds: true,
				zoomDelta: 0.5,
			},
			height:400,
			colors: ['blue', '#DFBADD', '#BE1D2C', '#283890'],
			interpolateNulls: true,
            tooltip: {
                isHtml: true
            },
            hAxis: {
				slantedText: true,
                format: 'M月d日',
				baseline: xAxis_min,
				viewWindow: {
                    max: xAxis_max,
                    min: xAxis_min
                },
				gridlines: {
					count: 20,	
				}
            },
			vAxis: {
				baseline: yAxis_min,
				gridlines: {
					count: 5,	
				},
                viewWindow: {
                    max: yAxis_max,
                    min: yAxis_min
                },
            },
            pointSize: 10
        };
        
        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
        chart.draw(data, options);
    }
    });
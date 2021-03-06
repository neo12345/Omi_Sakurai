//draw line chart
function drawChartForEachCity() {
    //hide div not use
    $(".chart_div").html();
    $(".chart_div").hide();

    // Get data.
    var all_data;

    var city = new Array();
    $.each($("input[name='city[]']:checked"), function () {
        city.push($(this).val());
    });
    var cat_item = new Array();
    $.each($("input[name='cat_item[]']:checked"), function () {
        cat_item.push($(this).val());
    });
    var condition = new Array();
    $.each($("input[name='condition[]']:checked"), function () {
        condition.push($(this).val());
    });
    var seller = new Array();
    $.each($("input[name='seller[]']:checked"), function () {
        seller.push($(this).val());
    });

    if (!city[0]) {
        city = ["40136", "40134", "40135", "40131", "40133", "40132", "40137",
            "40223", "40342", "40343", "40218", "40224", "40344", "40219",
            "40348", "40305", "40230", "40345", "40203", "40349", "40341",
            "40221", "40207", "40447", "41345", "40503", "40216", "40647",
            "40217", "41346", "41203", "41341"];
    }

    var from = formatDate(new Date($("#from").val()));
    var to = formatDate(new Date($("#to").val())) + ' 23:59:59';

    var formData = {
        city: city,
        cat_item: cat_item,
        condition: condition,
        seller: seller,
        from: from,
        to: to
    };

    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
        }
    });

    $.ajax({
        url: "/item/?md=get_analysis_chart_data_total",
        type: 'POST',
        data: formData,
        dataType: "json",
        async: false,
        success: function (data) {
            all_data = data;
        }
    });

    if (all_data) {
        for (var m = 0; m < all_data.length; m++) {
            var result = null;
            result = all_data[m].result;
            var opt = all_data[m].opt;
            
            if (!result) {
                var error = '<div class="alert alert-danger"></div>';
                $('#error').html(error);
            } else {
                // create chart
                var data = new google.visualization.DataTable();

                data.addColumn('date', 'Date');
                if (opt == 4 || opt == 5) {
                    data.addColumn('number', '価格');
                } else {
                    data.addColumn('number', '件数');
                }
                data.addColumn({type: 'string', role: 'tooltip', p: {html: true}}, 'Status');

                if (result.length > 0 && opt < 4) {
                    if ((new Date($("#to").val()) - new Date($("#from").val())) > 730 * 86400 * 1000) {
                        var date = new Date(result[0].x_axis).getDate() + 30;
                        var month = new Date(result[0].x_axis).getMonth();
                        var year = new Date(result[0].x_axis).getFullYear();

                        var x_axis = new Date(year, month, date);
                        var y_axis = parseInt(0);
                        data.addRows([[x_axis, y_axis, '']]);
                    } else if ((new Date($("#to").val()) - new Date($("#from").val())) > 365 * 86400 * 1000) {
                        var date = new Date(result[0].x_axis).getDate() + 14;
                        var month = new Date(result[0].x_axis).getMonth();
                        var year = new Date(result[0].x_axis).getFullYear();

                        var x_axis = new Date(year, month, date);
                        var y_axis = parseInt(0);
                        data.addRows([[x_axis, y_axis, '']]);
                    } else if ((new Date($("#to").val()) - new Date($("#from").val())) > 180 * 86400 * 1000) {
                        var date = new Date(result[0].x_axis).getDate() + 7;
                        var month = new Date(result[0].x_axis).getMonth();
                        var year = new Date(result[0].x_axis).getFullYear();

                        var x_axis = new Date(year, month, date);
                        var y_axis = parseInt(0);
                        data.addRows([[x_axis, y_axis, '']]);
                    } else if ((new Date($("#to").val()) - new Date($("#from").val())) > 60 * 86400 * 1000) {
                        var date = new Date(result[0].x_axis).getDate() + 3;
                        var month = new Date(result[0].x_axis).getMonth();
                        var year = new Date(result[0].x_axis).getFullYear();

                        var x_axis = new Date(year, month, date);
                        var y_axis = parseInt(0);
                        data.addRows([[x_axis, y_axis, '']]);
                    } else {
                        var date = new Date(result[0].x_axis).getDate() + 1;
                        var month = new Date(result[0].x_axis).getMonth();
                        var year = new Date(result[0].x_axis).getFullYear();

                        var x_axis = new Date(year, month, date);
                        var y_axis = parseInt(0);
                        data.addRows([[x_axis, y_axis, '']]);
                    }
                }

                for (var i = 0; i < result.length; i++) {
                    var date = new Date(result[i].x_axis).getDate();
                    var month = new Date(result[i].x_axis).getMonth();
                    var year = new Date(result[i].x_axis).getFullYear();

                    var x_axis = new Date(year, month, date);
                    var y_axis = parseInt(result[i].y_axis);

                    if (opt == 4 || opt == 5) {
                        if ((new Date($("#to").val()) - new Date($("#from").val())) > 365 * 86400 * 1000) {
                            var d = new Date(result[i].x_axis);

                            var month = d.getMonth() + 1;
                            var year = d.getFullYear();

                            var tooltip = '<div style = "width: 150px; height: 70px; padding: 15px 15px;">'
                                    + '<div style = "font-size: larger;">'
                                    + year + '年' + month + '月</div><br>'
                                    + '<div style = "font-size: large;"><b>' + y_axis + '万円</b></div></div>';

                        } else if ((new Date($("#to").val()) - new Date($("#from").val())) > 180 * 86400 * 1000) {
                            var d = new Date(result[i].x_axis);

                            d.setDate(d.getDate() - 7);
                            d = (d > new Date($("#from").val())) ? d : new Date($("#from").val());

                            var date_start = d.getDate();
                            var month_start = d.getMonth() + 1;

                            d.setDate(d.getDate() + 13);
                            d = (d < new Date($("#to").val())) ? d : new Date($("#to").val());

                            var date_end = d.getDate();
                            var month_end = d.getMonth() + 1;

                            var tooltip = '<div style = "width: 150px; height: 70px; padding: 15px 15px;">'
                                    + '<div style = "font-size: larger;">'
                                    + month_start + '月' + date_start + '日 - ' + month_end + '月' + date_end + '日</div><br>'
                                    + '<div style = "font-size: large;"><b>' + y_axis + '万円</b></div></div>';

                        } else if ((new Date($("#to").val()) - new Date($("#from").val())) > 30 * 86400 * 1000) {
                            var d = new Date(result[i].x_axis);

                            d.setDate(d.getDate() - 3);
                            d = (d > new Date($("#from").val())) ? d : new Date($("#from").val());

                            var date_start = d.getDate();
                            var month_start = d.getMonth() + 1;

                            d.setDate(d.getDate() + 6);
                            d = (d < new Date($("#to").val())) ? d : new Date($("#to").val());

                            var date_end = d.getDate();
                            var month_end = d.getMonth() + 1;

                            var tooltip = '<div style = "width: 150px; height: 70px; padding: 15px 15px;">'
                                    + '<div style = "font-size: larger;">'
                                    + month_start + '月' + date_start + '日 - ' + month_end + '月' + date_end + '日</div><br>'
                                    + '<div style = "font-size: large;"><b>' + y_axis + '万円</b></div></div>';
                        } else {
                            month = month + 1;
                            var tooltip = '<div style = "width: 150px; height: 70px; padding: 15px 20px;">'
                                    + '<div style = "font-size: larger;">'
                                    + month + '月' + date + '日</div><br><b>' + y_axis + '万円</b></div></div>';
                        }

                    } else { //opt = 1 || opt = 2 || opt = 3
                        if ((new Date($("#to").val()) - new Date($("#from").val())) > 730 * 86400 * 1000) {
                            var d = new Date(result[i].x_axis);

                            var month = d.getMonth() + 1;
                            var year = d.getFullYear();

                            var tooltip = '<div style = "width: 150px; height: 70px; padding: 15px 15px;">'
                                    + '<div style = "font-size: larger;">'
                                    + year + '年' + month + '月</div><br>'
                                    + '<div style = "font-size: large;"><b>' + y_axis + '件</b></div></div>';

                        } else if ((new Date($("#to").val()) - new Date($("#from").val())) > 365 * 86400 * 1000)
                        {
                            var d = new Date(result[i].x_axis);

                            d.setDate(d.getDate() - 7);
                            d = (d > new Date($("#from").val())) ? d : new Date($("#from").val());

                            var date_start = d.getDate();
                            var month_start = d.getMonth() + 1;

                            d.setDate(d.getDate() + 13);
                            d = (d < new Date($("#to").val())) ? d : new Date($("#to").val());

                            var date_end = d.getDate();
                            var month_end = d.getMonth() + 1;

                            var tooltip = '<div style = "width: 150px; height: 70px; padding: 15px 15px;">'
                                    + '<div style = "font-size: larger;">'
                                    + month_start + '月' + date_start + '日 - ' + month_end + '月' + date_end + '日</div><br>'
                                    + '<div style = "font-size: large;"><b>' + y_axis + '件</b></div></div>';

                        } else if ((new Date($("#to").val()) - new Date($("#from").val())) > 180 * 86400 * 1000)
                        {
                            var d = new Date(result[i].x_axis);

                            d.setDate(d.getDate() - 3);
                            d = (d > new Date($("#from").val())) ? d : new Date($("#from").val());

                            var date_start = d.getDate();
                            var month_start = d.getMonth() + 1;

                            d.setDate(d.getDate() + 6);
                            d = (d < new Date($("#to").val())) ? d : new Date($("#to").val());

                            var date_end = d.getDate();
                            var month_end = d.getMonth() + 1;

                            var tooltip = '<div style = "width: 150px; height: 70px; padding: 15px 15px;">'
                                    + '<div style = "font-size: larger;">'
                                    + month_start + '月' + date_start + '日 - ' + month_end + '月' + date_end + '日</div><br>'
                                    + '<div style = "font-size: large;"><b>' + y_axis + '件</b></div></div>';

                        } else if ((new Date($("#to").val()) - new Date($("#from").val())) > 60 * 86400 * 1000)
                        {
                            var d = new Date(result[i].x_axis);

                            d.setDate(d.getDate() - 1);
                            d = (d > new Date($("#from").val())) ? d : new Date($("#from").val());

                            var date_start = d.getDate();
                            var month_start = d.getMonth() + 1;

                            d.setDate(d.getDate() + 2);
                            d = (d < new Date($("#to").val())) ? d : new Date($("#to").val());

                            var date_end = d.getDate();
                            var month_end = d.getMonth() + 1;

                            var tooltip = '<div style = "width: 150px; height: 70px; padding: 15px 15px;">'
                                    + '<div style = "font-size: larger;">'
                                    + month_start + '月' + date_start + '日 - ' + month_end + '月' + date_end + '日</div><br>'
                                    + '<div style = "font-size: large;"><b>' + y_axis + '件</b></div></div>';

                        } else {
                            month += 1;
                            var tooltip = '<div style = "width: 150px; height: 70px; padding: 15px 20px;">'
                                    + '<div style = "font-size: larger;">'
                                    + month + '月' + date + '日</div><br><div style = "font-size: large;"><b>' + y_axis + '件</b></div></div>';
                        }
                    }
                    data.addRows([[x_axis, y_axis, tooltip]]);
                }
                // Set chart options
                var max_xAxis = new Date($("#to").val());
                max_xAxis.setDate(max_xAxis.getDate() + 3);
                var min_xAxis = new Date($("#from").val());
                min_xAxis.setDate(min_xAxis.getDate() - 3);

                var options = {
                    title: '全体',
                    titleTextStyle: {fontSize: 18},
                    legend: {textStyle: {fontSize: 13}},
                    explorer: {
                        actions: ['dragToZoom', 'rightClickToReset'],
                        axis: 'horizontal',
                        keepInBounds: true,
                        zoomDelta: 0.5
                    },
                    backgroundColor: '#D5D5D5',
                    bar: {
                        groupWidth: "100%"
                    },
                    tooltip: {
                        isHtml: true
                    },
                    hAxis: {
                        baseline: min_xAxis,
                        baselineColor: '#CCC',
                        textStyle: {
                            fontSize: 13
                        },
                        slantedText: true,
                        format: 'M月d日',
                        viewWindowMode: 'pretty',
                        viewWindow: {
                            max: max_xAxis,
                            min: min_xAxis
                        },
                        gridlines: {
                            count: 20,
                            units: {
                                years: {format: ["yy/mm"]},
                                months: {format: ["mm/dd"]},
                                days: {format: ["mm/dd"]}
                            }
                        }
                    },
                    pointSize: 10
                };

                var options1 = {
                    title: '全体',
                    titleTextStyle: {fontSize: 18},
                    legend: {textStyle: {fontSize: 13}},
                    explorer: {
                        actions: ['dragToZoom', 'rightClickToReset'],
                        axis: 'horizontal',
                        keepInBounds: true,
                        zoomDelta: 0.5
                    },
                    backgroundColor: '#D5D5D5',
                    tooltip: {
                        isHtml: true
                    },
                    hAxis: {
                        baseline: min_xAxis,
                        baselineColor: '#CCC',
                        textStyle: {
                            fontSize: 13
                        },
                        slantedText: true,
                        format: 'M月d日',
                        viewWindowMode: 'pretty',
                        viewWindow: {
                            max: max_xAxis,
                            min: min_xAxis
                        },
                        gridlines: {
                            count: 20,
                            units: {
                                years: {format: ["yy/mm"]},
                                months: {format: ["mm/dd"]},
                                days: {format: ["mm/dd"]}
                            }
                        }
                    },
                    pointSize: 10
                };


                var chart_div = 'chart_div_' + opt;
                var chart_div1 = 'chart_div_' + opt + '_0';

                // Instantiate and draw our chart, passing in some options.
                if (opt <= 3) {
                    var chart = new google.visualization.ColumnChart(document.getElementById(chart_div));
                    var chart1 = new google.visualization.ColumnChart(document.getElementById(chart_div1));
                } else {
                    var chart = new google.visualization.LineChart(document.getElementById(chart_div));
                    var chart1 = new google.visualization.LineChart(document.getElementById(chart_div1));
                }

                if ((new Date($("#to").val()) - new Date($("#from").val())) > 60 * 86400 * 1000)
                {
                    $('#' + chart_div).show();
                    chart.draw(data, options);
                    $('#' + chart_div1).show();
                    chart1.draw(data, options);
                } else {
                    $('#' + chart_div).show();
                    chart.draw(data, options1);
                    $('#' + chart_div1).show();
                    chart1.draw(data, options);
                }

            }
        }
    }

    //time chart
    var data_chart;

    var from = formatDate(new Date($("#from").val()));
    var to = formatDate(new Date($("#to").val()));

    var formData = {
        city: city,
        cat_item: cat_item,
        condition: condition,
        seller: seller,
        from: from,
        to: to
    };

    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
        }
    });

    $.ajax({
        url: "/item/?md=get_analysis_chart_data_by_time",
        type: 'POST',
        data: formData,
        dataType: "json",
        async: false,
        success: function (data) {
            data_chart = data;
        }
    });
    
    if (data_chart) {
        for (var j = 0; j < data_chart.length; j++) {
            var from = data_chart[j].from;
            var to = data_chart[j].to;
            var opt = data_chart[j].opt;
            var result = data_chart[j].result;

            var range = (new Date(to) - new Date(from));

            if (!result) {
                var error = '<div class="alert alert-danger"></div>';
                $('#error').html(error);
            } else {
                // create chart
                var data = new google.visualization.DataTable();

                data.addColumn('date', 'Date');
                if (opt == 4 || opt == 5) {
                    data.addColumn('number', '価格');
                } else {
                    data.addColumn('number', '件数');
                }
                data.addColumn({type: 'string', role: 'tooltip', p: {html: true}}, 'Status');

                if (result.length > 0 && opt < 4) {
                    if (range > 730 * 86400 * 1000) {
                        var date = new Date(result[0].x_axis).getDate() + 30;
                        var month = new Date(result[0].x_axis).getMonth();
                        var year = new Date(result[0].x_axis).getFullYear();

                        var x_axis = new Date(year, month, date);
                        var y_axis = parseInt(0);
                        data.addRows([[x_axis, y_axis, '']]);
                    } else if (range > 365 * 86400 * 1000) {
                        var date = new Date(result[0].x_axis).getDate() + 14;
                        var month = new Date(result[0].x_axis).getMonth();
                        var year = new Date(result[0].x_axis).getFullYear();

                        var x_axis = new Date(year, month, date);
                        var y_axis = parseInt(0);
                        data.addRows([[x_axis, y_axis, '']]);
                    } else if (range > 180 * 86400 * 1000) {
                        var date = new Date(result[0].x_axis).getDate() + 7;
                        var month = new Date(result[0].x_axis).getMonth();
                        var year = new Date(result[0].x_axis).getFullYear();

                        var x_axis = new Date(year, month, date);
                        var y_axis = parseInt(0);
                        data.addRows([[x_axis, y_axis, '']]);
                    } else if (range > 60 * 86400 * 1000) {
                        var date = new Date(result[0].x_axis).getDate() + 3;
                        var month = new Date(result[0].x_axis).getMonth();
                        var year = new Date(result[0].x_axis).getFullYear();

                        var x_axis = new Date(year, month, date);
                        var y_axis = parseInt(0);
                        data.addRows([[x_axis, y_axis, '']]);
                    } else {
                        var date = new Date(result[0].x_axis).getDate() + 1;
                        var month = new Date(result[0].x_axis).getMonth();
                        var year = new Date(result[0].x_axis).getFullYear();

                        var x_axis = new Date(year, month, date);
                        var y_axis = parseInt(0);
                        data.addRows([[x_axis, y_axis, '']]);
                    }
                }

                for (var i = 0; i < result.length; i++) {
                    var date = new Date(result[i].x_axis).getDate();
                    var month = new Date(result[i].x_axis).getMonth();
                    var year = new Date(result[i].x_axis).getFullYear();

                    var x_axis = new Date(year, month, date);
                    var y_axis = parseInt(result[i].y_axis);

                    if (opt == 4 || opt == 5) { //if opt = 4 || opt = 5
                        if (range > 365 * 86400 * 1000) {
                            var d = new Date(result[i].x_axis);

                            var month = d.getMonth() + 1;
                            var year = d.getFullYear();

                            var tooltip = '<div style = "width: 150px; height: 70px; padding: 15px 20px;">'
                                    + '<div style = "font-size: larger;">'
                                    + year + '年' + month + '月</div><br>'
                                    + '<div style = "font-size: large;"><b>' + y_axis + '万円</b></div></div>';

                        } else if (range > 180 * 86400 * 1000) {
                            var d = new Date(result[i].x_axis);

                            d.setDate(d.getDate() - 7);
                            d = (d > new Date(from)) ? d : new Date(from);

                            var date_start = d.getDate();
                            var month_start = d.getMonth() + 1;

                            d.setDate(d.getDate() + 13);
                            d = (d < new Date(to)) ? d : new Date(to);

                            var date_end = d.getDate();
                            var month_end = d.getMonth() + 1;

                            var tooltip = '<div style = "width: 150px; height: 70px; padding: 15px 20px;">'
                                    + '<div style = "font-size: larger;">'
                                    + month_start + '月' + date_start + '日 - ' + month_end + '月' + date_end + '日</div><br>'
                                    + '<div style = "font-size: large;"><b>' + y_axis + '万円</b></div></div>';

                        } else if (range > 30 * 86400 * 1000) {
                            var d = new Date(result[i].x_axis);

                            d.setDate(d.getDate() - 3);
                            d = (d > new Date(from)) ? d : new Date(from);

                            var date_start = d.getDate();
                            var month_start = d.getMonth() + 1;

                            d.setDate(d.getDate() + 6);
                            d = (d < new Date(to)) ? d : new Date(to);

                            var date_end = d.getDate();
                            var month_end = d.getMonth() + 1;

                            var tooltip = '<div style = "width: 150px; height: 70px; padding: 15px 20px;">'
                                    + '<div style = "font-size: larger;">'
                                    + month_start + '月' + date_start + '日 - ' + month_end + '月' + date_end + '日</div><br>'
                                    + '<div style = "font-size: large;"><b>' + y_axis + '万円</b></div></div>';
                        } else {
                            month = month + 1;
                            var tooltip = '<div style = "width: 150px; height: 70px; padding: 15px 20px;">'
                                    + '<div style = "font-size: larger;">'
                                    + month + '月' + date + '日</div><br><b>' + y_axis + '万円</b></div></div>';
                        }

                    } else { //if opt = 1 || opt = 2 || opt = 3
                        if (range > 730 * 86400 * 1000) {
                            var d = new Date(result[i].x_axis);

                            var month = d.getMonth() + 1;
                            var year = d.getFullYear();

                            var tooltip = '<div style = "width: 150px; height: 70px; padding: 15px 20px;">'
                                    + '<div style = "font-size: larger;">'
                                    + year + '年' + month + '月</div><br>'
                                    + '<div style = "font-size: large;"><b>' + y_axis + '件</b></div></div>';

                        } else if (range > 365 * 86400 * 1000)
                        {
                            var d = new Date(result[i].x_axis);

                            d.setDate(d.getDate() - 7);
                            d = (d > new Date(from)) ? d : new Date(from);

                            var date_start = d.getDate();
                            var month_start = d.getMonth() + 1;

                            d.setDate(d.getDate() + 13);
                            d = (d < new Date(to)) ? d : new Date(to);

                            var date_end = d.getDate();
                            var month_end = d.getMonth() + 1;

                            var tooltip = '<div style = "width: 150px; height: 70px; padding: 15px 20px;">'
                                    + '<div style = "font-size: larger;">'
                                    + month_start + '月' + date_start + '日 - ' + month_end + '月' + date_end + '日</div><br>'
                                    + '<div style = "font-size: large;"><b>' + y_axis + '件</b></div></div>';

                        } else if (range > 180 * 86400 * 1000)
                        {
                            var d = new Date(result[i].x_axis);

                            d.setDate(d.getDate() - 3);
                            d = (d > new Date(from)) ? d : new Date(from);

                            var date_start = d.getDate();
                            var month_start = d.getMonth() + 1;

                            d.setDate(d.getDate() + 6);
                            d = (d < new Date(to)) ? d : new Date(to);

                            var date_end = d.getDate();
                            var month_end = d.getMonth() + 1;

                            var tooltip = '<div style = "width: 150px; height: 70px; padding: 15px 20px;">'
                                    + '<div style = "font-size: larger;">'
                                    + month_start + '月' + date_start + '日 - ' + month_end + '月' + date_end + '日</div><br>'
                                    + '<div style = "font-size: large;"><b>' + y_axis + '件</b></div></div>';

                        } else if (range > 60 * 86400 * 1000)
                        {
                            var d = new Date(result[i].x_axis);

                            d.setDate(d.getDate() - 1);
                            d = (d > new Date(from)) ? d : new Date(from);

                            var date_start = d.getDate();
                            var month_start = d.getMonth() + 1;

                            d.setDate(d.getDate() + 2);
                            d = (d < new Date(to)) ? d : new Date(to);

                            var date_end = d.getDate();
                            var month_end = d.getMonth() + 1;

                            var tooltip = '<div style = "width: 150px; height: 70px; padding: 15px 20px;">'
                                    + '<div style = "font-size: larger;">'
                                    + month_start + '月' + date_start + '日 - ' + month_end + '月' + date_end + '日</div><br>'
                                    + '<div style = "font-size: large;"><b>' + y_axis + '件</b></div></div>';

                        } else {
                            month += 1;
                            var tooltip = '<div style = "width: 150px; height: 70px; padding: 15px 20px;">'
                                    + '<div style = "font-size: larger;">'
                                    + month + '月' + date + '日</div><br><div style = "font-size: large;"><b>' + y_axis + '件</b></div></div>';
                        }
                    }
                    data.addRows([[x_axis, y_axis, tooltip]]);
                }
                // Set chart options
                var max_xAxis = new Date(to);
                max_xAxis.setDate(max_xAxis.getDate() + 3);
                var min_xAxis = new Date(from);
                min_xAxis.setDate(min_xAxis.getDate() - 3);

                var date_diff = Math.abs(new Date(from) - new Date(to)) / 86400 / 1000;
                var title = from + ' ~ ' + to + ' (' + date_diff + ' 日)';

                var options = {
                    title: title,
                    titleTextStyle: {fontSize: 18},
                    legend: {textStyle: {fontSize: 13}},
                    explorer: {
                        actions: ['dragToZoom', 'rightClickToReset'],
                        axis: 'horizontal',
                        keepInBounds: true,
                        zoomDelta: 0.5
                    },
                    backgroundColor: '#D5D5D5',
                    bar: {
                        groupWidth: "100%"
                    },
                    tooltip: {
                        isHtml: true
                    },
                    hAxis: {
                        baseline: min_xAxis,
                        baselineColor: '#CCC',
                        textStyle: {
                            fontSize: 13
                        },
                        slantedText: true,
                        format: 'M月d日',
                        viewWindowMode: 'pretty',
                        viewWindow: {
                            max: max_xAxis,
                            min: min_xAxis
                        },
                        gridlines: {
                            count: 20,
                            units: {
                                years: {format: ["yy/mm"]},
                                months: {format: ["mm/dd"]},
                                days: {format: ["mm/dd"]}
                            }
                        }
                    },
                    pointSize: 10
                };

                var options1 = {
                    title: title,
                    titleTextStyle: {fontSize: 18},
                    legend: {textStyle: {fontSize: 13}},
                    explorer: {
                        actions: ['dragToZoom', 'rightClickToReset'],
                        axis: 'horizontal',
                        keepInBounds: true,
                        zoomDelta: 0.5
                    },
                    backgroundColor: '#D5D5D5',
                    tooltip: {
                        isHtml: true
                    },
                    hAxis: {
                        baseline: min_xAxis,
                        baselineColor: '#CCC',
                        textStyle: {
                            fontSize: 13
                        },
                        slantedText: true,
                        format: 'M月d日',
                        viewWindowMode: 'pretty',
                        viewWindow: {
                            max: max_xAxis,
                            min: min_xAxis
                        },
                        gridlines: {
                            count: 20,
                            units: {
                                years: {format: ["yy/mm"]},
                                months: {format: ["mm/dd"]},
                                days: {format: ["mm/dd"]}
                            }
                        }
                    },
                    pointSize: 10
                };

                var index = 0;
                
                var from_day = new Date($('#from').val());
                var to_day = new Date($('#to').val());
                var range = Math.abs(from_day - to_day) / 3;
                    
                var from_day_1 = new Date($('#from').val());
                var from_day_2 = new Date($('#from').val());
                from_day_2.setDate(from_day_2.getDate() + range / 86400 / 1000 + 1);
                var from_day_3 = new Date($('#from').val());
                from_day_3.setDate(from_day_3.getDate() + 2 * range / 86400 / 1000 + 1);

                if (formatDate(new Date(from)) == formatDate(from_day_1)) {
                    index = 1;
                }
                if (formatDate(new Date(from)) == formatDate(from_day_2)) {
                    index = 2;
                }
                if (formatDate(new Date(from)) == formatDate(from_day_3)) {
                    index = 3;
                }
              
                var chart_div = 'chart_div_' + opt + '_' + index;

                // Instantiate and draw our chart, passing in some options.
                if (opt <= 3) {
                    var chart = new google.visualization.ColumnChart(document.getElementById(chart_div));
                } else {
                    var chart = new google.visualization.LineChart(document.getElementById(chart_div));
                }

                if ((new Date(to) - new Date(from)) > 60 * 86400 * 1000)
                {
                    $('#chart_div_' + opt + '_' + index).show();
                    chart.draw(data, options);
                } else {
                    $('#chart_div_' + opt + '_' + index).show();
                    chart.draw(data, options1);
                }
            }
        }
    }

    //area chart
    var data_chart;

    var from = formatDate(new Date($("#from").val()));
    var to = formatDate(new Date($("#to").val())) + ' 23:59:59';

    var formData = {
        city: city,
        cat_item: cat_item,
        condition: condition,
        seller: seller,
        from: from,
        to: to
    };

    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
        }
    });

    $.ajax({
        url: "/item/?md=get_analysis_chart_data",
        type: 'POST',
        data: formData,
        dataType: "json",
        async: false,
        success: function (data) {
            data_chart = data;
        }
    });

    if (data_chart) {
        for (var j = 0; j < data_chart.length; j++) {
            var in_city = data_chart[j].city;
            var opt = data_chart[j].opt;
            var result = data_chart[j].result;

            if (!result) {
                var error = '<div class="alert alert-danger"></div>';
                $('#error').html(error);
            } else {
                // create chart
                var data = new google.visualization.DataTable();

                data.addColumn('date', 'Date');
                if (opt == 4 || opt == 5) {
                    data.addColumn('number', '価格');
                } else {
                    data.addColumn('number', '件数');
                }
                data.addColumn({type: 'string', role: 'tooltip', p: {html: true}}, 'Status');

                if (result.length > 0 && opt < 4) {
                    if ((new Date($("#to").val()) - new Date($("#from").val())) > 730 * 86400 * 1000) {
                        var date = new Date(result[0].x_axis).getDate() + 30;
                        var month = new Date(result[0].x_axis).getMonth();
                        var year = new Date(result[0].x_axis).getFullYear();

                        var x_axis = new Date(year, month, date);
                        var y_axis = parseInt(0);
                        data.addRows([[x_axis, y_axis, '']]);
                    } else if ((new Date($("#to").val()) - new Date($("#from").val())) > 365 * 86400 * 1000) {
                        var date = new Date(result[0].x_axis).getDate() + 14;
                        var month = new Date(result[0].x_axis).getMonth();
                        var year = new Date(result[0].x_axis).getFullYear();

                        var x_axis = new Date(year, month, date);
                        var y_axis = parseInt(0);
                        data.addRows([[x_axis, y_axis, '']]);
                    } else if ((new Date($("#to").val()) - new Date($("#from").val())) > 180 * 86400 * 1000) {
                        var date = new Date(result[0].x_axis).getDate() + 7;
                        var month = new Date(result[0].x_axis).getMonth();
                        var year = new Date(result[0].x_axis).getFullYear();

                        var x_axis = new Date(year, month, date);
                        var y_axis = parseInt(0);
                        data.addRows([[x_axis, y_axis, '']]);
                    } else if ((new Date($("#to").val()) - new Date($("#from").val())) > 60 * 86400 * 1000) {
                        var date = new Date(result[0].x_axis).getDate() + 3;
                        var month = new Date(result[0].x_axis).getMonth();
                        var year = new Date(result[0].x_axis).getFullYear();

                        var x_axis = new Date(year, month, date);
                        var y_axis = parseInt(0);
                        data.addRows([[x_axis, y_axis, '']]);
                    } else {
                        var date = new Date(result[0].x_axis).getDate() + 1;
                        var month = new Date(result[0].x_axis).getMonth();
                        var year = new Date(result[0].x_axis).getFullYear();

                        var x_axis = new Date(year, month, date);
                        var y_axis = parseInt(0);
                        data.addRows([[x_axis, y_axis, '']]);
                    }
                }

                for (var i = 0; i < result.length; i++) {
                    var date = new Date(result[i].x_axis).getDate();
                    var month = new Date(result[i].x_axis).getMonth();
                    var year = new Date(result[i].x_axis).getFullYear();

                    var x_axis = new Date(year, month, date);
                    var y_axis = parseInt(result[i].y_axis);

                    if (opt == 4 || opt == 5) { //if opt = 4 || opt = 5
                        if ((new Date($("#to").val()) - new Date($("#from").val())) > 365 * 86400 * 1000) {
                            var d = new Date(result[i].x_axis);

                            var month = d.getMonth() + 1;
                            var year = d.getFullYear();

                            var tooltip = '<div style = "width: 150px; height: 70px; padding: 15px 15px;">'
                                    + '<div style = "font-size: larger;">'
                                    + year + '年' + month + '月</div><br>'
                                    + '<div style = "font-size: large;"><b>' + y_axis + '万円</b></div></div>';

                        } else if ((new Date($("#to").val()) - new Date($("#from").val())) > 180 * 86400 * 1000) {
                            var d = new Date(result[i].x_axis);

                            d.setDate(d.getDate() - 7);
                            d = (d > new Date($("#from").val())) ? d : new Date($("#from").val());

                            var date_start = d.getDate();
                            var month_start = d.getMonth() + 1;

                            d.setDate(d.getDate() + 13);
                            d = (d < new Date($("#to").val())) ? d : new Date($("#to").val());

                            var date_end = d.getDate();
                            var month_end = d.getMonth() + 1;

                            var tooltip = '<div style = "width: 150px; height: 70px; padding: 15px 15px;">'
                                    + '<div style = "font-size: larger;">'
                                    + month_start + '月' + date_start + '日 - ' + month_end + '月' + date_end + '日</div><br>'
                                    + '<div style = "font-size: large;"><b>' + y_axis + '万円</b></div></div>';

                        } else if ((new Date($("#to").val()) - new Date($("#from").val())) > 30 * 86400 * 1000) {
                            var d = new Date(result[i].x_axis);

                            d.setDate(d.getDate() - 3);
                            d = (d > new Date($("#from").val())) ? d : new Date($("#from").val());

                            var date_start = d.getDate();
                            var month_start = d.getMonth() + 1;

                            d.setDate(d.getDate() + 6);
                            d = (d < new Date($("#to").val())) ? d : new Date($("#to").val());

                            var date_end = d.getDate();
                            var month_end = d.getMonth() + 1;

                            var tooltip = '<div style = "width: 150px; height: 70px; padding: 15px 15px;">'
                                    + '<div style = "font-size: larger;">'
                                    + month_start + '月' + date_start + '日 - ' + month_end + '月' + date_end + '日</div><br>'
                                    + '<div style = "font-size: large;"><b>' + y_axis + '万円</b></div></div>';
                        } else {
                            month = month + 1;
                            var tooltip = '<div style = "width: 150px; height: 70px; padding: 15px 15px;">'
                                    + '<div style = "font-size: larger;">'
                                    + month + '月' + date + '日</div><br><b>' + y_axis + '万円</b></div></div>';
                        }

                    } else { //if opt = 1 || opt = 2 || opt = 3
                        if ((new Date($("#to").val()) - new Date($("#from").val())) > 730 * 86400 * 1000) {
                            var d = new Date(result[i].x_axis);

                            var month = d.getMonth() + 1;
                            var year = d.getFullYear();

                            var tooltip = '<div style = "width: 150px; height: 70px; padding: 15px 15px;">'
                                    + '<div style = "font-size: larger;">'
                                    + year + '年' + month + '月</div><br>'
                                    + '<div style = "font-size: large;"><b>' + y_axis + '件</b></div></div>';

                        } else if ((new Date($("#to").val()) - new Date($("#from").val())) > 365 * 86400 * 1000)
                        {
                            var d = new Date(result[i].x_axis);

                            d.setDate(d.getDate() - 7);
                            d = (d > new Date($("#from").val())) ? d : new Date($("#from").val());

                            var date_start = d.getDate();
                            var month_start = d.getMonth() + 1;

                            d.setDate(d.getDate() + 13);
                            d = (d < new Date($("#to").val())) ? d : new Date($("#to").val());

                            var date_end = d.getDate();
                            var month_end = d.getMonth() + 1;

                            var tooltip = '<div style = "width: 150px; height: 70px; padding: 15px 15px;">'
                                    + '<div style = "font-size: larger;">'
                                    + month_start + '月' + date_start + '日 - ' + month_end + '月' + date_end + '日</div><br>'
                                    + '<div style = "font-size: large;"><b>' + y_axis + '件</b></div></div>';

                        } else if ((new Date($("#to").val()) - new Date($("#from").val())) > 180 * 86400 * 1000)
                        {
                            var d = new Date(result[i].x_axis);

                            d.setDate(d.getDate() - 3);
                            d = (d > new Date($("#from").val())) ? d : new Date($("#from").val());

                            var date_start = d.getDate();
                            var month_start = d.getMonth() + 1;

                            d.setDate(d.getDate() + 6);
                            d = (d < new Date($("#to").val())) ? d : new Date($("#to").val());

                            var date_end = d.getDate();
                            var month_end = d.getMonth() + 1;

                            var tooltip = '<div style = "width: 150px; height: 70px; padding: 15px 15px;">'
                                    + '<div style = "font-size: larger;">'
                                    + month_start + '月' + date_start + '日 - ' + month_end + '月' + date_end + '日</div><br>'
                                    + '<div style = "font-size: large;"><b>' + y_axis + '件</b></div></div>';

                        } else if ((new Date($("#to").val()) - new Date($("#from").val())) > 60 * 86400 * 1000)
                        {
                            var d = new Date(result[i].x_axis);

                            d.setDate(d.getDate() - 1);
                            d = (d > new Date($("#from").val())) ? d : new Date($("#from").val());

                            var date_start = d.getDate();
                            var month_start = d.getMonth() + 1;

                            d.setDate(d.getDate() + 2);
                            d = (d < new Date($("#to").val())) ? d : new Date($("#to").val());

                            var date_end = d.getDate();
                            var month_end = d.getMonth() + 1;

                            var tooltip = '<div style = "width: 150px; height: 70px; padding: 15px 15px;">'
                                    + '<div style = "font-size: larger;">'
                                    + month_start + '月' + date_start + '日 - ' + month_end + '月' + date_end + '日</div><br>'
                                    + '<div style = "font-size: large;"><b>' + y_axis + '件</b></div></div>';

                        } else {
                            month += 1;
                            var tooltip = '<div style = "width: 150px; height: 70px; padding: 15px 15px;">'
                                    + '<div style = "font-size: larger;">'
                                    + month + '月' + date + '日</div><br><div style = "font-size: large;"><b>' + y_axis + '件</b></div></div>';
                        }
                    }
                    data.addRows([[x_axis, y_axis, tooltip]]);
                }
                // Set chart options
                var max_xAxis = new Date($("#to").val());
                max_xAxis.setDate(max_xAxis.getDate() + 3);
                var min_xAxis = new Date($("#from").val());
                min_xAxis.setDate(min_xAxis.getDate() - 3);


                if (in_city == "40136") {
                    var title = "福岡市城南区";
                }
                if (in_city == "40134") {
                    var title = "福岡市南区";
                }
                if (in_city == "40135") {
                    var title = "福岡市西区";
                }
                if (in_city == "40131") {
                    var title = "福岡市東区";
                }
                if (in_city == "40133") {
                    var title = "福岡市中央区";
                }
                if (in_city == "40132") {
                    var title = "福岡市博多区";
                }
                if (in_city == "40137") {
                    var title = "福岡市早良区";
                }
                if (in_city == "40223") {
                    var title = "古賀市";
                }
                if (in_city == "40342") {
                    var title = "糟屋郡篠栗町";
                }
                if (in_city == "40343") {
                    var title = "糟屋郡志免町";
                }
                if (in_city == "40218") {
                    var title = "春日市";
                }
                if (in_city == "40224") {
                    var title = "福津市";
                }
                if (in_city == "40344") {
                    var title = "糟屋郡須惠町";
                }
                if (in_city == "40219") {
                    var title = "大野城市";
                }
                if (in_city == "40348") {
                    var title = "糟屋郡久山町";
                }
                if (in_city == "40305") {
                    var title = "筑紫郡那珂川町";
                }
                if (in_city == "40230") {
                    var title = "糸島市";
                }
                if (in_city == "40345") {
                    var title = "糟屋郡新宮町";
                }
                if (in_city == "40203") {
                    var title = "久留米市";
                }
                if (in_city == "40349") {
                    var title = "糟屋郡粕屋町";
                }
                if (in_city == "40341") {
                    var title = "糟屋郡宇美町";
                }
                if (in_city == "40221") {
                    var title = "太宰府市";
                }
                if (in_city == "40207") {
                    var title = "柳川市";
                }
                if (in_city == "40447") {
                    var title = "朝倉郡筑前町";
                }
                if (in_city == "41345") {
                    var title = "三養基郡上峰町";
                }
                if (in_city == "40503") {
                    var title = "三井郡大刀洗町";
                }
                if (in_city == "40216") {
                    var title = "小郡市";
                }
                if (in_city == "40647") {
                    var title = "築上郡築上町";
                }
                if (in_city == "40217") {
                    var title = "筑紫野市";
                }
                if (in_city == "41346") {
                    var title = "三養基郡みやき町";
                }
                if (in_city == "41203") {
                    var title = "鳥栖市";
                }
                if (in_city == "41341") {
                    var title = "三養基郡基山町";
                }


                var options = {
                    title: title,
                    titleTextStyle: {fontSize: 18},
                    legend: {textStyle: {fontSize: 13}},
                    explorer: {
                        actions: ['dragToZoom', 'rightClickToReset'],
                        axis: 'horizontal',
                        keepInBounds: true,
                        zoomDelta: 0.5
                    },
                    backgroundColor: '#D5D5D5',
                    bar: {
                        groupWidth: "100%"
                    },
                    tooltip: {
                        isHtml: true
                    },
                    hAxis: {
                        baseline: min_xAxis,
                        baselineColor: '#CCC',
                        textStyle: {
                            fontSize: 13
                        },
                        slantedText: true,
                        format: 'M月d日',
                        viewWindowMode: 'pretty',
                        viewWindow: {
                            max: max_xAxis,
                            min: min_xAxis
                        },
                        gridlines: {
                            count: 20,
                            units: {
                                years: {format: ["yy/mm"]},
                                months: {format: ["mm/dd"]},
                                days: {format: ["mm/dd"]}
                            }
                        }
                    },
                    pointSize: 10
                };

                var options1 = {
                    title: title,
                    titleTextStyle: {fontSize: 18},
                    legend: {textStyle: {fontSize: 13}},
                    explorer: {
                        actions: ['dragToZoom', 'rightClickToReset'],
                        axis: 'horizontal',
                        keepInBounds: true,
                        zoomDelta: 0.5
                    },
                    backgroundColor: '#D5D5D5',
                    tooltip: {
                        isHtml: true
                    },
                    hAxis: {
                        baseline: min_xAxis,
                        baselineColor: '#CCC',
                        textStyle: {
                            fontSize: 13
                        },
                        slantedText: true,
                        format: 'M月d日',
                        viewWindowMode: 'pretty',
                        viewWindow: {
                            max: max_xAxis,
                            min: min_xAxis
                        },
                        gridlines: {
                            count: 20,
                            units: {
                                years: {format: ["yy/mm"]},
                                months: {format: ["mm/dd"]},
                                days: {format: ["mm/dd"]}
                            }
                        }
                    },
                    pointSize: 10
                };

                var chart_div = 'chart_div_' + opt + '_' + in_city;

                // Instantiate and draw our chart, passing in some options.
                if (opt <= 3) {
                    var chart = new google.visualization.ColumnChart(document.getElementById(chart_div));
                } else {
                    var chart = new google.visualization.LineChart(document.getElementById(chart_div));
                }

                if ((new Date($("#to").val()) - new Date($("#from").val())) > 60 * 86400 * 1000)
                {
                    $('#chart_div_' + opt + '_' + in_city).show();
                    chart.draw(data, options);
                } else {
                    $('#chart_div_' + opt + '_' + in_city).show();
                    chart.draw(data, options1);
                }

            }
        }
    }
}
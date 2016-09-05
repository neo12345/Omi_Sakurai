$(document).ready(function () {

    resetPieChartData();

    $('#analysis_tbl').hide();
    $(".overlay").hide();

    $("#switch_chart_mode").click(function (e) {
        //e.preventDefault();
        if (document.getElementById('cb_chart_mode').checked) {
            $(".time").show();
            $(".area").hide();
            $("#chart_mode").html('エリア比較');
        } else {
            $(".time").hide();
            $(".area").show();
            $("#chart_mode").html('期間比較');
        }
    });

    $(".btn-aggregate").click(function (e) {
        e.preventDefault();
        $(".overlay").show();
        $('#error').html('');
        $('#chart_div').html('');

        $('#cb_chart_mode').prop('checked', false);
        $("#chart_mode").html('期間比較');

        $(".time").show();
        $(".area").show();

        setTimeout(function () {
            //google.charts.setOnLoadCallback(drawChart);
            resetPieChartData();
            resetAnalysisTable();

            var analysis = analysisGroupItem();
            insertAnalysisTable(analysis);
            insertAnalysisTableInTimeRange(analysis)

            drawPieChart();
            drawChartForEachCity();

            $(".overlay").fadeOut().delay(1500);
            $(".time").hide();
        }, 500);
        //$(".overlay").fadeOut().delay(1500);
    });

    $(".btn-time").click(function (e) {
        e.preventDefault();

        var monthsAgo = parseInt($(this).val());

        var now = new Date();

        var year = now.getFullYear();
        var month = now.getMonth() + 1;
        month = (month < 10) ? '0' + month : month;
        var date = now.getDate();
        var to = year + '/' + month + '/' + date;
        $("#to").val(to);

        now.setMonth(now.getMonth() - monthsAgo);

        var year = now.getFullYear();
        var month = now.getMonth() + 1;
        month = (month < 10) ? '0' + month : month;
        var date = now.getDate();
        var from = year + '/' + month + '/' + date;

        $("#from").val(from);

    });

    $(window).resize(function () {
        if ($('#chart_div').html() != '') {
            $(".time").show();
            $(".area").show();

            $("#toggle_time_area").val('0');
            $("#toggle_time_area").html('期間比較');

            setTimeout(function () {
                $(".overlay").show();

                //google.charts.setOnLoadCallback(drawChart);
                resetPieChartData();
                resetAnalysisTable();

                var analysis = analysisGroupItem();
                insertAnalysisTable(analysis);
                insertAnalysisTableInTimeRange(analysis)

                drawPieChart();
                drawChartForEachCity();

                $(".overlay").fadeOut();
                $(".time").hide();
            }, 500);
        }
    });
});

function countItemRemaining(from) {
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
    var layout = new Array();
    $.each($("input[name='layout[]']:checked"), function () {
        layout.push($(this).val());
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
    if (!seller[0]) {
        seller = ["1", "2", "3", "4", "5", "6", "0"];
    }

    var formData = {
        city: city,
        cat_item: cat_item,
        condition: condition,
        layout: layout,
        seller: seller,
        from: from
    };

    var remaining;

    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
        }
    });

    $.ajax({
        url: "/item/?md=count_item_remaining",
        type: 'POST',
        data: formData,
        dataType: "json",
        async: false,
        success: function (data) {
            remaining = data;
        }
    });

    return remaining;
}

function analysisGroupItem() {
    //------------------------------------		
    //search in radius
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
    var layout = new Array();
    $.each($("input[name='layout[]']:checked"), function () {
        layout.push($(this).val());
    });
    var seller = new Array();
    $.each($("input[name='seller[]']:checked"), function () {
        seller.push($(this).val());
    });


    var formData = {
        city: city,
        cat_item: cat_item,
        condition: condition,
        layout: layout,
        seller: seller,
        from: $("#from").val(),
        to: $("#to").val()
    };
    var result;

    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
        }
    });

    $.ajax({
        url: "/item/?md=get_info_group_item_on_demand",
        type: 'POST',
        data: formData,
        dataType: "json",
        async: false,
        success: function (data) {
            result = data;
        }
    });
    return result;
}

//format date to 'yyyy-mm-dd'
function formatDate(day) {
    var month = '' + (day.getMonth() + 1);
    var date = '' + day.getDate();
    var year = day.getFullYear();
    if (month.length < 2) {
        month = '0' + month;
    }
    if (date.length < 2) {
        date = '0' + date;
    }
    return year + '-' + month + '-' + date;
}
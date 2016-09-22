function drawPieChart() {

    //clear old chart
    $('.piechart_3d').html('');
   
    // draw market rate piechart
    var dont_draw = 1;
    $('#piechart_3d').hide();
    $('#piechart_time_3d').hide();
    
    for (var i = 0; i < window.market_rate.length; i++) {
        if (window.market_rate[i][1] != 0) {
            dont_draw = 0;
            break;
        }
    }
    if (!dont_draw) {
        $('#piechart_3d').show();
        $('#piechart_time_3d').show();
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Seller');
        data.addColumn('number', '販売シェア率');
        data.addColumn({type: 'string', label: 'Tooltip Chart', role: 'tooltip', 'p': {'html': true}});

        var sum = 0;
        for (var i = 0; i < window.market_rate.length; i++) {
            sum = sum + window.market_rate[i][1];
        }

        for (var i = 0; i < window.market_rate.length; i++) {
            var rate = (window.market_rate[i][1] / sum * 100).toFixed(1);
            data.addRows([[window.market_rate[i][0], window.market_rate[i][1],
                    '<div style="width: 110px; background-color: white; padding: 5px">' + window.market_rate[i][0] + '<br><b>' + window.market_rate[i][1] + '件 (' + rate + '%)</b></div>']]);
        }

        var options = {
            title: '全体 ' + sum + '件',
            backgroundColor: '#D5D5D5',
            titleTextStyle: {fontSize: 18},
            legend: {textStyle: {fontSize: 13}},
            is3D: true,
            colors: ['#3366cc', '#dc3912', '#ff9900', '#109618', '#990099', '#0099c6', '#dd4477'],
            sliceVisibilityThreshold: 0,
            chartArea: {left: 10, width: '90%'}
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
        var chart1 = new google.visualization.PieChart(document.getElementById('piechart_time_3d'));
        chart.draw(data, options);
        chart1.draw(data, options);
    }


    for (var m = 1; m <= 32; m++) {
        var market_rate_per_ward = null;
        var chart_div = null;
        var title = null;

        if (m == 1) {
            market_rate_per_ward = window.market_rate_jonan;
            chart_div = 'piechart_3d_' + m;
            title = '福岡市城南区';
        }
        if (m == 2) {
            market_rate_per_ward = window.market_rate_minami;
            chart_div = 'piechart_3d_' + m;
            title = '福岡市南区';
        }
        if (m == 3) {
            market_rate_per_ward = window.market_rate_nishi;
            chart_div = 'piechart_3d_' + m;
            title = '福岡市西区';
        }
        if (m == 4) {
            market_rate_per_ward = window.market_rate_higashi;
            chart_div = 'piechart_3d_' + m;
            title = '福岡市東区';
        }
        if (m == 5) {
            market_rate_per_ward = window.market_rate_chuo;
            chart_div = 'piechart_3d_' + m;
            title = '福岡市中央区';
        }
        if (m == 6) {
            market_rate_per_ward = window.market_rate_hakata;
            chart_div = 'piechart_3d_' + m;
            title = '福岡市博多区';
        }
        if (m == 7) {
            market_rate_per_ward = window.market_rate_sawara;
            chart_div = 'piechart_3d_' + m;
            title = '福岡市早良区';
        }
        if (m == 8) {
            market_rate_per_ward = window.market_rate_koga;
            chart_div = 'piechart_3d_' + m;
            title = '古賀市';
        }
        if (m == 9) {
            market_rate_per_ward = window.market_rate_sasaguri;
            chart_div = 'piechart_3d_' + m;
            title = '糟屋郡篠栗町';
        }
        if (m == 10) {
            market_rate_per_ward = window.market_rate_shime;
            chart_div = 'piechart_3d_' + m;
            title = '糟屋郡志免町';
        }
        if (m == 11) {
            market_rate_per_ward = window.market_rate_kasuga;
            chart_div = 'piechart_3d_' + m;
            title = '春日市';
        }
        if (m == 12) {
            market_rate_per_ward = window.market_rate_fukutsu;
            chart_div = 'piechart_3d_' + m;
            title = '福津市';
        }
        if (m == 13) {
            market_rate_per_ward = window.market_rate_sue;
            chart_div = 'piechart_3d_' + m;
            title = '糟屋郡須惠町';
        }
        if (m == 14) {
            market_rate_per_ward = window.market_rate_ounojou;
            chart_div = 'piechart_3d_' + m;
            title = '大野城市';
        }
        if (m == 15) {
            market_rate_per_ward = window.market_rate_hisayama;
            chart_div = 'piechart_3d_' + m;
            title = '糟屋郡久山町';
        }
        if (m == 16) {
            market_rate_per_ward = window.market_rate_nakagawa;
            chart_div = 'piechart_3d_' + m;
            title = '筑紫郡那珂川町';
        }
        if (m == 17) {
            market_rate_per_ward = window.market_rate_itoshima;
            chart_div = 'piechart_3d_' + m;
            title = '糸島市';
        }
        if (m == 18) {
            market_rate_per_ward = window.market_rate_shingu;
            chart_div = 'piechart_3d_' + m;
            title = '糟屋郡新宮町';
        }
        if (m == 19) {
            market_rate_per_ward = window.market_rate_kurume;
            chart_div = 'piechart_3d_' + m;
            title = '久留米市';
        }
        if (m == 20) {
            market_rate_per_ward = window.market_rate_kasuya;
            chart_div = 'piechart_3d_' + m;
            title = '糟屋郡粕屋町';
        }
        if (m == 21) {
            market_rate_per_ward = window.market_rate_umimachi;
            chart_div = 'piechart_3d_' + m;
            title = '糟屋郡宇美町';
        }
        if (m == 22) {
            market_rate_per_ward = window.market_rate_dazaifu;
            chart_div = 'piechart_3d_' + m;
            title = '太宰府市';
        }
        if (m == 23) {
            market_rate_per_ward = window.market_rate_yanagawa;
            chart_div = 'piechart_3d_' + m;
            title = '柳川市';
        }
        if (m == 24) {
            market_rate_per_ward = window.market_rate_chikuzen;
            chart_div = 'piechart_3d_' + m;
            title = '朝倉郡筑前町';
        }
        if (m == 25) {
            market_rate_per_ward = window.market_rate_kamimine;
            chart_div = 'piechart_3d_' + m;
            title = '三養基郡上峰町';
        }
        if (m == 26) {
            market_rate_per_ward = window.market_rate_tachiarai;
            chart_div = 'piechart_3d_' + m;
            title = '三井郡大刀洗町';
        }
        if (m == 27) {
            market_rate_per_ward = window.market_rate_ogori;
            chart_div = 'piechart_3d_' + m;
            title = '小郡市';
        }
        if (m == 28) {
            market_rate_per_ward = window.market_rate_chikujou;
            chart_div = 'piechart_3d_' + m;
            title = '築上郡築上町';
        }
        if (m == 29) {
            market_rate_per_ward = window.market_rate_chikushino;
            chart_div = 'piechart_3d_' + m;
            title = '筑紫野市';
        }
        if (m == 30) {
            market_rate_per_ward = window.market_rate_miyaki;
            chart_div = 'piechart_3d_' + m;
            title = '三養基郡みやき町';
        }
        if (m == 31) {
            market_rate_per_ward = window.market_rate_tosu;
            chart_div = 'piechart_3d_' + m;
            title = '鳥栖市';
        }
        if (m == 32) {
            market_rate_per_ward = window.market_rate_kiyama;
            chart_div = 'piechart_3d_' + m;
            title = '三養基郡基山町';
        }

        var dont_draw = 1;
        $('#' + chart_div).hide();
        for (var i = 0; i < market_rate_per_ward.length; i++) {
            if (market_rate_per_ward[i][1] != 0) {
                dont_draw = 0;
                break;
            }
        }
        if (!dont_draw) {
            $('#' + chart_div).show();
            var data = null;
            data = new google.visualization.DataTable();
            data.addColumn('string', 'Seller');
            data.addColumn('number', '販売シェア率');
            data.addColumn({type: 'string', label: 'Tooltip Chart', role: 'tooltip', 'p': {'html': true}});

            var sum = 0;
            for (var i = 0; i < market_rate_per_ward.length; i++) {
                sum = sum + market_rate_per_ward[i][1];
            }

            for (var i = 0; i < market_rate_per_ward.length; i++) {
                var rate = (market_rate_per_ward[i][1] / sum * 100).toFixed(1);
                data.addRows([[market_rate_per_ward[i][0], market_rate_per_ward[i][1],
                        '<div style="width: 110px; background-color: white; padding: 5px">' + market_rate_per_ward[i][0] + '<br><b>' + market_rate_per_ward[i][1] + '件 (' + rate + '%)</b></div>']]);
            }

            var options = {
                title: title + ' ' + sum + '件',
                backgroundColor: '#D5D5D5',
                titleTextStyle: {fontSize: 18},
                legend: {textStyle: {fontSize: 13}},
                is3D: true,
                colors: ['#3366cc', '#dc3912', '#ff9900', '#109618', '#990099', '#0099c6', '#dd4477'],
                sliceVisibilityThreshold: 0,
                chartArea: {left: 10, width: '90%'}
            };

            var chart = null;
            chart = new google.visualization.PieChart(document.getElementById(chart_div));
            chart.draw(data, options);
        }
    }


    //time chart
    for (var m = 1; m <= 3; m++) {
        var market_rate_per_time_range = null;
        var chart_div = null;
        var title = null;

        if (m == 1) {
            market_rate_per_time_range = window.market_rate_time_in_range_1;
            chart_div = 'piechart_time_3d_' + m;

            var from = $('#from').val();
            var to = $('#to').val();

            var range = Math.abs(new Date(from) - new Date(to)) / 3;

            var from_day = null;
            var to_day = null;
            from_day = new Date(from);
            to_day = new Date(from_day);
            to_day.setDate(to_day.getDate() + range / 86400 / 1000);
        }
        if (m == 2) {
            market_rate_per_time_range = window.market_rate_time_in_range_2;
            chart_div = 'piechart_time_3d_' + m;

            var from = $('#from').val();
            var to = $('#to').val();

            var range = Math.abs(new Date(from) - new Date(to)) / 3;

            var from_day = null;
            var to_day = null;
            from_day = new Date(from);
            from_day.setDate(from_day.getDate() + range / 86400 / 1000 + 1);
            to_day = new Date(from_day);
            to_day.setDate(to_day.getDate() + range / 86400 / 1000);
        }
        if (m == 3) {
            market_rate_per_time_range = window.market_rate_time_in_range_3;
            chart_div = 'piechart_time_3d_' + m;

            var from = $('#from').val();
            var to = $('#to').val();

            var range = Math.abs(new Date(from) - new Date(to)) / 3;

            var from_day = null;
            var to_day = null;
            from_day = new Date(from);
            from_day.setDate(from_day.getDate() + 2 * range / 86400 / 1000 + 1);
            to_day = new Date(to);
        }

        if (from_day > new Date(to)) {
            from_day = new Date(to);
        }
        if (to_day > new Date(to)) {
            to_day = new Date(to);
        }
        
        from_day = formatDate(from_day);
        to_day = formatDate(to_day);
        var date_diff = Math.abs(new Date(from_day) - new Date(to_day)) / 86400 / 1000;
        title = from_day + ' ~ ' + to_day + ' (' + date_diff + ' 日)';

        var dont_draw = 1;
        $('#' + chart_div).hide();

        for (var i = 0; i < market_rate_per_time_range.length; i++) {
            if (market_rate_per_time_range[i][1] < 0) {
                market_rate_per_time_range[i][1] = 0;
            }
        }
        for (var i = 0; i < market_rate_per_time_range.length; i++) {
            if (market_rate_per_time_range[i][1] != 0) {
                dont_draw = 0;
                break;
            }
        }

        if (!dont_draw) {
            $('#' + chart_div).show();
            var data = null;
            data = new google.visualization.DataTable();
            data.addColumn('string', 'Seller');
            data.addColumn('number', '販売シェア率');
            data.addColumn({type: 'string', label: 'Tooltip Chart', role: 'tooltip', 'p': {'html': true}});

            var sum = 0;
            for (var i = 0; i < market_rate_per_time_range.length; i++) {
                sum = sum + market_rate_per_time_range[i][1];
            }

            for (var i = 0; i < market_rate_per_time_range.length; i++) {
                var rate = (market_rate_per_time_range[i][1] / sum * 100).toFixed(1);
                data.addRows([[market_rate_per_time_range[i][0], market_rate_per_time_range[i][1],
                        '<div style="width: 110px; background-color: white; padding: 5px">'
                                + market_rate_per_time_range[i][0] + '<br><b>'
                                + market_rate_per_time_range[i][1] + '件 (' + rate + '%)</b></div>']]);
            }

            var options = {
                title: title + ' ' + sum + '件',
                backgroundColor: '#D5D5D5',
                titleTextStyle: {fontSize: 18},
                legend: {textStyle: {fontSize: 13}},
                is3D: true,
                colors: ['#3366cc', '#dc3912', '#ff9900', '#109618', '#990099', '#0099c6', '#dd4477'],
                sliceVisibilityThreshold: 0,
                chartArea: {left: 10, width: '90%'}
            };

            var chart = null;
            chart = new google.visualization.PieChart(document.getElementById(chart_div));
            chart.draw(data, options);
        }
    }

    // draw soldout rate piechart
    var dont_draw = 1;
    $('#soldout_piechart_3d').hide();
    $('#soldout_piechart_time_3d').hide();
    for (var i = 0; i < window.soldout_rate.length; i++) {
        if (window.soldout_rate[i][1] != 0) {
            dont_draw = 0;
            break;
        }
    }
    if (!dont_draw) {
        $('#soldout_piechart_3d').show();
        $('#soldout_piechart_time_3d').show();
        var soldout_data = new google.visualization.DataTable();
        soldout_data.addColumn('string', 'Seller');
        soldout_data.addColumn('number', '販売シェア率');
        soldout_data.addColumn({type: 'string', label: 'Tooltip Chart', role: 'tooltip', 'p': {'html': true}});

        var sum = 0;
        for (var i = 0; i < window.soldout_rate.length; i++) {
            sum = sum + window.soldout_rate[i][1];
        }

        for (var i = 0; i < window.soldout_rate.length; i++) {
            var rate = (window.soldout_rate[i][1] / sum * 100).toFixed(1);
            soldout_data.addRows([[window.soldout_rate[i][0], window.soldout_rate[i][1],
                    '<div style="width: 110px; background-color: white; padding: 5px">' + window.soldout_rate[i][0] + '<br><b>' + window.soldout_rate[i][1] + '件 (' + rate + '%)</b></div>']]);
        }

        var options = {
            title: '全体 ' + sum + '件',
            backgroundColor: '#D5D5D5',
            titleTextStyle: {fontSize: 18},
            legend: {textStyle: {fontSize: 13}},
            is3D: true,
            colors: ['#3366cc', '#dc3912', '#ff9900', '#109618', '#990099', '#0099c6', '#dd4477'],
            sliceVisibilityThreshold: 0,
            chartArea: {left: 10, width: '90%'}
        };

        var soldout_chart = new google.visualization.PieChart(document.getElementById('soldout_piechart_3d'));
        var soldout_chart1 = new google.visualization.PieChart(document.getElementById('soldout_piechart_time_3d'));
        soldout_chart.draw(soldout_data, options);
        soldout_chart1.draw(soldout_data, options);
    }


    for (var m = 1; m <= 32; m++) {
        var soldout_rate_per_ward = null;
        var chart_div = null;
        var title = null;

        if (m == 1) {
            soldout_rate_per_ward = window.soldout_rate_jonan;
            chart_div = 'soldout_piechart_3d_' + m;
            title = '福岡市城南区';
        }
        if (m == 2) {
            soldout_rate_per_ward = window.soldout_rate_minami;
            chart_div = 'soldout_piechart_3d_' + m;
            title = '福岡市南区';
        }
        if (m == 3) {
            soldout_rate_per_ward = window.soldout_rate_nishi;
            chart_div = 'soldout_piechart_3d_' + m;
            title = '福岡市西区';
        }
        if (m == 4) {
            soldout_rate_per_ward = window.soldout_rate_higashi;
            chart_div = 'soldout_piechart_3d_' + m;
            title = '福岡市東区';
        }
        if (m == 5) {
            soldout_rate_per_ward = window.soldout_rate_chuo;
            chart_div = 'soldout_piechart_3d_' + m;
            title = '福岡市中央区';
        }
        if (m == 6) {
            soldout_rate_per_ward = window.soldout_rate_hakata;
            chart_div = 'soldout_piechart_3d_' + m;
            title = '福岡市博多区';
        }
        if (m == 7) {
            soldout_rate_per_ward = window.soldout_rate_sawara;
            chart_div = 'soldout_piechart_3d_' + m;
            title = '福岡市早良区';
        }
        if (m == 8) {
            soldout_rate_per_ward = window.soldout_rate_koga;
            chart_div = 'soldout_piechart_3d_' + m;
            title = '古賀市';
        }
        if (m == 9) {
            soldout_rate_per_ward = window.soldout_rate_sasaguri;
            chart_div = 'soldout_piechart_3d_' + m;
            title = '糟屋郡篠栗町';
        }
        if (m == 10) {
            soldout_rate_per_ward = window.soldout_rate_shime;
            chart_div = 'soldout_piechart_3d_' + m;
            title = '糟屋郡志免町';
        }
        if (m == 11) {
            soldout_rate_per_ward = window.soldout_rate_kasuga;
            chart_div = 'soldout_piechart_3d_' + m;
            title = '春日市';
        }
        if (m == 12) {
            soldout_rate_per_ward = window.soldout_rate_fukutsu;
            chart_div = 'soldout_piechart_3d_' + m;
            title = '福津市';
        }
        if (m == 13) {
            soldout_rate_per_ward = window.soldout_rate_sue;
            chart_div = 'soldout_piechart_3d_' + m;
            title = '糟屋郡須惠町';
        }
        if (m == 14) {
            soldout_rate_per_ward = window.soldout_rate_ounojou;
            chart_div = 'soldout_piechart_3d_' + m;
            title = '大野城市';
        }
        if (m == 15) {
            soldout_rate_per_ward = window.soldout_rate_hisayama;
            chart_div = 'soldout_piechart_3d_' + m;
            title = '糟屋郡久山町';
        }
        if (m == 16) {
            soldout_rate_per_ward = window.soldout_rate_nakagawa;
            chart_div = 'soldout_piechart_3d_' + m;
            title = '筑紫郡那珂川町';
        }
        if (m == 17) {
            soldout_rate_per_ward = window.soldout_rate_itoshima;
            chart_div = 'soldout_piechart_3d_' + m;
            title = '糸島市';
        }
        if (m == 18) {
            soldout_rate_per_ward = window.soldout_rate_shingu;
            chart_div = 'soldout_piechart_3d_' + m;
            title = '糟屋郡新宮町';
        }
        if (m == 19) {
            soldout_rate_per_ward = window.soldout_rate_kurume;
            chart_div = 'soldout_piechart_3d_' + m;
            title = '久留米市';
        }
        if (m == 20) {
            soldout_rate_per_ward = window.soldout_rate_kasuya;
            chart_div = 'soldout_piechart_3d_' + m;
            title = '糟屋郡粕屋町';
        }
        if (m == 21) {
            soldout_rate_per_ward = window.soldout_rate_umimachi;
            chart_div = 'soldout_piechart_3d_' + m;
            title = '糟屋郡宇美町';
        }
        if (m == 22) {
            soldout_rate_per_ward = window.soldout_rate_dazaifu;
            chart_div = 'soldout_piechart_3d_' + m;
            title = '太宰府市';
        }
        if (m == 23) {
            soldout_rate_per_ward = window.soldout_rate_yanagawa;
            chart_div = 'soldout_piechart_3d_' + m;
            title = '柳川市';
        }
        if (m == 24) {
            soldout_rate_per_ward = window.soldout_rate_chikuzen;
            chart_div = 'soldout_piechart_3d_' + m;
            title = '朝倉郡筑前町';
        }
        if (m == 25) {
            soldout_rate_per_ward = window.soldout_rate_kamimine;
            chart_div = 'soldout_piechart_3d_' + m;
            title = '三養基郡上峰町';
        }
        if (m == 26) {
            soldout_rate_per_ward = window.soldout_rate_tachiarai;
            chart_div = 'soldout_piechart_3d_' + m;
            title = '三井郡大刀洗町';
        }
        if (m == 27) {
            soldout_rate_per_ward = window.soldout_rate_ogori;
            chart_div = 'soldout_piechart_3d_' + m;
            title = '小郡市';
        }
        if (m == 28) {
            soldout_rate_per_ward = window.soldout_rate_chikujou;
            chart_div = 'soldout_piechart_3d_' + m;
            title = '築上郡築上町';
        }
        if (m == 29) {
            soldout_rate_per_ward = window.soldout_rate_chikushino;
            chart_div = 'soldout_piechart_3d_' + m;
            title = '筑紫野市';
        }
        if (m == 30) {
            soldout_rate_per_ward = window.soldout_rate_miyaki;
            chart_div = 'soldout_piechart_3d_' + m;
            title = '三養基郡みやき町';
        }
        if (m == 31) {
            soldout_rate_per_ward = window.soldout_rate_tosu;
            chart_div = 'soldout_piechart_3d_' + m;
            title = '鳥栖市';
        }
        if (m == 32) {
            soldout_rate_per_ward = window.soldout_rate_kiyama;
            chart_div = 'soldout_piechart_3d_' + m;
            title = '三養基郡基山町';
        }

        var dont_draw = 1;
        $('#' + chart_div).hide();
        for (var i = 0; i < soldout_rate_per_ward.length; i++) {
            if (soldout_rate_per_ward[i][1] != 0) {
                dont_draw = 0;
                break;
            }
        }
        if (!dont_draw) {
            $('#' + chart_div).show();
            var data = null;
            data = new google.visualization.DataTable();
            data.addColumn('string', 'Seller');
            data.addColumn('number', '販売シェア率');
            data.addColumn({type: 'string', label: 'Tooltip Chart', role: 'tooltip', 'p': {'html': true}});

            var sum = 0;
            for (var i = 0; i < soldout_rate_per_ward.length; i++) {
                sum = sum + soldout_rate_per_ward[i][1];
            }

            for (var i = 0; i < soldout_rate_per_ward.length; i++) {
                var rate = (soldout_rate_per_ward[i][1] / sum * 100).toFixed(1);
                data.addRows([[soldout_rate_per_ward[i][0], soldout_rate_per_ward[i][1],
                        '<div style="width: 110px; background-color: white; padding: 5px">' + soldout_rate_per_ward[i][0] + '<br><b>' + soldout_rate_per_ward[i][1] + '件 (' + rate + '%)</b></div>']]);
            }

            var options = {
                title: title + ' ' + sum + '件',
                backgroundColor: '#D5D5D5',
                titleTextStyle: {fontSize: 18},
                legend: {textStyle: {fontSize: 13}},
                is3D: true,
                colors: ['#3366cc', '#dc3912', '#ff9900', '#109618', '#990099', '#0099c6', '#dd4477'],
                sliceVisibilityThreshold: 0,
                chartArea: {left: 10, width: '90%'}
            };

            var chart = null;
            chart = new google.visualization.PieChart(document.getElementById(chart_div));
            chart.draw(data, options);
        }
    }

    //time chart
    for (var m = 1; m <= 3; m++) {
        var soldout_rate_per_time_range = null;
        var chart_div = null;
        var title = null;

        if (m == 1) {
            soldout_rate_per_time_range = window.soldout_rate_time_in_range_1;
            chart_div = 'soldout_piechart_time_3d_' + m;

            var from = $('#from').val();
            var to = $('#to').val();

            var range = Math.abs(new Date(from) - new Date(to)) / 3;

            var from_day = null;
            var to_day = null;
            from_day = new Date(from);
            to_day = new Date(from_day);
            to_day.setDate(to_day.getDate() + range / 86400 / 1000);
        }
        if (m == 2) {
            soldout_rate_per_time_range = window.soldout_rate_time_in_range_2;
            chart_div = 'soldout_piechart_time_3d_' + m;

            var from = $('#from').val();
            var to = $('#to').val();

            var range = Math.abs(new Date(from) - new Date(to)) / 3;

            var from_day = null
            var to_day = null
            from_day = new Date(from);
            from_day.setDate(from_day.getDate() + range / 86400 / 1000 + 1);
            to_day = new Date(from_day);
            to_day.setDate(to_day.getDate() + range / 86400 / 1000);
        }
        if (m == 3) {
            soldout_rate_per_time_range = window.soldout_rate_time_in_range_3;
            chart_div = 'soldout_piechart_time_3d_' + m;

            var from = $('#from').val();
            var to = $('#to').val();

            var range = Math.abs(new Date(from) - new Date(to)) / 3;

            var from_day = null;
            var to_day = null;
            from_day = new Date(from);
            from_day.setDate(from_day.getDate() + 2 * range / 86400 / 1000 + 1);
            to_day = new Date(to);
        }

        from_day = formatDate(from_day);
        to_day = formatDate(to_day);
        var date_diff = Math.abs(new Date(from_day) - new Date(to_day)) / 86400 / 1000;
        title = from_day + ' ~ ' + to_day + ' (' + date_diff + ' 日)';

        var dont_draw = 1;
        $('#' + chart_div).hide();

        for (var i = 0; i < soldout_rate_per_time_range.length; i++) {
            if (soldout_rate_per_time_range[i][1] != 0) {
                dont_draw = 0;
                break;
            }
        }

        if (!dont_draw) {
            $('#' + chart_div).show();
            var soldout_data = null;
            soldout_data = new google.visualization.DataTable();
            soldout_data.addColumn('string', 'Seller');
            soldout_data.addColumn('number', '販売シェア率');
            soldout_data.addColumn({type: 'string', label: 'Tooltip Chart', role: 'tooltip', 'p': {'html': true}});

            var sum = 0;
            for (var i = 0; i < soldout_rate_per_time_range.length; i++) {
                sum = sum + soldout_rate_per_time_range[i][1];
            }

            for (var i = 0; i < soldout_rate_per_time_range.length; i++) {
                var rate = (soldout_rate_per_time_range[i][1] / sum * 100).toFixed(1);
                soldout_data.addRows([[soldout_rate_per_time_range[i][0], soldout_rate_per_time_range[i][1],
                        '<div style="width: 110px; background-color: white; padding: 5px">'
                                + soldout_rate_per_time_range[i][0] + '<br><b>'
                                + soldout_rate_per_time_range[i][1] + '件 (' + rate + '%)</b></div>']]);
            }

            var options = {
                title: title + ' ' + sum + '件',
                backgroundColor: '#D5D5D5',
                titleTextStyle: {fontSize: 18},
                legend: {textStyle: {fontSize: 13}},
                is3D: true,
                colors: ['#3366cc', '#dc3912', '#ff9900', '#109618', '#990099', '#0099c6', '#dd4477'],
                sliceVisibilityThreshold: 0,
                chartArea: {left: 10, width: '90%'}
            };

            var soldout_chart = null;
            soldout_chart = new google.visualization.PieChart(document.getElementById(chart_div));
            soldout_chart.draw(soldout_data, options);
        }
    }
}

function resetPieChartData() {
    //for market rate chart
    window.market_rate = Array();
    window.market_rate_jonan = Array();
    window.market_rate_minami = Array();
    window.market_rate_nishi = Array();
    window.market_rate_higashi = Array();
    window.market_rate_chuo = Array();
    window.market_rate_hakata = Array();
    window.market_rate_sawara = Array();
    window.market_rate_koga = Array();
    window.market_rate_sasaguri = Array();
    window.market_rate_shime = Array();
    window.market_rate_kasuga = Array();
    window.market_rate_fukutsu = Array();
    window.market_rate_sue = Array();
    window.market_rate_ounojou = Array();
    window.market_rate_hisayama = Array();
    window.market_rate_nakagawa = Array();
    window.market_rate_itoshima = Array();
    window.market_rate_shingu = Array();
    window.market_rate_kurume = Array();
    window.market_rate_kasuya = Array();
    window.market_rate_umimachi = Array();
    window.market_rate_dazaifu = Array();
    window.market_rate_yanagawa = Array();
    window.market_rate_chikuzen = Array();
    window.market_rate_kamimine = Array();
    window.market_rate_tachiarai = Array();
    window.market_rate_ogori = Array();
    window.market_rate_chikujou = Array();
    window.market_rate_chikushino = Array();
    window.market_rate_miyaki = Array();
    window.market_rate_tosu = Array();
    window.market_rate_kiyama = Array();

    window.market_rate_time_in_range_1 = Array();
    window.market_rate_time_in_range_2 = Array();
    window.market_rate_time_in_range_3 = Array();

    //for soldout rate chart
    window.soldout_rate = Array();
    window.soldout_rate_jonan = Array();
    window.soldout_rate_minami = Array();
    window.soldout_rate_nishi = Array();
    window.soldout_rate_higashi = Array();
    window.soldout_rate_chuo = Array();
    window.soldout_rate_hakata = Array();
    window.soldout_rate_sawara = Array();
    window.soldout_rate_koga = Array();
    window.soldout_rate_sasaguri = Array();
    window.soldout_rate_shime = Array();
    window.soldout_rate_kasuga = Array();
    window.soldout_rate_fukutsu = Array();
    window.soldout_rate_sue = Array();
    window.soldout_rate_ounojou = Array();
    window.soldout_rate_hisayama = Array();
    window.soldout_rate_nakagawa = Array();
    window.soldout_rate_itoshima = Array();
    window.soldout_rate_shingu = Array();
    window.soldout_rate_kurume = Array();
    window.soldout_rate_kasuya = Array();
    window.soldout_rate_umimachi = Array();
    window.soldout_rate_dazaifu = Array();
    window.soldout_rate_yanagawa = Array();
    window.soldout_rate_chikuzen = Array();
    window.soldout_rate_kamimine = Array();
    window.soldout_rate_tachiarai = Array();
    window.soldout_rate_ogori = Array();
    window.soldout_rate_chikujou = Array();
    window.soldout_rate_chikushino = Array();
    window.soldout_rate_miyaki = Array();
    window.soldout_rate_tosu = Array();
    window.soldout_rate_kiyama = Array();

    window.soldout_rate_time_in_range_1 = Array();
    window.soldout_rate_time_in_range_2 = Array();
    window.soldout_rate_time_in_range_3 = Array();
}

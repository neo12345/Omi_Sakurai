<div class="overlay">
    <img id="img_loading" src="/_img/common/loading.gif"/>
</div>

<div class="right">
    <h2 class="PageTitle page01">物件管理</h2>
    <div class="tab_wrap clear">
        <ul class="tab">
            <li class="tab_off"><a href="/item/?md=list" title="物件一覧">物件一覧</a></li>
            <li class="tab_off"><a href="/item/?md=regist" title="物件登録">物件登録</a></li>
            <li class="tab_on"><a href="/item/?md=analysis" title="集計・解析">集計・解析</a></li>
            <li class="tab_off"><a>解析(物件)</a></li>

        </ul>
    </div>
    <div class="cnt_wrap">
        <div class="cnt_title clear w260"><h3>集計･解析</h3></div>
        <div class="tabl-analysis">
            <h4 class="mtit">地域</h4>
            <h5 class="stit">福岡市 <input type="checkbox" id="zone_1"></h5>
            <table class="form-analysis lst-check">
                <tr>
                    <?php
                    $count = 0;
                    for ($i = 0; $i < count($RS_city); $i++) {
                        if ($RS_city[$i]['cat_city_name'] == '福岡市') {
                            if ($count % 7 == 0 && $count != 0) {
                                echo '</tr><tr>';
                            }
                            $count++;
                            echo '<td class="checkbox"><input data-checkbox="zone_1" type="checkbox" value="' . $RS_city[$i]['city_cd'] . '" name="city[]"></td>';
                            echo '<td class="analysis-name">' . $RS_city[$i]['city_name'] . '(' . $RS_city[$i]['count_item'] . ')</td>';
                        }
                    }
                    ?>
                </tr>
            </table>

            <h5 class="stit">福岡近郊 <input type="checkbox" id="zone_2"></h5>
            <table class="form-analysis lst-check">
                <tr>
                    <?php
                    $count = 0;
                    for ($i = 0; $i < count($RS_city); $i++) {
                        if ($RS_city[$i]['cat_city_name'] == '福岡近郊') {
                            if ($count % 7 == 0 && $count != 0) {
                                echo '</tr><tr>';
                            }
                            $count++;
                            echo '<td class="checkbox"><input data-checkbox="zone_2" type="checkbox" value="' . $RS_city[$i]['city_cd'] . '" name="city[]"></td>';
                            echo '<td class="analysis-name">' . $RS_city[$i]['city_name'] . '(' . $RS_city[$i]['count_item'] . ')</td>';
                        }
                    }
                    ?>
                </tr>
            </table>

            <h5 class="stit">その他 <input type="checkbox" id="zone_3"></h5>
            <table class="form-analysis lst-check">
                <tr>
                    <?php
                    $count = 0;
                    for ($i = 0; $i < count($RS_city); $i++) {
                        if ($RS_city[$i]['cat_city_name'] == 'その他') {
                            if ($count % 7 == 0 && $count != 0) {
                                echo '</tr><tr>';
                            }
                            $count++;
                            echo '<td class="checkbox"><input data-checkbox="zone_3" type="checkbox" value="' . $RS_city[$i]['city_cd'] . '" name="city[]"></td>';
                            echo '<td class="analysis-name">' . $RS_city[$i]['city_name'] . '(' . $RS_city[$i]['count_item'] . ')</td>';
                        }
                    }
                    ?>
                </tr>
            </table>

            <div class="clear02">
                <div class="check-left">
                    <h4 class="mtit">種類</h4>
                    <ul class="lst-check">
                        <?php
                        $count = 0;
                        for ($i = 0; $i < count($RS_cat_item); $i++) {
                            if ($count % 7 == 0 && $count != 0) {
                                echo '</ul><ul class="lst-check">';
                            }
                            $count++;
                            echo '<li>';
                            echo '<label class="checkbox"><input type="checkbox" value="';
                            echo $RS_cat_item[$i]['cat_item_cd'] . '" name="cat_item[]"></label><label class="analysis-name">';
                            echo $RS_cat_item[$i]['cat_item_name'];
                            echo '</label></li>';
                        }
                        ?>
                    </ul>
                </div>
                <div class="check-right">
                    <h4 class="mtit">状態</h4>
                    <ul class="lst-check">
                        <?php
                        $count = 0;
                        for ($i = 0; $i < count($RS_condition); $i++) {
                            if ($count % 7 == 0 && $count != 0) {
                                echo '</ul><ul class="lst-check">';
                            }
                            $count++;
                            echo '<li>';
                            echo '<label class="checkbox"><input type="checkbox" value="';
                            echo $RS_condition[$i]['condition_cd'] . '" name="condition[]"></label><label class="analysis-name">';
                            echo $RS_condition[$i]['condition_name'];
                            echo '</label></li>';
                        }
                        ?>
                    </ul>
                </div>
                <div class="clear"></div>
            </div>
            <h4 class="mtit">売主</h4>
            <table class="form-analysis">
                <tr>
                    <?php
                    $count = 0;
                    for ($i = 0; $i < 6; $i++) {
                        if ($count % 7 == 0 && $count != 0) {
                            echo '</tr><tr>';
                        }
                        $count++;
                        echo '<td class="checkbox"><input type="checkbox" value="';
                        echo $RS_seller[$i]['seller_cd'] . '" name="seller[]"></td><td class="analysis-name">';
                        echo $RS_seller[$i]['seller_name'];
                        echo '</td>';
                    }
                    ?>
                    <td class="checkbox"><input type="checkbox" value="0" name="seller[]"></td><td class="analysis-name">その他</td>
                </tr>
            </table>
            <div class="line-chart">
                <div class="control-chart">
                    <table class="tbl-control">
                        <tr>
                            <td>期間</td>
                            <td>
                                <input class="inp-cmn" type="text" id="from" value="2012/01/01"/>
                            </td>
                            <td>〜</td>
                            <td>
                                <input class="inp-cmn" type="text" id="to" value="<?php echo date('Y/m/d'); ?>"/>
                            </td>
                            <td>内容</td>
                            <td>
                                <select class="select-cmn" id="select_opt">
                                    <?php
                                    for ($i = 0; $i < count($RS_analytics); $i++) {
                                        echo '<option value="';
                                        echo $RS_analytics[$i]['analy_cd'];
                                        echo '">';
                                        echo $RS_analytics[$i]['analy_name'];
                                        echo '</option>';
                                    }
                                    ?>
                                </select>
                            </td>
                            <td>
                                <button class="btn-aggregate" id="btn_th">集　計</button>
                            </td>
                        </tr>
                    </table>

                    <div class="form-btn-time">
                        <table class="tbl-control">
                            <tr>
                                <td><button class="btn btn-time" value="6"/>過去6 ヶ月</button></td>
                                <td><button class="btn btn-time" value="12"/>過去1 年間</button></td>
                                <td><button class="btn btn-time" value="24"/>過去2 年間</button></td>
                                <td><button class="btn btn-time" value="36"/>過去3 年間</button></td>
                                <td style="padding: 5px 70px"><button class="btn btn-toggle" value="0" id="toggle_time_area">期間比較</button></td>
                            </tr>
                        </table>
                    </div>
                    <!--/control-chart--></div>

                <div id="error"></div>

                <div class="view-chart" id="dashboard">
                    <input type="hidden" id="item_cd" value="<?php echo $RS_analysis[0]['item_cd']; ?>">
                    <div id="chart_div"></div>

                    <br>
                    <div id="analysis_tbl">
                        <div class="strike">
                            <span>売主別集計</span>
                        </div>
                        <br>

                        <table class="form-compare-item" border="1" width="100%">
                            <tr id="name">
                                <th width="12%"></th>
                            </tr>
                            <tr id="sale_number">
                                <th>新規売出物件数</th>
                            </tr>
                            <tr id="market_rate">
                                <th>新規売出物件数シェア</th>
                            </tr>
                            <tr id="selling_number">
                                <th>売出中物件数</th>
                            </tr>
                            <tr id="selling_rate">
                                <th>売出中物件数シェア</th>
                            </tr>
                            <tr id="soldout_number">
                                <th>成約済物件数</th>
                            </tr>
                            <tr id="soldout_rate">
                                <th>成約件数シェア</th>
                            </tr>
                            <tr id="soldout_before_complete_number">
                                <th>完成前成約物件数</th>
                            </tr>
                            <tr id="rate_soldout_before_complete">
                                <th>売出前成約率 </th>
                            </tr>
                            <tr id="avg_price_regist">
                                <th>平均売出価格</th>
                            </tr>
                            <tr id="avg_price_sold">
                                <th>平均成約価格</th>
                            </tr>
                            <tr id="avg_time_sold">
                                <th>平均売出期間</th>
                            </tr>
                            <tr id="avg_down_price">
                                <th>平均値下価格</th>
                            </tr>
                            <tr id="avg_down_price_rate">
                                <th>平均値下率</th>
                            </tr>
                            <tr id="avg_time_change_circle">
                                <th>平均価格改定周期</th>
                            </tr>
                        </table>

                        <br><br>

                        <div id="piechart" style="background-color: #D5D5D5; width: 100%">
                            <div id="title" class="chart-title" style="padding: 10px; font-size: 16px; color: black;"><b>売出中物件数シェア</b></div>

                            <div class="area" style="clear: left;">	
                                <div id="piechart_3d" style="width: 450px; height: 300px; float: left;"></div>
                                <div id="piechart_3d_1" style="width: 450px; height: 300px; float: left;"></div>
                                <div id="piechart_3d_2" style="width: 450px; height: 300px; float: left;"></div>
                                <div id="piechart_3d_3" style="width: 450px; height: 300px; float: left;"></div>
                                <div id="piechart_3d_4" style="width: 450px; height: 300px; float: left;"></div>
                                <div id="piechart_3d_5" style="width: 450px; height: 300px; float: left;"></div>
                                <div id="piechart_3d_6" style="width: 450px; height: 300px; float: left;"></div>
                                <div id="piechart_3d_7" style="width: 450px; height: 300px; float: left;"></div>
                                <div id="piechart_3d_8" style="width: 450px; height: 300px; float: left;"></div>
                                <div id="piechart_3d_9" style="width: 450px; height: 300px; float: left;"></div>
                                <div id="piechart_3d_10" style="width: 450px; height: 300px; float: left;"></div>
                                <div id="piechart_3d_11" style="width: 450px; height: 300px; float: left;"></div>
                                <div id="piechart_3d_12" style="width: 450px; height: 300px; float: left;"></div>
                                <div id="piechart_3d_13" style="width: 450px; height: 300px; float: left;"></div>
                                <div id="piechart_3d_14" style="width: 450px; height: 300px; float: left;"></div>
                                <div id="piechart_3d_15" style="width: 450px; height: 300px; float: left;"></div>
                                <div id="piechart_3d_16" style="width: 450px; height: 300px; float: left;"></div>
                                <div id="piechart_3d_17" style="width: 450px; height: 300px; float: left;"></div>
                                <div id="piechart_3d_18" style="width: 450px; height: 300px; float: left;"></div>
                                <div id="piechart_3d_19" style="width: 450px; height: 300px; float: left;"></div>
                                <div id="piechart_3d_20" style="width: 450px; height: 300px; float: left;"></div>
                                <div id="piechart_3d_21" style="width: 450px; height: 300px; float: left;"></div>
                                <div id="piechart_3d_22" style="width: 450px; height: 300px; float: left;"></div>
                                <div id="piechart_3d_23" style="width: 450px; height: 300px; float: left;"></div>
                                <div id="piechart_3d_24" style="width: 450px; height: 300px; float: left;"></div>
                                <div id="piechart_3d_25" style="width: 450px; height: 300px; float: left;"></div>
                                <div id="piechart_3d_26" style="width: 450px; height: 300px; float: left;"></div>
                                <div id="piechart_3d_27" style="width: 450px; height: 300px; float: left;"></div>
                                <div id="piechart_3d_28" style="width: 450px; height: 300px; float: left;"></div>
                                <div id="piechart_3d_29" style="width: 450px; height: 300px; float: left;"></div>
                                <div id="piechart_3d_30" style="width: 450px; height: 300px; float: left;"></div>
                                <div id="piechart_3d_31" style="width: 450px; height: 300px; float: left;"></div>
                                <div id="piechart_3d_32" style="width: 450px; height: 300px; float: left;"></div>
                            </div>

                            <div class="time" style="clear: left;">
                                <div id="piechart_time_3d" style="width: 450px; height: 300px; float: left;"></div>
                                <div id="piechart_time_3d_1" style="width: 450px; height: 300px; float: left;"></div>
                                <div id="piechart_time_3d_2" style="width: 450px; height: 300px; float: left;"></div>
                                <div id="piechart_time_3d_3" style="width: 450px; height: 300px; float: left;"></div>
                            </div>
                            <table border='0' width="100%"></table>
                        </div>

                        <br><br>

                        <div id="piechart" style="background-color: #D5D5D5; width: 100%">
                            <div id="title" class="chart-title" style="padding: 10px; font-size: 16px; color: black;"><b>成約物件数シェア</b></div>
                            <div class="area" style="clear: left;">
                                <div id="soldout_piechart_3d" style="width: 450px; height: 300px; float: left;"></div>
                                <div id="soldout_piechart_3d_1" style="width: 450px; height: 300px; float: left;"></div>
                                <div id="soldout_piechart_3d_2" style="width: 450px; height: 300px; float: left;"></div>
                                <div id="soldout_piechart_3d_3" style="width: 450px; height: 300px; float: left;"></div>
                                <div id="soldout_piechart_3d_4" style="width: 450px; height: 300px; float: left;"></div>
                                <div id="soldout_piechart_3d_5" style="width: 450px; height: 300px; float: left;"></div>
                                <div id="soldout_piechart_3d_6" style="width: 450px; height: 300px; float: left;"></div>
                                <div id="soldout_piechart_3d_7" style="width: 450px; height: 300px; float: left;"></div>
                                <div id="soldout_piechart_3d_8" style="width: 450px; height: 300px; float: left;"></div>
                                <div id="soldout_piechart_3d_9" style="width: 450px; height: 300px; float: left;"></div>
                                <div id="soldout_piechart_3d_10" style="width: 450px; height: 300px; float: left;"></div>
                                <div id="soldout_piechart_3d_11" style="width: 450px; height: 300px; float: left;"></div>
                                <div id="soldout_piechart_3d_12" style="width: 450px; height: 300px; float: left;"></div>
                                <div id="soldout_piechart_3d_13" style="width: 450px; height: 300px; float: left;"></div>
                                <div id="soldout_piechart_3d_14" style="width: 450px; height: 300px; float: left;"></div>
                                <div id="soldout_piechart_3d_15" style="width: 450px; height: 300px; float: left;"></div>
                                <div id="soldout_piechart_3d_16" style="width: 450px; height: 300px; float: left;"></div>
                                <div id="soldout_piechart_3d_17" style="width: 450px; height: 300px; float: left;"></div>
                                <div id="soldout_piechart_3d_18" style="width: 450px; height: 300px; float: left;"></div>
                                <div id="soldout_piechart_3d_19" style="width: 450px; height: 300px; float: left;"></div>
                                <div id="soldout_piechart_3d_20" style="width: 450px; height: 300px; float: left;"></div>
                                <div id="soldout_piechart_3d_21" style="width: 450px; height: 300px; float: left;"></div>
                                <div id="soldout_piechart_3d_22" style="width: 450px; height: 300px; float: left;"></div>
                                <div id="soldout_piechart_3d_23" style="width: 450px; height: 300px; float: left;"></div>
                                <div id="soldout_piechart_3d_24" style="width: 450px; height: 300px; float: left;"></div>
                                <div id="soldout_piechart_3d_25" style="width: 450px; height: 300px; float: left;"></div>
                                <div id="soldout_piechart_3d_26" style="width: 450px; height: 300px; float: left;"></div>
                                <div id="soldout_piechart_3d_27" style="width: 450px; height: 300px; float: left;"></div>
                                <div id="soldout_piechart_3d_28" style="width: 450px; height: 300px; float: left;"></div>
                                <div id="soldout_piechart_3d_29" style="width: 450px; height: 300px; float: left;"></div>
                                <div id="soldout_piechart_3d_30" style="width: 450px; height: 300px; float: left;"></div>
                                <div id="soldout_piechart_3d_31" style="width: 450px; height: 300px; float: left;"></div>
                                <div id="soldout_piechart_3d_32" style="width: 450px; height: 300px; float: left;"></div>
                            </div>

                            <div class="time" style="clear: left;">
                                <div id="soldout_piechart_time_3d" style="width: 450px; height: 300px; float: left;"></div>
                                <div id="soldout_piechart_time_3d_1" style="width: 450px; height: 300px; float: left;"></div>
                                <div id="soldout_piechart_time_3d_2" style="width: 450px; height: 300px; float: left;"></div>
                                <div id="soldout_piechart_time_3d_3" style="width: 450px; height: 300px; float: left;"></div>
                            </div>
                            <table border='0' width="100%"></table>
                        </div>

                        <br><br>

                        <div id="chart" style="background-color: #D5D5D5; width: 100%">
                            <div id="title" class="chart-title" style="padding: 10px; font-size: 16px; color: black;"><b>新規売出物件数推移</b></div>

                            <div class="area" style="clear: left;">
                                <div id="chart_div_2" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_2_40136" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_2_40134" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_2_40135" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_2_40131" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_2_40133" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_2_40132" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_2_40137" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_2_40223" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_2_40342" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_2_40343" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_2_40218" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_2_40224" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_2_40344" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_2_40219" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_2_40348" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_2_40305" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_2_40230" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_2_40345" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_2_40203" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_2_40349" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_2_40341" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_2_40221" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_2_40207" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_2_40447" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_2_41345" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_2_40503" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_2_40216" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_2_40647" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_2_40217" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_2_41346" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_2_41203" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_2_41341" style="width:500px; height: 300px; float: left;"></div>
                            </div>

                            <div class="time" style="clear: left;">
                                <div id="chart_div_2_0" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_2_1" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_2_2" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_2_3" style="width:500px; height: 300px; float: left;"></div>
                            </div>							
                            <table border='0' width="100%"></table>
                        </div>

                        <br><br>

                        <div id="chart" style="background-color: #D5D5D5; width: 100%">
                            <div id="title" class="chart-title" style="padding: 10px; font-size: 16px; color: black;"><b>売出中物件数推移</b></div>

                            <div class="area" style="clear: left;">
                                <div id="chart_div_3" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_3_40136" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_3_40134" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_3_40135" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_3_40131" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_3_40133" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_3_40132" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_3_40137" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_3_40223" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_3_40342" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_3_40343" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_3_40218" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_3_40224" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_3_40344" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_3_40219" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_3_40348" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_3_40305" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_3_40230" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_3_40345" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_3_40203" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_3_40349" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_3_40341" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_3_40221" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_3_40207" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_3_40447" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_3_41345" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_3_40503" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_3_40216" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_3_40647" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_3_40217" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_3_41346" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_3_41203" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_3_41341" style="width:500px; height: 300px; float: left;"></div>
                            </div>

                            <div class="time" style="clear: left;">
                                <div id="chart_div_3_0" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_3_1" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_3_2" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_3_3" style="width:500px; height: 300px; float: left;"></div>
                            </div>							
                            <table border='0' width="100%"></table>
                        </div>

                        <br><br>

                        <div id="chart" style="background-color: #D5D5D5; width: 100%">
                            <div id="title" class="chart-title" style="padding: 10px; font-size: 16px; color: black;"><b>成約物件数推移</b></div>

                            <div class="area" style="clear: left;">
                                <div id="chart_div_1" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_1_40136" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_1_40134" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_1_40135" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_1_40131" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_1_40133" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_1_40132" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_1_40137" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_1_40223" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_1_40342" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_1_40343" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_1_40218" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_1_40224" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_1_40344" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_1_40219" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_1_40348" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_1_40305" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_1_40230" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_1_40345" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_1_40203" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_1_40349" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_1_40341" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_1_40221" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_1_40207" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_1_40447" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_1_41345" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_1_40503" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_1_40216" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_1_40647" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_1_40217" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_1_41346" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_1_41203" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_1_41341" style="width:500px; height: 300px; float: left;"></div>
                            </div>

                            <div class="time" style="clear: left;">
                                <div id="chart_div_1_0" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_1_1" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_1_2" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_1_3" style="width:500px; height: 300px; float: left;"></div>
                            </div>							
                            <table border='0' width="100%"></table>
                        </div>

                        <br><br>

                        <div id="chart" style="background-color: #D5D5D5; width: 100%">
                            <div id="title" class="chart-title" style="padding: 10px; font-size: 16px; color: black;"><b>平均売出価格推移</b></div>

                            <div class="area"  style="clear: left;">
                                <div id="chart_div_5" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_5_40136" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_5_40134" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_5_40135" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_5_40131" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_5_40133" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_5_40132" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_5_40137" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_5_40223" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_5_40342" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_5_40343" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_5_40218" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_5_40224" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_5_40344" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_5_40219" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_5_40348" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_5_40305" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_5_40230" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_5_40345" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_5_40203" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_5_40349" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_5_40341" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_5_40221" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_5_40207" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_5_40447" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_5_41345" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_5_40503" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_5_40216" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_5_40647" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_5_40217" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_5_41346" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_5_41203" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_5_41341" style="width:500px; height: 300px; float: left;"></div>
                            </div>

                            <div class="time" style="clear: left;">
                                <div id="chart_div_5_0" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_5_1" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_5_2" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_5_3" style="width:500px; height: 300px; float: left;"></div>
                            </div>							
                            <table border='0' width="100%"></table>
                        </div>

                        <br><br>

                        <div id="chart" style="background-color: #D5D5D5; width: 100%">
                            <div id="title" class="chart-title"  style="padding: 10px; font-size: 16px; color: black;"><b>平均成約価格推移</b></div>

                            <div class="area" style="clear: left;">
                                <div id="chart_div_4" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_4_40136" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_4_40134" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_4_40135" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_4_40131" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_4_40133" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_4_40132" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_4_40137" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_4_40223" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_4_40342" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_4_40343" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_4_40218" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_4_40224" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_4_40344" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_4_40219" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_4_40348" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_4_40305" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_4_40230" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_4_40345" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_4_40203" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_4_40349" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_4_40341" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_4_40221" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_4_40207" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_4_40447" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_4_41345" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_4_40503" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_4_40216" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_4_40647" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_4_40217" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_4_41346" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_4_41203" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_4_41341" style="width:500px; height: 300px; float: left;"></div>
                            </div>

                            <div class="time" style="clear: left;">
                                <div id="chart_div_4_0" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_4_1" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_4_2" style="width:500px; height: 300px; float: left;"></div>
                                <div id="chart_div_4_3" style="width:500px; height: 300px; float: left;"></div>
                            </div>							
                            <table border='0' width="100%"></table>
                        </div>

                    </div>
                </div>
                <!--/line-chart--></div>
        </div>
    </div>
</div>
<meta name="_token" content="{!! csrf_token() !!}" />


<!--STYLE CSS NEW-->
<link href="/_css/style-new.css" rel="stylesheet" type="text/css">
<!--Load jquery, bootstrap-->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>

<!--jqueryUI datepicker-->
<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script>
<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1/i18n/jquery.ui.datepicker-ja.min.js" type="text/javascript" charset="utf-8"></script>
<link href="http://ajax.googleapis.com/ajax/libs/jqueryui/1/themes/redmond/jquery-ui.css" rel="stylesheet" type="text/css" />

<!--Load google chart-->
<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<script type="text/javascript">google.charts.load('current', {'packages': ['corechart', 'controls']});</script>
<script src="/_js/item/analysis_primary_chart.js" type="text/javascript"></script>
<script src="/_js/item/analysis_pie_chart.js" type="text/javascript"></script>
<script src="/_js/item/analysis_chart_city_and_time.js" type="text/javascript"></script>
<script src="/_js/item/analysis_chart.js" type="text/javascript"></script>
<script src="/_js/item/common.js" type="text/javascript"></script>

<script>
    $(function () {
        $("#from").datepicker({dateFormat: 'yy/mm/dd', changeMonth: true, changeYear: true});
        $("#to").datepicker({dateFormat: 'yy/mm/dd', changeMonth: true, changeYear: true});
    });
</script>
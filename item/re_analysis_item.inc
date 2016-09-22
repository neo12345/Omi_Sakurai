<div class="overlay">
    <img id="img_loading" src="/_img/common/loading.gif"/>
</div>


<div class="right">
    <h2 class="PageTitle page01">物件管理</h2>
    <div class="tab_wrap clear">
        <ul class="tab">
            <li class="tab_off"><a href="/item/?md=list" title="物件一覧">物件一覧</a></li>
            <li class="tab_off"><a href="/item/?md=regist" title="物件登録">物件登録</a></li>
            <li class="tab_off"><a href="/item/?md=analysis" title="集計・解析">集計・解析</a></li>
            <li class="tab_on"><a>解析(物件)</li>

        </ul>
    </div>
    <div class="cnt_wrap">
        <div class="cnt_title clear w260"><h3>解析(物件)</h3></div>
        <div class="box-analysis">
            <div class="company-info">
                <div class="col-left">
                    <div class="thumb-company"><img src="<?php echo $link_img_main_s; ?>" alt=""></div>
                    <table class="tbl-info">
                        <tr>
                            <th>売出開始価格</th>
                            <td><?php echo $RS_history[0]['hist_price'] ?>万円</td>
                        </tr>
                        <tr>
                            <?php if ($RS_item[0]['date_soldout'] == '') { ?>
                                <th>販売価格</th>
                            <?php } else {  ?>
                                <th><div style="color: red">販売価格</div></th>
                            <?php } ?>
                            
                            <td>
                                    <?php echo $RS_item[0]['item_price']; ?>万円
                                    <br>
                                    (<?php echo ((int) $RS_item[0]['item_price'] - (int) $RS_history[0]['hist_price']); ?> 万円) 
                                    (<?php echo round(((int) $RS_item[0]['item_price'] - (int) $RS_history[0]['hist_price']) / $RS_item[0]['item_price'] * 100, 2); ?>%)
                            </td>
                        </tr>
                        <tr>
                            <?php if ($RS_item[0]['date_soldout'] == '') { ?>
                                <th>売出後経過日数</th>
                                <td>
                                    <?php
                                    $today = time();
                                    for ($i = 0; $i < count($RS_history); $i++) {
                                        if ($RS_history[$i]['stat_name'] == '販売開始') {
                                            $regist_day = strtotime($RS_history[$i]['date_regist']);
                                        }
                                    }
                                    echo (floor(($today - $regist_day) / 86400));

                                    ?> 
                                    日経過
                                </td>
                                <?php
                                } else {  ?>
                                <th>販売期間</th>
                                <td>
                                    <?php
                                    $soldout_day = strtotime($RS_item[0]['date_soldout']);
                                    for ($i = 0; $i < count($RS_history); $i++) {
                                        if ($RS_history[$i]['stat_name'] == '販売開始') {
                                            $regist_day = strtotime($RS_history[$i]['date_regist']);
                                        }
                                    }
                                    echo (floor(($soldout_day - $regist_day) / 86400));
                                    ?> 
                                    日経過
                                </td>
                                <?php } ?>
                        </tr>
                        <tr>
                            <th>ステータス</th>
                            <td><?php echo $RS_history[$count_history - 1]['stat_name']; ?></td>
                        </tr>
                        <tr>
                            <th>成約日</th>
                            <td>
                                <?php
                                if ($count_history == 0) {
                                    echo '----';
                                } else {
                                    echo date('Y-m-d', strtotime($RS_history[$count_history - 1]['date_regist']));
                                    if ($RS_history[$count_history - 1]['stat_name'] != '成約') {
                                        $today = time();
                                        $lastday = strtotime($RS_history[$count_history - 1]['date_regist']);
                                        echo '<br>（';
                                        echo (floor(($today - $lastday) / 86400));
                                        echo '日前）';
                                    }
                                }

                                ?>
                            </td>
                        </tr>
                    </table>
                    <div class="tbl-info-02">
                        <table>
                            <tr>
                                <th>日付</th>
                                <th>ステータス</th>
                                <th>価格</th>
                                <th>担当</th>
                            </tr>
                            <?php
                            for ($i = 0; $i < $count_history; $i++) {

                                ?>
                                <tr>
                                    <td>
                                        <?php
                                        if ($RS_history[$i]['date_regist']) {
                                            echo date('Y/m/d', strtotime($RS_history[$i]['date_regist']));
                                            $today = time();
                                            $lastday = strtotime($RS_history[$i]['date_regist']);
                                            echo '<br>（';
                                            echo (floor(($today - $lastday) / 86400));
                                            echo '日前）';
                                        } else {
                                            echo '----';
                                        }

                                        ?>
                                    </td>
                                    <td>
                                        <?php
                                        if ($RS_history[$i]['stat_name'] == '販売開始') {
                                            echo '<div class="fsB">';
                                            echo $RS_history[$i]['stat_name'];
                                            echo '</div>';
                                        }
                                        if ($RS_history[$i]['stat_name'] == '価格改定') {
                                            echo '<div class="fsRed">';
                                            echo $RS_history[$i]['stat_name'];
                                            if ($i != 0) {
                                                for ($k = $i - 1; $k >= 0; $k--) {
                                                    if ($RS_history[$k]['stat_name'] == '価格改定' || $RS_history[$k]['stat_name'] == '販売開始') {
                                                        break;
                                                    }
                                                }
                                                echo '<br>(';
                                                echo (floor((strtotime($RS_history[$i]['date_regist']) - strtotime($RS_history[$k]['date_regist'])) / 86400));
                                                echo ' 日)';
                                            }
                                            echo '</div>';
                                        }
                                        if ($RS_history[$i]['stat_name'] == '商談') {
                                            echo '<div class="fsBlue">';
                                            echo $RS_history[$i]['stat_name'];
                                            if ($i != 0) {
                                                for ($k = $i - 1; $k >= 0; $k--) {
                                                    if ($RS_history[$k]['stat_name'] == '価格改定' || $RS_history[$k]['stat_name'] == '販売開始') {
                                                        break;
                                                    }
                                                }
                                                echo '<br>(';
                                                echo (floor((strtotime($RS_history[$i]['date_regist']) - strtotime($RS_history[$k]['date_regist'])) / 86400));
                                                echo ' 日)';
                                            }
                                            echo '</div>';
                                        }
                                        if ($RS_history[$i]['stat_name'] == '再販') {
                                            echo '<div class="fsSkyblue">';
                                            echo $RS_history[$i]['stat_name'];
                                            if ($i != 0) {
                                                for ($k = $i - 1; $k >= 0; $k--) {
                                                    if ($RS_history[$k]['stat_name'] == '価格改定' || $RS_history[$k]['stat_name'] == '販売開始') {
                                                        break;
                                                    }
                                                }
                                                echo '<br>(';
                                                echo (floor((strtotime($RS_history[$i]['date_regist']) - strtotime($RS_history[$k]['date_regist'])) / 86400));
                                                echo ' 日)';
                                            }
                                            echo '</div>';
                                        }
                                        if ($RS_history[$i]['stat_name'] == '問合せ') {
                                            echo '<div class="fsGreen">';
                                            echo $RS_history[$i]['stat_name'];
                                            if ($i != 0) {
                                                for ($k = $i - 1; $k >= 0; $k--) {
                                                    if ($RS_history[$k]['stat_name'] == '価格改定' || $RS_history[$k]['stat_name'] == '販売開始') {
                                                        break;
                                                    }
                                                }
                                                echo '<br>(';
                                                echo (floor((strtotime($RS_history[$i]['date_regist']) - strtotime($RS_history[$k]['date_regist'])) / 86400));
                                                echo ' 日)';
                                            }
                                            echo '</div>';
                                        }
                                        if ($RS_history[$i]['stat_name'] == '成約') {
                                            echo '<div class="fsB">';
                                            echo $RS_history[$i]['stat_name'];
                                            if ($i != 0) {
                                                for ($k = $i - 1; $k >= 0; $k--) {
                                                    if ($RS_history[$k]['stat_name'] == '価格改定' || $RS_history[$k]['stat_name'] == '販売開始') {
                                                        break;
                                                    }
                                                }
                                                echo '<br>(';
                                                echo (floor((strtotime($RS_history[$i]['date_regist']) - strtotime($RS_history[$k]['date_regist'])) / 86400));
                                                echo ' 日)';
                                            }
                                            echo '</div>';
                                        }

                                        ?>
                                    <td>
                                        <?php
                                        if ($RS_history[$i]['stat_name'] == '販売開始' || $RS_history[$i]['stat_name'] == '価格改定') {
                                            echo '<div class="fsB">';
                                            echo $RS_history[$i]['hist_price'];
                                            echo ' 万円';
                                            if ($i != 0) {
                                                echo '<br>(';
                                                echo $RS_history[$i]['hist_price'] - $RS_history[$i - 1]['hist_price'];
                                                echo ' 万円) (';
                                                echo round(($RS_history[$i]['hist_price'] - $RS_history[$i - 1]['hist_price']) / $RS_item[0]['item_price'] * 100, 2);
                                                echo '%)';
                                            }
                                            echo '</div>';
                                        } else {
                                            echo '<div class="fsN">';
                                            echo $RS_history[$i]['hist_price'];
                                            echo ' 万円';
                                            echo '</div>';
                                        }

                                        ?>
                                    </td>
                                    <td>
                                        <?php
                                        if ($RS_history[$i]['user_name'] == '') {
                                            echo '';
                                        } else {
                                            echo $RS_history[$i]['user_name'];
                                        }

                                        ?>
                                    </td>
                                </tr>
                            <?php } ?>
                        </table>
                    </div>
                    <!--/col-left--></div>
                <div class="col-right">
                    <table class="form-ccontact">
                        <tr>
                            <th>所在地</th>
                            <td colspan="3">
                                <?php echo $RS_item[0]['item_name']; ?><br>
                                <?php echo $RS_item[0]['item_name_sub']; ?>
                            </td>
                        </tr>
                        <tr>
                            <th>価格</th>
                            <td colspan="3"><?php echo $RS_item[0]['item_price']; ?>万円（税込）</td>
                        </tr>
                        <tr>
                            <th>仲介手数料</th>
                            <td colspan="3">
                                <?php
                                echo number_format($commission);
                                echo '円 →';
                                echo number_format($commission - $discount);
                                echo '円（仲介手数料上限から';
                                echo $RS_item[0]['item_discount'];
                                echo '%OFF）';
                                echo number_format($discount);
                                echo '円OFF';

                                ?>
                            </td>
                        </tr>
                        <tr>
                            <th>土地面積</th>
                            <td>
                                <?php
                                if ($RS_item[0]['item_size_land']) {
                                    echo $RS_item[0]['item_size_land'] . '㎡（';
                                    echo round($RS_item[0]['item_size_land'] * 0.302, 2) . '坪）';
                                }

                                ?>	
                            </td>
                            <th rowspan="2">諸費用</th>
                            <td rowspan="2">
                                <?php
                                if (!$RS_item[0]['item_cost_admin'] &&
                                    !$RS_item[0]['item_cost_repair'] &&
                                    !$RS_item[0]['item_park_min'] &&
                                    !$RS_item[0]['item_park_max']) {
                                    echo '無し<br>';
                                }
                                if ($RS_item[0]['item_cost_admin']) {
                                    echo '管理費			: ' . $RS_item[0]['item_cost_admin'] . '円<br>';
                                }
                                if ($RS_item[0]['item_cost_repair']) {
                                    echo '修繕積立金		: ' . $RS_item[0]['item_cost_repair'] . '円<br>';
                                }
                                if ($RS_item[0]['item_park_min']) {
                                    echo '物件駐車代上限	: ' . $RS_item[0]['item_park_min'] . '円<br>';
                                }
                                if ($RS_item[0]['item_park_max']) {
                                    echo '物件駐車代下限	: ' . $RS_item[0]['item_park_max'] . '円<br>';
                                }

                                ?>
                            </td>
                        </tr>
                        <tr>
                            <th>建築面積</th>
                            <td>
                                <?php
                                if ($RS_cat_item[0]['cat_item_cd'] == 1) {
                                    echo $RS_item[0]['item_size_build'] . '㎡（';
                                    echo round($RS_item[0]['item_size_build'] * 0.302, 2) . '坪）';
                                } else {
                                    echo $RS_item[0]['item_size_floor'] . '㎡（';
                                    echo round($RS_item[0]['item_size_floor'] * 0.302, 2) . '坪）';
                                }
                                if ($RS_size_detail[0]) {
                                    for ($i = 0; $i < count($RS_size_detail); $i++) {
                                        echo '<br>' . $RS_size_detail[$i]['size_detail_name'];
                                        echo '	: ' . $RS_size_detail[$i]['size_detail_size'] . '㎡';
                                    }
                                }

                                ?>
                            </td>
                        </tr>
                        <tr>
                            <th>築年月</th>
                            <td><?php echo date('Y年m月', strtotime($RS_item[0]['item_build'])); ?></td>
                            <th rowspan="3">設備</th>
                            <td rowspan="3">
                                <?php
                                for ($i = 0; $i < count($RS_fuel); $i++) {
                                    echo 'ガス	:';
                                    echo $RS_fuel[$i]['fuel_name'];
                                    echo '<br/>';
                                }

                                for ($i = 0; $i < count($RS_water); $i++) {
                                    echo '上水道	：';
                                    echo $RS_water[$i]['water_name'];
                                    echo '<br/>';
                                }

                                for ($i = 0; $i < count($RS_sewer); $i++) {
                                    echo '下水道	：';
                                    echo $RS_sewer[$i]['sewer_name'];
                                    echo '<br/>';
                                }

                                ?>					
                            </td>
                        </tr>
                        <tr>
                            <th>間取り</th>
                            <td>
                                <?php
                                for ($i = 0; $i < count($RS_layout); $i++) {
                                    echo $RS_layout[$i]['layout_name'];
                                }

                                ?>
                            </td>
                        </tr>
                        <tr>
                            <th>構造</th>
                            <td>
                                <?php
                                for ($i = 0; $i < count($RS_structure); $i++) {
                                    echo $RS_structure[$i]['struc_name'];
                                }

                                ?>
                            </td>
                        </tr>
                        <tr>
                            <th>建ぺい率</th>
                            <td><?php echo $RS_item[0]['item_ratio_build']; ?>%</td>
                            <th rowspan="2">交通</th>
                            <td rowspan="2">
                                <?php
                                for ($i = 0; $i < count($RS_pubtrans); $i++) {
                                    echo $RS_pubtrans[$i]['pubtrans_name'];
                                    echo ' 「';
                                    echo $RS_pubtrans[$i]['stop_name'];
                                    echo '」 駅まで';
                                    echo $RS_pubtrans[$i]['transway_name'];
                                    echo $RS_pubtrans[$i]['transtime'];
                                    echo '分<br>';
                                }

                                ?>
                            </td>
                        </tr>
                        <tr>
                            <th>容積率</th>
                            <td><?php echo $RS_item[0]['item_ratio_floor']; ?>%</td>
                        </tr>

                        <tr>
                            <th>総戸数・建物階数</th>
                            <td>
                                <?php
                                if ($RS_cat_item[0]['cat_item_cd'] == 1) {
                                    echo $RS_item[0]['item_houses'];
                                } else {
                                    echo $RS_item[0]['item_floor_above'] + $RS_item[0]['item_floor_under'];
                                }

                                ?>
                            </td>
                            <th rowspan="3">学校</th>
                            <td rowspan="3">
                                <?php
                                if ($RS_school_pri[0]) {
                                    for ($i = 0; $i < count($RS_school_pri); $i++) {
                                        echo $RS_school_pri[0]['school_pri_name'];
                                        echo '	: ';
                                        echo $RS_item[0]['item_dist_pri'] . 'm';
                                        echo '(' . $RS_item[0]['item_min_pri'] . '分）';
                                        echo '<br>';
                                    }
                                }
                                if ($RS_school_jun[0]) {
                                    for ($i = 0; $i < count($RS_school_jun); $i++) {
                                        echo $RS_school_jun[0]['school_jun_name'];
                                        echo '	: ';
                                        echo $RS_item[0]['item_dist_jun'] . 'm';
                                        echo '(' . $RS_item[0]['item_min_jun'] . '分）';
                                        echo '<br>';
                                    }
                                }
                                if ($RS_cat_schigh[0]) {
                                    for ($i = 0; $i < count($RS_cat_schigh); $i++) {
                                        echo '高校学区	: ';
                                        echo $RS_cat_schigh[0]['cat_schigh_name'];
                                    }
                                }

                                ?>
                            </td>
                        </tr>
                        <tr>
                            <th>駐車場</th>
                            <td>
                                <?php
                                if ($RS_cat_item[0]['cat_item_cd'] == 1) {
                                    echo $RS_item[0]['item_park_in'];
                                } else {
                                    echo $RS_item[0]['item_park_vacancy'];
                                }

                                ?> 
                            </td>
                        </tr>
                        <tr>
                            <th>接道</th>
                            <td>
                                <?php
                                for ($i = 0; $i < count($RS_road); $i++) {
                                    echo $RS_road[$i]['dire_name'] . '側';
                                    echo $RS_road[$i]['along_size'] . 'm';
                                    echo $RS_road[$i]['road_name'] . '<br>';
                                }

                                ?>
                            </td>
                        </tr>
                        <tr>
                            <th>土地権利</th>
                            <td>
                                <?php
                                for ($i = 0; $i < count($RS_rights); $i++) {
                                    echo $RS_rights[$i]['rights_name'];
                                }

                                ?>
                            </td>
                            <th>地目</th>
                            <td>
                                <?php
                                for ($i = 0; $i < count($RS_landcat); $i++) {
                                    echo $RS_landcat[$i]['landcat_name'];
                                }

                                ?>
                        </tr>
                        <tr>
                            <th>都市計画</th>
                            <td>
                                <?php
                                for ($i = 0; $i < count($RS_plan); $i++) {
                                    echo $RS_plan[$i]['plan_name'];
                                }

                                ?>
                            </td>
                            <th>用途地域</th>
                            <td>
                                <?php
                                for ($i = 0; $i < count($RS_district); $i++) {
                                    echo $RS_district[$i]['dist_name'];
                                }

                                ?>
                            </td>
                        </tr>
                        <tr>
                            <th>建築確認番号</th>
                            <td><?php echo $RS_item[0]['item_serial']; ?></td>
                            <th>取引形態</th>
                            <td>
                                <?php
                                for ($i = 0; $i < count($RS_method); $i++) {
                                    echo $RS_method[$i]['meth_name'];
                                }

                                ?>
                            </td>
                        </tr>
                        <tr>
                            <th colspan="1">その他制限等</th>
                            <td colspan="3"><?php echo $RS_item[0]['item_restrict']; ?></td>    
                        </tr>
                        <tr>
                            <th colspan="1">特記事項</th>
                            <td colspan="3"><?php echo nl2br($RS_item[0]['item_memo']); ?></td>
                        </tr>
                        <tr>
                            <th>間取り図</th>
                            <td>
                                <img src="<?php echo $link_img_plan1; ?>" width="100%"/>
                            </td>
                            <th>配置図</th>
                            <td>
                                <img src="<?php echo $link_img_plan2; ?>" width="100%"/>
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="clear"></div>
                <!--/company-info--></div>
            <div class="line-chart">
                <h4 class="mtit">物件解析</h4>
                <table class="tabl-analysis" width="100%">
                    <tr>
                        <td style="width: 30%;vertical-align:top">
                            <table class="form-analysis" style="width: 100%;">
                                <tr>
                                    <td style="width: 40%;"><b>検索半径: </b></td>
                                    <td>
                                        <select class="select-cmn" id="radius" name="search_radius" style="width: 80%"/>
                                <option value="0.5">0.5km</option>
                                <option value="1">1km</option>
                                <option value="2">2km</option>
                                <option value="3" selected>3km</option>
                                <option value="5">5km</option>
                                <option value="7">7km</option>
                                <option value="10">10km</option>
                                </select>
                        </td>
                    </tr>
                </table><br>
                <table class="form-analysis" style="width: 100%; padding: 10px 20px;">	
                    <tr>
                        <td style="width: 40%;"><b>物件タイプ: </b></td>
                        <?php
                        $count = 0;
                        for ($i = 0; $i < count($RS_list_condition); $i++) {
                            if ($count % 2 == 0 && $count != 0) {
                                echo '</tr><tr>';
                            }
                            $count++;
                            echo '<td style="width: 30%;">';
                            echo '<label class="checkbox"><input type="checkbox" value="';
                            echo $RS_list_condition[$i]['condition_cd'] . '" name="condition[]" id="condition"';
                            if ($RS_list_condition[$i]['condition_cd'] == 1) {
                                echo 'checked';
                            }
                            echo '><span class="analysis-name">';
                            echo $RS_list_condition[$i]['condition_name'];
                            echo '</span></label></td>';
                        }

                        ?>
                    </tr>
                </table>
                <br>
                <table class="form-analysis" style="width: 100%; padding: 10px 20px;">
                    <tr>
                        <td style="width: 40%;"><b>物件カテゴリ： </b></td>

                        <?php
                        $count = 0;
                        for ($i = 0; $i < count($RS_list_cat_item); $i++) {
                            if ($count % 2 == 0 && $count != 0) {
                                echo '</tr><tr>';
                            }
                            $count++;
                            echo '<td style="width: 30%;">';
                            echo '<label class="checkbox"><input type="checkbox" value="';
                            echo $RS_list_cat_item[$i]['cat_item_cd'] . '" name="cat_item[]"';
                            if ($RS_list_cat_item[$i]['cat_item_cd'] == 1) {
                                echo 'checked';
                            }
                            echo '><span class="analysis-name">';
                            echo $RS_list_cat_item[$i]['cat_item_name'];
                            echo '</span></label></td>';
                        }

                        ?>
                    </tr>
                </table>
                <br>
                <p style="font-size: 16px;"><b>間取り： </b></p>
                <table class="form-analysis" style="width: 100%; padding: 10px 20px;">
                    <tr>
                        <?php
                        $count = 0;
                        for ($i = 0; $i < count($RS_list_layout); $i++) {
                            if ($count % 5 == 0 && $count != 0) {
                                echo '</tr><tr>';
                            }
                            $count++;

                            echo '<td>';
                            echo '<label class="checkbox"><input type="checkbox" value="';
                            echo $RS_list_layout[$i]['layout_cd'] . '" name="layout[]"';
                            echo '><span class="analysis-name">';
                            echo $RS_list_layout[$i]['layout_name'];
                            echo '</span></label></td>';
                        }

                        ?>
                    </tr>
                </table>
                <br>
                <p style="font-size: 16px;"><b>売主: </b></p>
                <table class="form-analysis" style="width: 100%; padding: 10px 20px;">
                    <tr>
                        <?php
                        $count = 0;
                        for ($i = 0; $i < 6; $i++) {
                            if ($count % 3 == 0 && $count != 0) {
                                echo '</tr><tr>';
                            }
                            $count++;

                            echo '<td style="width:33%;">';
                            echo '<label class="checkbox"><input type="checkbox" value="';
                            echo $RS_list_seller[$i]['seller_cd'] . '" name="seller[]"';
                            echo '><span class="analysis-name">';
                            echo $RS_list_seller[$i]['seller_name'];
                            echo '</span></label></td>';
                        }

                        ?>
                    </tr>
                    <tr>
                        <td>
                            <label class="checkbox">
                                <input type="checkbox" value="0" name="seller[]"/><span class="analysis-name">その他</span>
                            </label>
                        </td>
                    </tr>
                </table>
                <br>
                <table class="form-analysis" style="width: 100%; padding: 10px 20px;">
                    <tr>
                        <td style="width: 40%;"><b>その他条件：</b></td>
                        <td>
                            <label class="checkbox">
                                <input type="checkbox" id="sold_before_complete" name="sold_before_complete"/>
                                <span class="analysis-name">完成前成約</span>
                            </label>

                        </td>
                    </tr>
                </table>
                <br>
                <div style="float:right; padding: 10px 20px;">	
                    <button class="btn-ana-item" id="btn_th"><span style="font-size:large;">検　索</span></button>
                </div>	
                </td>							
                <td rowspan="2" style="width: 70%;">
                    <div class="map">
                        <input type="hidden" id="lat" value="<?php echo $lat_lng[0]; ?>"/>
                        <input type="hidden" id="lng" value="<?php echo $lat_lng[1]; ?>"/>
                        <input type="hidden" id="zoom" value="<?php echo $RS_item[0]['item_zoom']; ?>"/>
                        <div class="map-company" id="googleMap" style="width: 95% ;height: 600px; padding: 20px;"></div>
                        <div class="pop_up" id="pop_up"></div>
                        <input type="hidden" id="list_item" value="-5,-4,-3,-2,-1"/>
                    </div>
                </td>
                </tr>
                <tr>
                    <td>
                        <table width="100%" style="font-size: 16px">
                            <tr>
                                <td id="selling">販売中物件数: </td>
                                <td id="soldout">成約済物件数: </td>
                            </tr>
                            <tr>
                                <td id="avg_time">平均売出期間: </td>
                                <td id="bfr_complete">完成前成約数: </td>
                            </tr>
                        </table>
                    </td>
                <tr>
                    </table>

                <div class="view-chart" id="dashboard" style="position: relative">
                    <input type="hidden" id="item_cd" value="<?php echo $RS_item[0]['item_cd']; ?>">
                    <div id="chart_div"></div>

                    <div class="btn_remove_item" id = "close_item1"></div>
                    <div class="btn_remove_item" id = "close_item2"></div>
                    <div class="btn_remove_item" id = "close_item3"></div>
                    <div class="btn_remove_item" id = "close_item4"></div>
                    <div class="btn_remove_item" id = "close_item5"></div>
                </div>

                <div class="strike">
                    <span>比　較</span>
                </div>
                <br>

                <table width=100% border: 0px>
                       <tr>
                        <td style="width:8%;background-color:white; border: 0px;"></td>
                        <td id="item0_title" style="width:11.5%;background-color:white; border: 0px; font-size:20px; text-align:center; padding: 5px 5px;">選択中の物件</td>
                        <td id="item1_title" style="width:11.5%;background-color:white; border: 0px; font-size:20px; text-align:center; padding: 5px 5px;"> 比較 1</td>
                        <td id="item2_title" style="width:11.5%;background-color:white; border: 0px; font-size:20px; text-align:center; padding: 5px 5px;"> 比較 2</td>
                        <td id="item3_title" style="width:11.5%;background-color:white; border: 0px; font-size:20px; text-align:center; padding: 5px 5px;"> 比較 3</td>
                        <td id="item4_title" style="width:11.5%;background-color:white; border: 0px; font-size:20px; text-align:center; padding: 5px 5px;"> 比較 4</td>
                        <td id="item5_title" style="width:11.5%;background-color:white; border: 0px; font-size:20px; text-align:center; padding: 5px 5px;"> 比較 5</td>
                        <td id="item_max_title" style="width:11.5%;background-color:white; border: 0px; font-size:20px; text-align:center; padding: 5px 5px; color: #BE1D2C">最高価格物件</td>
                        <td id="item_min_title" style="width:11.5%;background-color:white; border: 0px; font-size:20px; text-align:center; padding: 5px 5px; color: #283890">最低価格物件</td>
                    </tr>
                </table>

                <table class="form-compare-item" border="1" width="100%">

                    <tr>
                        <th style="width:8%;"></th>
                        <td id="item0_img" style="width:11.5%;background-color:#FBEFEF; vertical-align:top">
                            <div style="height: 50px;"></div>
                            <div class="carousel"> 
                                <div id="item0_main_s">
                                    <img src="<?php echo $link_img_main_s; ?>" width="100%"  style="padding: 5px 5px 5px 5px;">
                                </div>
                                <div id="item0_plan1" style="display: none;">
                                    <a href="<?php echo $link_img_plan1; ?>" data-lightbox="item0">
                                        <img width="100%" src="<?php echo $link_img_plan1; ?>" style="padding: 5px;"/>
                                    </a>
                                </div>
                                <div id="item0_plan2" style="display: none;">
                                    <a href="<?php echo $link_img_plan2; ?>" data-lightbox="item0">
                                        <img width="100%" src="<?php echo $link_img_plan2; ?>" style="padding: 5px;"/>
                                    </a>
                                </div>
                            </div>
                            <br>
                            <div class="btn_control"><button class="button_1" id="item0_main_s_btn">物件メイン画像</button><br>
                                <button class="button_2" id="item0_plan1_btn">間取り図</button><button class="button_2" id="item0_plan2_btn">配置図</button>
                            </div>
                        </td>
                        <td id="item1_img" style="width:11.5%; vertical-align:top; position: relative;"></td>
                        <td id="item2_img" style="width:11.5%; vertical-align:top; position: relative;"></td>
                        <td id="item3_img" style="width:11.5%; vertical-align:top; position: relative;"></td>
                        <td id="item4_img" style="width:11.5%; vertical-align:top; position: relative;"></td>
                        <td id="item5_img" style="width:11.5%; vertical-align:top; position: relative;"></td>
                        <td id="item_max_img" style="width:11.5%; vertical-align:top; position: relative;"></td>
                        <td id="item_min_img" style="width:11.5%; vertical-align:top; position: relative;"></td>
                    </tr>
                    <tr>
                        <th>物件名</th>
                        <td id="item0_name" style="background-color:#FBEFEF">
                            <?php echo $RS_item[0]['item_name']; ?>
                            <br>
                            <?php echo $RS_item[0]['item_name_sub']; ?>
                        </td>
                        <td id="item1_name"></td>
                        <td id="item2_name"></td>
                        <td id="item3_name"></td>
                        <td id="item4_name"></td>
                        <td id="item5_name"></td>
                        <td id="item_max_name"></td>
                        <td id="item_min_name"></td>
                    </tr>
                    <tr>
                        <th>価格</th>
                        <td id="item0_price" style="background-color:#FBEFEF">
                            <?php echo $RS_item[0]['item_price']; ?>万円（税込）
                        </td>
                        <td id="item1_price"></td>
                        <td id="item2_price"></td>
                        <td id="item3_price"></td>
                        <td id="item4_price"></td>
                        <td id="item5_price"></td>
                        <td id="item_max_price"></td>
                        <td id="item_min_price"></td>
                    </tr>
                    <tr>
                        <th style="width:8%;">成約日<br>（売出期間）</th>
                        <td id="item0_date_soldout" style="background-color:#FBEFEF">
                            <?php
                            if ($RS_item[0]['flg_soldout'] == 1) {
                                echo date('Y年m月d日', strtotime($RS_item[0]['date_soldout']));
                                $date1 = strtotime($RS_item[0]['date_soldout']);
                                for ($i = 0; $i < count($RS_history); $i++) {
                                        if ($RS_history[i].stat_name === '販売開始') {
                                            $regist_day = $RS_history[i].date_regist;
                                        }
                                    }
                                $date2 = $regist_day;
                                echo "<br>(";
                                echo floor(($date1 - $date2) / 86400);
                                echo "日)";
                            } else {
                                echo '----';
                            }

                            ?>
                        </td>
                        <td id="item1_date_soldout" style="width:11.5%;"></td>
                        <td id="item2_date_soldout" style="width:11.5%;"></td>
                        <td id="item3_date_soldout" style="width:11.5%;"></td>
                        <td id="item4_date_soldout" style="width:11.5%;"></td>
                        <td id="item5_date_soldout" style="width:11.5%;"></td>
                        <td id="item_max_date_soldout" style="width:11.5%;"></td>
                        <td id="item_min_date_soldout" style="width:11.5%;"></td>
                    </tr>
                    <tr>
                        <th style="width:8%;">売主</th>
                        <td id="item0_seller" style="background-color:#FBEFEF">
                            <?php
                            for ($i = 0; $i < count($RS_seller); $i++) {
                                echo $RS_seller[$i]['seller_name'];
                                echo '<br>';
                            }

                            ?>
                        </td>
                        <td id="item1_seller" style="width:11.5%;"></td>
                        <td id="item2_seller" style="width:11.5%;"></td>
                        <td id="item3_seller" style="width:11.5%;"></td>
                        <td id="item4_seller" style="width:11.5%;"></td>
                        <td id="item5_seller" style="width:11.5%;"></td>
                        <td id="item_max_seller" style="width:11.5%;"></td>
                        <td id="item_min_seller" style="width:11.5%;"></td>
                    </tr>
                    <tr>
                        <th>土地面積</th>
                        <td id="item0_size_land" style="background-color:#FBEFEF">
                            <?php
                            if ($RS_item[0]['item_size_land']) {
                                echo $RS_item[0]['item_size_land'] . '㎡（';
                                echo round($RS_item[0]['item_size_land'] * 0.302, 2) . '坪）';
                            }

                            ?>	
                        </td>
                        <td id="item1_size_land"></td>
                        <td id="item2_size_land"></td>
                        <td id="item3_size_land"></td>
                        <td id="item4_size_land"></td>
                        <td id="item5_size_land"></td>
                        <td id="item_max_size_land"></td>
                        <td id="item_min_size_land"></td>
                    </tr>
                    <tr>
                        <th>建築面積</th>
                        <td id="item0_size_build" style="background-color:#FBEFEF">
                            <?php
                            if ($RS_cat_item[0]['cat_item_cd'] == 1) {
                                echo $RS_item[0]['item_size_build'] . '㎡（';
                                echo round($RS_item[0]['item_size_build'] * 0.302, 2) . '坪）';
                            } else {
                                echo $RS_item[0]['item_size_floor'] . '㎡（';
                                echo round($RS_item[0]['item_size_floor'] * 0.302, 2) . '坪）';
                            }

                            if ($RS_size_detail[0]) {
                                for ($i = 0; $i < count($RS_size_detail); $i++) {
                                    echo '<br>' . $RS_size_detail[$i]['size_detail_name'];
                                    echo '	: ' . $RS_size_detail[$i]['size_detail_size'] . '㎡';
                                }
                            }

                            ?>
                        </td>
                        <td id="item1_size_build"></td>
                        <td id="item2_size_build"></td>
                        <td id="item3_size_build"></td>
                        <td id="item4_size_build"></td>
                        <td id="item5_size_build"></td>
                        <td id="item_max_size_build"></td>
                        <td id="item_min_size_build"></td>
                    </tr>
                    <tr>
                        <th>間取り</th>
                        <td id="item0_layout" style="background-color:#FBEFEF">
                            <?php
                            for ($i = 0; $i < count($RS_layout); $i++) {
                                echo $RS_layout[$i]['layout_name'];
                            }

                            ?>
                        </td>
                        <td id="item1_layout"></td>
                        <td id="item2_layout"></td>
                        <td id="item3_layout"></td>
                        <td id="item4_layout"></td>
                        <td id="item5_layout"></td>
                        <td id="item_max_layout"></td>
                        <td id="item_min_layout"></td>
                    </tr>
                    <tr>
                        <th>交通</th>
                        <td id="item0_pubtrans" style="background-color:#FBEFEF">
                            <?php
                            for ($i = 0; $i < count($RS_pubtrans); $i++) {
                                echo $RS_pubtrans[$i]['pubtrans_name'];
                                echo ' 「';
                                echo $RS_pubtrans[$i]['stop_name'];
                                echo '」 駅まで';
                                echo $RS_pubtrans[$i]['transway_name'];
                                echo $RS_pubtrans[$i]['transtime'];
                                echo '分<br>';
                            }

                            ?>
                        </td>
                        <td id="item1_pubtrans"></td>
                        <td id="item2_pubtrans"></td>
                        <td id="item3_pubtrans"></td>
                        <td id="item4_pubtrans"></td>
                        <td id="item5_pubtrans"></td>
                        <td id="item_max_pubtrans"></td>
                        <td id="item_min_pubtrans"></td>
                    </tr>
                    <tr>
                        <th>接道</th>
                        <td id="item0_road" style="background-color:#FBEFEF">
                            <?php
                            for ($i = 0; $i < count($RS_road); $i++) {
                                echo $RS_road[$i]['dire_name'] . '側';
                                echo $RS_road[$i]['along_size'] . 'm';
                                echo $RS_road[$i]['road_name'] . '<br>';
                            }

                            ?>
                        </td>
                        <td id="item1_road"></td>
                        <td id="item2_road"></td>
                        <td id="item3_road"></td>
                        <td id="item4_road"></td>
                        <td id="item5_road"></td>
                        <td id="item_max_road"></td>
                        <td id="item_min_road"></td>
                    </tr>
                    <tr>
                        <th>学校</th>
                        <td id="item0_school" style="background-color:#FBEFEF">
                            <?php
                            if ($RS_school_pri[0]) {
                                for ($i = 0; $i < count($RS_school_pri); $i++) {
                                    echo $RS_school_pri[0]['school_pri_name'];
                                    echo '	: ';
                                    echo $RS_item[0]['item_dist_pri'] . 'm';
                                    echo '(' . $RS_item[0]['item_min_pri'] . '分）';
                                    echo '<br>';
                                }
                            }
                            if ($RS_school_jun[0]) {
                                for ($i = 0; $i < count($RS_school_jun); $i++) {
                                    echo $RS_school_jun[0]['school_jun_name'];
                                    echo '	: ';
                                    echo $RS_item[0]['item_dist_jun'] . 'm';
                                    echo '(' . $RS_item[0]['item_min_jun'] . '分）';
                                    echo '<br>';
                                }
                            }
                            if ($RS_cat_schigh[0]) {
                                for ($i = 0; $i < count($RS_cat_schigh); $i++) {
                                    echo '高校学区	: ';
                                    echo $RS_cat_schigh[0]['cat_schigh_name'];
                                }
                            }

                            ?>
                        </td>
                        <td id="item1_school"></td>
                        <td id="item2_school"></td>
                        <td id="item3_school"></td>
                        <td id="item4_school"></td>
                        <td id="item5_school"></td>
                        <td id="item_max_school"></td>
                        <td id="item_min_school"></td>
                    </tr>
                    <tr>
                        <th>設備</th>
                        <td id="item0_equip" style="background-color:#FBEFEF">
                            <?php
                            for ($i = 0; $i < count($RS_fuel); $i++) {
                                echo 'ガス	:';
                                echo $RS_fuel[$i]['fuel_name'];
                                echo '<br/>';
                            }

                            for ($i = 0; $i < count($RS_water); $i++) {
                                echo '上水道	：';
                                echo $RS_water[$i]['water_name'];
                                echo '<br/>';
                            }

                            for ($i = 0; $i < count($RS_sewer); $i++) {
                                echo '下水道	：';
                                echo $RS_sewer[$i]['sewer_name'];
                                echo '<br/>';
                            }

                            ?>		
                        </td>
                        <td id="item1_equip"></td>
                        <td id="item2_equip"></td>
                        <td id="item3_equip"></td>
                        <td id="item4_equip"></td>
                        <td id="item5_equip"></td>
                        <td id="item_max_equip"></td>
                        <td id="item_min_equip"></td>
                    </tr>
                    <tr>
                        <th style="text-align:center; padding: 20px 5px;">詳細</th>
                        <td id="item0_btn_details" style="vertical-align:top; font-size:20px; text-align:center; padding: 20px 5px; background-color:#FBEFEF">
                            <div style="padding: 5px">
                                <a href="http://www.smile-fudosan.com/item/?md=detail&cd=<?php echo $RS_item[0]['item_cd']; ?>" target="_blank">
                                    <button class="btn-ana-item" style="width: 80px">HP</button>
                                </a>
                            </div>
                        </td>
                        <td id="item1_btn_details" style="font-size:20px; text-align:center; padding: 20px 5px;"></td>
                        <td id="item2_btn_details" style="font-size:20px; text-align:center; padding: 20px 5px;"></td>
                        <td id="item3_btn_details" style="font-size:20px; text-align:center; padding: 20px 5px;"></td>
                        <td id="item4_btn_details" style="font-size:20px; text-align:center; padding: 20px 5px;"></td>
                        <td id="item5_btn_details" style="font-size:20px; text-align:center; padding: 20px 5px;"></td>
                        <td id="item_max_btn_details" style="font-size:20px; text-align:center; padding: 20px 5px;"></td>
                        <td id="item_min_btn_details" style="font-size:20px; text-align:center; padding: 20px 5px;"></td>
                    </tr>
                </table>				
                <br>
                <br>
                <div class="strike">
                    <span>選択された地域におけるデータ</span>
                </div>
                <br>

                <table class="form-compare-item" border="1" width="100%" id="allSeller">
                    <tr id="name">
                        <th style="width:12%;">地域の総合</th>
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
                        <th>完成前成約率</th>
                    </tr>
                    <tr id="avg_price_regist">
                        <th>平均売出開始価格</th>
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
                    <tr id="num_item_down_price">
                        <th>値下物件数</th>
                    </tr>
                    <tr id="avg_down_price_each_time">
                        <th>平均価格改定価格</th>
                    </tr>
                    <tr id="avg_down_price_rate_each_times">
                        <th>価格改定毎値下率</th>
                    </tr>
                    <tr id="avg_down_price_times">
                        <th>平均価格改定回数</th>
                    </tr>
                    <tr id="avg_time_change_circle">
                        <th>平均価格改定周期</th>
                    </tr>
                </table>
                <br>
                <div id="tbl-analysis"></div>
                <!--/line-chart--></div>
            <!--/tabl-box-analysis--></div>
    </div>
</div>
<meta name="_token" content="{!! csrf_token() !!}" />

<!--STYLE CSS NEW-->
<link href="/_css/style-new.css" rel="stylesheet" type="text/css">

<!--Load jquery, bootstrap-->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>

<!--Load google api-->
<script src="http://maps.googleapis.com/maps/api/js?libraries=places&key=AIzaSyAU_pYGzjpC4MpVGgaCMBxTEDlwv3JlG8U"></script>
<script src="/_js/item/Ominext_oms.min.js" type="text/javascript"></script>
<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<script type="text/javascript">google.charts.load('current', {'packages': ['corechart'], 'language': 'ja'});</script>

<script src="/_js/item/analysis_item_map.js" type="text/javascript"></script>
<script src="/_js/item/analysis_item_chart.js" type="text/javascript"></script>
<script src="/_js/item/analysis_item.js" type="text/javascript"></script>

<!--lightbox-->
<link href="/_js/lightbox/css/lightbox.css" rel="stylesheet">
<script src="/_js/lightbox/js/lightbox.js"></script>
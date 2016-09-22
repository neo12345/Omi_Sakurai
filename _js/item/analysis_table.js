function insertAnalysisTable(analysis) {
    var remaining = countItemRemaining($('#from').val());
    for (var i = 0; i < analysis.length; i++) {
        if (analysis[i].seller_cd != null) {
            var td_sale_number = '';
            var td_selling_number = '';
            var td_soldout_number = '';
            var td_soldout_before_complete_number = '';
            var td_rate_soldout_before_complete = '';
            var td_sale_number = '';
            var td_avg_price_regist = '';
            var td_avg_price_soldout = '';
            var time = '';
            var avg_time_change_price = '';
            var td_avg_down_price = '';
            var avg_down_price_rate = '';
            var td_num_item_down_price = '';
            var td_avg_down_price_each_time = '';
            var td_avg_down_price_rate_each_times = '';
            var td_avg_down_price_times = '';
            var market_rate = '';

            var count_item_sale_number = 0;
            var count_item_soldout = 0;
            var count_item_soldout_before_complete = 0;
            var sum_price_regist = 0;
            var count_item_price_regist = 0;
            var sum_price_soldout = 0;
            var count_item_price_soldout = 0;
            var sum_time = 0;
            var count_item_time = 0;
            var sum_time_change_price = 0;
            var count_item_time_change_price = 0;
            var sum_down_price = 0;
            var sum_down_price_rate = 0;
            var count_item_down_price_rate = 0;
            var count_num_item_down_price = 0;
            var sum_down_price_rate_each_time = 0;
            var sum_market_rate = 0;
            var count_item_market_rate = 0;
            var count_total_item = 0;
            for (var n = 0; n < analysis.length; n++) {
                var count_item_per_seller = 0;
                for (var k = 0; k < analysis[n].items.length; k++) {
                    count_item_per_seller++;
                }
                count_total_item = count_total_item + count_item_per_seller;
            }

            //for market rate chart
            var count_item_in_jonan = 0;
            var count_item_in_minami = 0;
            var count_item_in_nishi = 0;
            var count_item_in_higashi = 0;
            var count_item_in_chuo = 0;
            var count_item_in_hakata = 0;
            var count_item_in_sawara = 0;
            var count_item_in_koga = 0;
            var count_item_in_sasaguri = 0;
            var count_item_in_shime = 0;
            var count_item_in_kasuga = 0;
            var count_item_in_fukutsu = 0;
            var count_item_in_sue = 0;
            var count_item_in_ounojou = 0;
            var count_item_in_hisayama = 0;
            var count_item_in_nakagawa = 0;
            var count_item_in_itoshima = 0;
            var count_item_in_shingu = 0;
            var count_item_in_kurume = 0;
            var count_item_in_kasuya = 0;
            var count_item_in_umimachi = 0;
            var count_item_in_dazaifu = 0;
            var count_item_in_yanagawa = 0;
            var count_item_in_chikuzen = 0;
            var count_item_in_kamimine = 0;
            var count_item_in_tachiarai = 0;
            var count_item_in_ogori = 0;
            var count_item_in_chikujou = 0;
            var count_item_in_chikushino = 0;
            var count_item_in_miyaki = 0;
            var count_item_in_tosu = 0;
            var count_item_in_kiyama = 0;

            var count_item_in_range_time_1 = 0;
            var count_item_in_range_time_2 = 0;
            var count_item_in_range_time_3 = 0;

            var count_item_remaining_in_jonan = 0;
            var count_item_remaining_in_minami = 0;
            var count_item_remaining_in_nishi = 0;
            var count_item_remaining_in_higashi = 0;
            var count_item_remaining_in_chuo = 0;
            var count_item_remaining_in_hakata = 0;
            var count_item_remaining_in_sawara = 0;
            var count_item_remaining_in_koga = 0;
            var count_item_remaining_in_sasaguri = 0;
            var count_item_remaining_in_shime = 0;
            var count_item_remaining_in_kasuga = 0;
            var count_item_remaining_in_fukutsu = 0;
            var count_item_remaining_in_sue = 0;
            var count_item_remaining_in_ounojou = 0;
            var count_item_remaining_in_hisayama = 0;
            var count_item_remaining_in_nakagawa = 0;
            var count_item_remaining_in_itoshima = 0;
            var count_item_remaining_in_shingu = 0;
            var count_item_remaining_in_kurume = 0;
            var count_item_remaining_in_kasuya = 0;
            var count_item_remaining_in_umimachi = 0;
            var count_item_remaining_in_dazaifu = 0;
            var count_item_remaining_in_yanagawa = 0;
            var count_item_remaining_in_chikuzen = 0;
            var count_item_remaining_in_kamimine = 0;
            var count_item_remaining_in_tachiarai = 0;
            var count_item_remaining_in_ogori = 0;
            var count_item_remaining_in_chikujou = 0;
            var count_item_remaining_in_chikushino = 0;
            var count_item_remaining_in_miyaki = 0;
            var count_item_remaining_in_tosu = 0;
            var count_item_remaining_in_kiyama = 0;

            //for soldout rate chart
            var count_item_soldout_in_jonan = 0;
            var count_item_soldout_in_minami = 0;
            var count_item_soldout_in_nishi = 0;
            var count_item_soldout_in_higashi = 0;
            var count_item_soldout_in_chuo = 0;
            var count_item_soldout_in_hakata = 0;
            var count_item_soldout_in_sawara = 0;
            var count_item_soldout_in_koga = 0;
            var count_item_soldout_in_sasaguri = 0;
            var count_item_soldout_in_shime = 0;
            var count_item_soldout_in_kasuga = 0;
            var count_item_soldout_in_fukutsu = 0;
            var count_item_soldout_in_sue = 0;
            var count_item_soldout_in_ounojou = 0;
            var count_item_soldout_in_hisayama = 0;
            var count_item_soldout_in_nakagawa = 0;
            var count_item_soldout_in_itoshima = 0;
            var count_item_soldout_in_shingu = 0;
            var count_item_soldout_in_kurume = 0;
            var count_item_soldout_in_kasuya = 0;
            var count_item_soldout_in_umimachi = 0;
            var count_item_soldout_in_dazaifu = 0;
            var count_item_soldout_in_yanagawa = 0;
            var count_item_soldout_in_chikuzen = 0;
            var count_item_soldout_in_kamimine = 0;
            var count_item_soldout_in_tachiarai = 0;
            var count_item_soldout_in_ogori = 0;
            var count_item_soldout_in_chikujou = 0;
            var count_item_soldout_in_chikushino = 0;
            var count_item_soldout_in_miyaki = 0;
            var count_item_soldout_in_tosu = 0;
            var count_item_soldout_in_kiyama = 0;

            var count_item_soldout_in_range_time_1 = 0;
            var count_item_soldout_in_range_time_2 = 0;
            var count_item_soldout_in_range_time_3 = 0;

            var from = $('#from').val();
            var to = $('#to').val();

            var range = Math.abs(new Date(from) - new Date(to)) / 3;

            var from_1 = new Date(from);
            var to_1 = new Date(from_1);
            to_1.setDate(to_1.getDate() + range / 86400 / 1000);

            from_1 = formatDate(from_1);
            to_1 = formatDate(to_1);
            to_1 = to_1 + ' 23:59:59';

            var from_2 = new Date(from);
            from_2.setDate(from_2.getDate() + range / 86400 / 1000 + 1);
            var to_2 = new Date(from_2);
            to_2.setDate(to_2.getDate() + range / 86400 / 1000);

            from_2 = formatDate(from_2);
            to_2 = formatDate(to_2);
            to_2 = to_2 + ' 23:59:59';


            var from_3 = new Date(from);
            from_3.setDate(from_3.getDate() + 2 * range / 86400 / 1000 + 1);
            var to_3 = new Date(to);

            from_3 = formatDate(from_3);
            to_3 = formatDate(to_3);
            to_3 = to_3 + ' 23:59:59';

            for (var k = 0; k < analysis[i].items.length; k++) {
                //sale number
                count_item_sale_number++;
                //area chart
                if (analysis[i].items[k].city_cd == 40136) {
                    count_item_in_jonan++;
                }
                if (analysis[i].items[k].city_cd == 40134) {
                    count_item_in_minami++;
                }
                if (analysis[i].items[k].city_cd == 40135) {
                    count_item_in_nishi++;
                }
                if (analysis[i].items[k].city_cd == 40131) {
                    count_item_in_higashi++;
                }
                if (analysis[i].items[k].city_cd == 40133) {
                    count_item_in_chuo++;
                }
                if (analysis[i].items[k].city_cd == 40132) {
                    count_item_in_hakata++;
                }
                if (analysis[i].items[k].city_cd == 40137) {
                    count_item_in_sawara++;
                }
                if (analysis[i].items[k].city_cd == 40223) {
                    count_item_in_koga++;
                }
                if (analysis[i].items[k].city_cd == 40342) {
                    count_item_in_sasaguri++;
                }
                if (analysis[i].items[k].city_cd == 40343) {
                    count_item_in_shime++;
                }
                if (analysis[i].items[k].city_cd == 40218) {
                    count_item_in_kasuga++;
                }
                if (analysis[i].items[k].city_cd == 40224) {
                    count_item_in_fukutsu++;
                }
                if (analysis[i].items[k].city_cd == 40344) {
                    count_item_in_sue++;
                }
                if (analysis[i].items[k].city_cd == 40219) {
                    count_item_in_ounojou++;
                }
                if (analysis[i].items[k].city_cd == 40348) {
                    count_item_in_hisayama++;
                }
                if (analysis[i].items[k].city_cd == 40305) {
                    count_item_in_nakagawa++;
                }
                if (analysis[i].items[k].city_cd == 40230) {
                    count_item_in_itoshima++;
                }
                if (analysis[i].items[k].city_cd == 40345) {
                    count_item_in_shingu++;
                }
                if (analysis[i].items[k].city_cd == 40203) {
                    count_item_in_kurume++;
                }
                if (analysis[i].items[k].city_cd == 40349) {
                    count_item_in_kasuya++;
                }
                if (analysis[i].items[k].city_cd == 40341) {
                    count_item_in_umimachi++;
                }
                if (analysis[i].items[k].city_cd == 40221) {
                    count_item_in_dazaifu++;
                }
                if (analysis[i].items[k].city_cd == 40207) {
                    count_item_in_yanagawa++;
                }
                if (analysis[i].items[k].city_cd == 40447) {
                    count_item_in_chikuzen++;
                }
                if (analysis[i].items[k].city_cd == 41345) {
                    count_item_in_kamimine++;
                }
                if (analysis[i].items[k].city_cd == 40503) {
                    count_item_in_tachiarai++;
                }
                if (analysis[i].items[k].city_cd == 40216) {
                    count_item_in_ogori++;
                }
                if (analysis[i].items[k].city_cd == 40647) {
                    count_item_in_chikujou++;
                }
                if (analysis[i].items[k].city_cd == 40217) {
                    count_item_in_chikushino++;
                }
                if (analysis[i].items[k].city_cd == 41346) {
                    count_item_in_miyaki++;
                }
                if (analysis[i].items[k].city_cd == 41203) {
                    count_item_in_tosu++;
                }
                if (analysis[i].items[k].city_cd == 41341) {
                    count_item_in_kiyama++;
                }


                //time chart
                if (analysis[i].items[k].regist >= from_1 && analysis[i].items[k].regist <= to_1) {
                    count_item_in_range_time_1++;
                }
                if (analysis[i].items[k].regist >= from_2 && analysis[i].items[k].regist <= to_2) {
                    count_item_in_range_time_2++;
                }
                if (analysis[i].items[k].regist >= from_3 && analysis[i].items[k].regist <= to_3) {
                    count_item_in_range_time_3++;
                }

                //avg price regist
                if (analysis[i].items[k].price_regist != null) {
                    count_item_price_regist++;

                    sum_price_regist = sum_price_regist + parseFloat(analysis[i].items[k].price_regist);
                }

                if (analysis[i].items[k].date_soldout >= from_1 && analysis[i].items[k].date_soldout <= to_3) {
                    //avg price soldout
                    if (analysis[i].items[k].price_soldout != null) {
                        count_item_soldout++;
                        count_item_price_soldout++;
                        //area chart
                        if (analysis[i].items[k].city_cd == 40136) {
                            count_item_soldout_in_jonan++;
                        }
                        if (analysis[i].items[k].city_cd == 40134) {
                            count_item_soldout_in_minami++;
                        }
                        if (analysis[i].items[k].city_cd == 40135) {
                            count_item_soldout_in_nishi++;
                        }
                        if (analysis[i].items[k].city_cd == 40131) {
                            count_item_soldout_in_higashi++;
                        }
                        if (analysis[i].items[k].city_cd == 40133) {
                            count_item_soldout_in_chuo++;
                        }
                        if (analysis[i].items[k].city_cd == 40132) {
                            count_item_soldout_in_hakata++;
                        }
                        if (analysis[i].items[k].city_cd == 40137) {
                            count_item_soldout_in_sawara++;
                        }
                        if (analysis[i].items[k].city_cd == 40223) {
                            count_item_soldout_in_koga++;
                        }
                        if (analysis[i].items[k].city_cd == 40342) {
                            count_item_soldout_in_sasaguri++;
                        }
                        if (analysis[i].items[k].city_cd == 40343) {
                            count_item_soldout_in_shime++;
                        }
                        if (analysis[i].items[k].city_cd == 40218) {
                            count_item_soldout_in_kasuga++;
                        }
                        if (analysis[i].items[k].city_cd == 40224) {
                            count_item_soldout_in_fukutsu++;
                        }
                        if (analysis[i].items[k].city_cd == 40344) {
                            count_item_soldout_in_sue++;
                        }
                        if (analysis[i].items[k].city_cd == 40219) {
                            count_item_soldout_in_ounojou++;
                        }
                        if (analysis[i].items[k].city_cd == 40348) {
                            count_item_soldout_in_hisayama++;
                        }
                        if (analysis[i].items[k].city_cd == 40305) {
                            count_item_soldout_in_nakagawa++;
                        }
                        if (analysis[i].items[k].city_cd == 40230) {
                            count_item_soldout_in_itoshima++;
                        }
                        if (analysis[i].items[k].city_cd == 40345) {
                            count_item_soldout_in_shingu++;
                        }
                        if (analysis[i].items[k].city_cd == 40203) {
                            count_item_soldout_in_kurume++;
                        }
                        if (analysis[i].items[k].city_cd == 40349) {
                            count_item_soldout_in_kasuya++;
                        }
                        if (analysis[i].items[k].city_cd == 40341) {
                            count_item_soldout_in_umimachi++;
                        }
                        if (analysis[i].items[k].city_cd == 40221) {
                            count_item_soldout_in_dazaifu++;
                        }
                        if (analysis[i].items[k].city_cd == 40207) {
                            count_item_soldout_in_yanagawa++;
                        }
                        if (analysis[i].items[k].city_cd == 40447) {
                            count_item_soldout_in_chikuzen++;
                        }
                        if (analysis[i].items[k].city_cd == 41345) {
                            count_item_soldout_in_kamimine++;
                        }
                        if (analysis[i].items[k].city_cd == 40503) {
                            count_item_soldout_in_tachiarai++;
                        }
                        if (analysis[i].items[k].city_cd == 40216) {
                            count_item_soldout_in_ogori++;
                        }
                        if (analysis[i].items[k].city_cd == 40647) {
                            count_item_soldout_in_chikujou++;
                        }
                        if (analysis[i].items[k].city_cd == 40217) {
                            count_item_soldout_in_chikushino++;
                        }
                        if (analysis[i].items[k].city_cd == 41346) {
                            count_item_soldout_in_miyaki++;
                        }
                        if (analysis[i].items[k].city_cd == 41203) {
                            count_item_soldout_in_tosu++;
                        }
                        if (analysis[i].items[k].city_cd == 41341) {
                            count_item_soldout_in_kiyama++;
                        }

                        //time chart
                        if (analysis[i].items[k].date_soldout >= from_1 && analysis[i].items[k].date_soldout <= to_1) {
                            count_item_soldout_in_range_time_1++;
                        }
                        if (analysis[i].items[k].date_soldout >= from_2 && analysis[i].items[k].date_soldout <= to_2) {
                            count_item_soldout_in_range_time_2++;
                        }
                        if (analysis[i].items[k].date_soldout >= from_3 && analysis[i].items[k].date_soldout <= to_3) {
                            count_item_soldout_in_range_time_3++;
                        }

                        if (analysis[i].items[k].date_build > analysis[i].items[k].date_soldout) {
                            count_item_soldout_before_complete++;
                        }
                        sum_price_soldout = sum_price_soldout + parseInt(analysis[i].items[k].price_soldout);
                    }


                    //time sale
                    count_item_time++;
                    sum_time = sum_time + parseInt(analysis[i].items[k].time);

                    //avg time change price
                    for (var m = 0; m < analysis[i].items[k].history.length; m++) {
                        if (analysis[i].items[k].history[m].stat_cd == 2) {
                            for (var n = m - 1; n >= 0; n--) {
                                if (analysis[i].items[k].history[m].stat_cd == "2" || analysis[i].items[k].history[m].stat_cd == "1") {
                                    if (analysis[i].items[k].history[m].hist_regist != null && analysis[i].items[k].history[n].hist_regist != null) {
                                        count_item_time_change_price++;

                                        var down_price = parseInt(analysis[i].items[k].history[n].hist_price) - parseInt(analysis[i].items[k].history[m].hist_price);
                                        var down_price_rate_each_time = parseInt(down_price) / parseInt(analysis[i].items[k].history[n].hist_price);
                                        sum_down_price_rate_each_time = sum_down_price_rate_each_time + down_price_rate_each_time;

                                        var oneDay = 24 * 60 * 60 * 1000;
                                        var firstDate = new Date(analysis[i].items[k].history[m].hist_regist);
                                        var secondDate = new Date(analysis[i].items[k].history[n].hist_regist);
                                        var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay)));
                                        sum_time_change_price = sum_time_change_price + parseInt(diffDays);
                                        break;
                                    }
                                }
                            }
                        }
                    }

                    //avg down price rate
                    if (analysis[i].items[k].price_regist != null && analysis[i].items[k].price_soldout != null) {
                        var down_price = (analysis[i].items[k].price_regist - analysis[i].items[k].price_soldout);

                        sum_down_price = sum_down_price + down_price;
                        sum_down_price_rate = sum_down_price_rate + parseFloat(down_price / analysis[i].items[k].price_regist);
                        count_item_down_price_rate++;

                        if (analysis[i].items[k].price_regist != analysis[i].items[k].price_soldout) {
                            count_num_item_down_price++;
                        }
                    }
                }
                
                //market_rate
                count_item_market_rate++;
            }

            //selling number
            var count_remaining = 0;
            for (var k = 0; k < remaining.length; k++) {
                if (remaining[k].seller_cd == analysis[i].seller_cd) {
                    count_remaining = count_remaining + parseInt(remaining[k].count);
                }
            }
            sale_number = count_remaining + count_item_sale_number;
            selling_number = count_remaining + count_item_sale_number - count_item_soldout;
            window.market_rate.push([analysis[i].seller_name, selling_number]);

            for (var k = 0; k < remaining.length; k++) {
                if (remaining[k].seller_cd == analysis[i].seller_cd) {
                    if (remaining[k].city_cd == 40136) {
                        count_item_remaining_in_jonan = parseInt(remaining[k].count);
                    }
                    if (remaining[k].city_cd == 40134) {
                        count_item_remaining_in_minami = parseInt(remaining[k].count);
                    }
                    if (remaining[k].city_cd == 40135) {
                        count_item_remaining_in_nishi = parseInt(remaining[k].count);
                    }
                    if (remaining[k].city_cd == 40131) {
                        count_item_remaining_in_higashi = parseInt(remaining[k].count);
                    }
                    if (remaining[k].city_cd == 40133) {
                        count_item_remaining_in_chuo = parseInt(remaining[k].count);
                    }
                    if (remaining[k].city_cd == 40132) {
                        count_item_remaining_in_hakata = parseInt(remaining[k].count);
                    }
                    if (remaining[k].city_cd == 40137) {
                        count_item_remaining_in_sawara = parseInt(remaining[k].count);
                    }
                    if (remaining[k].city_cd == 40223) {
                        count_item_remaining_in_koga = parseInt(remaining[k].count);
                    }
                    if (remaining[k].city_cd == 40342) {
                        count_item_remaining_in_sasaguri = parseInt(remaining[k].count);
                    }
                    if (remaining[k].city_cd == 40343) {
                        count_item_remaining_in_shime = parseInt(remaining[k].count);
                    }
                    if (remaining[k].city_cd == 40218) {
                        count_item_remaining_in_kasuga = parseInt(remaining[k].count);
                    }
                    if (remaining[k].city_cd == 40224) {
                        count_item_remaining_in_fukutsu = parseInt(remaining[k].count);
                    }
                    if (remaining[k].city_cd == 40344) {
                        count_item_remaining_in_sue = parseInt(remaining[k].count);
                    }
                    if (remaining[k].city_cd == 40219) {
                        count_item_remaining_in_ounojou = parseInt(remaining[k].count);
                    }
                    if (remaining[k].city_cd == 40348) {
                        count_item_remaining_in_hisayama = parseInt(remaining[k].count);
                    }
                    if (remaining[k].city_cd == 40305) {
                        count_item_remaining_in_nakagawa = parseInt(remaining[k].count);
                    }
                    if (remaining[k].city_cd == 40230) {
                        count_item_remaining_in_itoshima = parseInt(remaining[k].count);
                    }
                    if (remaining[k].city_cd == 40345) {
                        count_item_remaining_in_shingu = parseInt(remaining[k].count);
                    }
                    if (remaining[k].city_cd == 40203) {
                        count_item_remaining_in_kurume = parseInt(remaining[k].count);
                    }
                    if (remaining[k].city_cd == 40349) {
                        count_item_remaining_in_kasuya = parseInt(remaining[k].count);
                    }
                    if (remaining[k].city_cd == 40341) {
                        count_item_remaining_in_umimachi = parseInt(remaining[k].count);
                    }
                    if (remaining[k].city_cd == 40221) {
                        count_item_remaining_in_dazaifu = parseInt(remaining[k].count);
                    }
                    if (remaining[k].city_cd == 40207) {
                        count_item_remaining_in_yanagawa = parseInt(remaining[k].count);
                    }
                    if (remaining[k].city_cd == 40447) {
                        count_item_remaining_in_chikuzen = parseInt(remaining[k].count);
                    }
                    if (remaining[k].city_cd == 41345) {
                        count_item_remaining_in_kamimine = parseInt(remaining[k].count);
                    }
                    if (remaining[k].city_cd == 40503) {
                        count_item_remaining_in_tachiarai = parseInt(remaining[k].count);
                    }
                    if (remaining[k].city_cd == 40216) {
                        count_item_remaining_in_ogori = parseInt(remaining[k].count);
                    }
                    if (remaining[k].city_cd == 40647) {
                        count_item_remaining_in_chikujou = parseInt(remaining[k].count);
                    }
                    if (remaining[k].city_cd == 40217) {
                        count_item_remaining_in_chikushino = parseInt(remaining[k].count);
                    }
                    if (remaining[k].city_cd == 41346) {
                        count_item_remaining_in_miyaki = parseInt(remaining[k].count);
                    }
                    if (remaining[k].city_cd == 41203) {
                        count_item_remaining_in_tosu = parseInt(remaining[k].count);
                    }
                    if (remaining[k].city_cd == 41341) {
                        count_item_remaining_in_kiyama = parseInt(remaining[k].count);
                    }
                }
            }

            window.market_rate_jonan.push([analysis[i].seller_name, count_item_remaining_in_jonan + parseInt(count_item_in_jonan - count_item_soldout_in_jonan)]);
            window.market_rate_minami.push([analysis[i].seller_name, count_item_remaining_in_minami + parseInt(count_item_in_minami - count_item_soldout_in_minami)]);
            window.market_rate_nishi.push([analysis[i].seller_name, count_item_remaining_in_nishi + parseInt(count_item_in_nishi - count_item_soldout_in_nishi)]);
            window.market_rate_higashi.push([analysis[i].seller_name, count_item_remaining_in_higashi + parseInt(count_item_in_higashi - count_item_soldout_in_higashi)]);
            window.market_rate_chuo.push([analysis[i].seller_name, count_item_remaining_in_chuo + parseInt(count_item_in_chuo - count_item_soldout_in_chuo)]);
            window.market_rate_hakata.push([analysis[i].seller_name, count_item_remaining_in_hakata + parseInt(count_item_in_hakata - count_item_soldout_in_hakata)]);
            window.market_rate_sawara.push([analysis[i].seller_name, count_item_remaining_in_sawara + parseInt(count_item_in_sawara - count_item_soldout_in_sawara)]);
            window.market_rate_koga.push([analysis[i].seller_name, count_item_remaining_in_koga + parseInt(count_item_in_koga - count_item_soldout_in_koga)]);
            window.market_rate_sasaguri.push([analysis[i].seller_name, count_item_remaining_in_sasaguri + parseInt(count_item_in_sasaguri - count_item_soldout_in_sasaguri)]);
            window.market_rate_shime.push([analysis[i].seller_name, count_item_remaining_in_shime + parseInt(count_item_in_shime - count_item_soldout_in_shime)]);
            window.market_rate_kasuga.push([analysis[i].seller_name, count_item_remaining_in_kasuga + parseInt(count_item_in_kasuga - count_item_soldout_in_kasuga)]);
            window.market_rate_fukutsu.push([analysis[i].seller_name, count_item_remaining_in_fukutsu + parseInt(count_item_in_fukutsu - count_item_soldout_in_fukutsu)]);
            window.market_rate_sue.push([analysis[i].seller_name, count_item_remaining_in_sue + parseInt(count_item_in_sue - count_item_soldout_in_sue)]);
            window.market_rate_ounojou.push([analysis[i].seller_name, count_item_remaining_in_ounojou + parseInt(count_item_in_ounojou - count_item_soldout_in_ounojou)]);
            window.market_rate_hisayama.push([analysis[i].seller_name, count_item_remaining_in_hisayama + parseInt(count_item_in_hisayama - count_item_soldout_in_hisayama)]);
            window.market_rate_nakagawa.push([analysis[i].seller_name, count_item_remaining_in_nakagawa + parseInt(count_item_in_nakagawa - count_item_soldout_in_nakagawa)]);
            window.market_rate_itoshima.push([analysis[i].seller_name, count_item_remaining_in_itoshima + parseInt(count_item_in_itoshima - count_item_soldout_in_itoshima)]);
            window.market_rate_shingu.push([analysis[i].seller_name, count_item_remaining_in_shingu + parseInt(count_item_in_shingu - count_item_soldout_in_shingu)]);
            window.market_rate_kurume.push([analysis[i].seller_name, count_item_remaining_in_kurume + parseInt(count_item_in_kurume - count_item_soldout_in_kurume)]);
            window.market_rate_kasuya.push([analysis[i].seller_name, count_item_remaining_in_kasuya + parseInt(count_item_in_kasuya - count_item_soldout_in_kasuya)]);
            window.market_rate_umimachi.push([analysis[i].seller_name, count_item_remaining_in_umimachi + parseInt(count_item_in_umimachi - count_item_soldout_in_umimachi)]);
            window.market_rate_dazaifu.push([analysis[i].seller_name, count_item_remaining_in_dazaifu + parseInt(count_item_in_dazaifu - count_item_soldout_in_dazaifu)]);
            window.market_rate_yanagawa.push([analysis[i].seller_name, count_item_remaining_in_yanagawa + parseInt(count_item_in_yanagawa - count_item_soldout_in_yanagawa)]);
            window.market_rate_chikuzen.push([analysis[i].seller_name, count_item_remaining_in_chikuzen + parseInt(count_item_in_chikuzen - count_item_soldout_in_chikuzen)]);
            window.market_rate_kamimine.push([analysis[i].seller_name, count_item_remaining_in_kamimine + parseInt(count_item_in_kamimine - count_item_soldout_in_kamimine)]);
            window.market_rate_tachiarai.push([analysis[i].seller_name, count_item_remaining_in_tachiarai + parseInt(count_item_in_tachiarai - count_item_soldout_in_tachiarai)]);
            window.market_rate_ogori.push([analysis[i].seller_name, count_item_remaining_in_ogori + parseInt(count_item_in_ogori - count_item_soldout_in_ogori)]);
            window.market_rate_chikujou.push([analysis[i].seller_name, count_item_remaining_in_chikujou + parseInt(count_item_in_chikujou - count_item_soldout_in_chikujou)]);
            window.market_rate_chikushino.push([analysis[i].seller_name, count_item_remaining_in_chikushino + parseInt(count_item_in_chikushino - count_item_soldout_in_chikushino)]);
            window.market_rate_miyaki.push([analysis[i].seller_name, count_item_remaining_in_miyaki + parseInt(count_item_in_miyaki - count_item_soldout_in_miyaki)]);
            window.market_rate_tosu.push([analysis[i].seller_name, count_item_remaining_in_tosu + parseInt(count_item_in_tosu - count_item_soldout_in_tosu)]);
            window.market_rate_kiyama.push([analysis[i].seller_name, count_item_remaining_in_kiyama + parseInt(count_item_in_kiyama - count_item_soldout_in_kiyama)]);

            var selling_number_in_range_time_1 = count_remaining + parseInt(count_item_in_range_time_1 - count_item_soldout_in_range_time_1);
            window.market_rate_time_in_range_1.push([analysis[i].seller_name, selling_number_in_range_time_1]);
            var selling_number_in_range_time_2 = selling_number_in_range_time_1 + parseInt(count_item_in_range_time_2 - count_item_soldout_in_range_time_2);
            window.market_rate_time_in_range_2.push([analysis[i].seller_name, selling_number_in_range_time_2]);
            var selling_number_in_range_time_3 = selling_number_in_range_time_2 + parseInt(count_item_in_range_time_3 - count_item_soldout_in_range_time_3);
            window.market_rate_time_in_range_3.push([analysis[i].seller_name, selling_number_in_range_time_3]);

            //soldout number
            window.soldout_rate.push([analysis[i].seller_name, parseInt(count_item_soldout)]);
            window.soldout_rate_jonan.push([analysis[i].seller_name, parseInt(count_item_soldout_in_jonan)]);
            window.soldout_rate_minami.push([analysis[i].seller_name, parseInt(count_item_soldout_in_minami)]);
            window.soldout_rate_nishi.push([analysis[i].seller_name, parseInt(count_item_soldout_in_nishi)]);
            window.soldout_rate_higashi.push([analysis[i].seller_name, parseInt(count_item_soldout_in_higashi)]);
            window.soldout_rate_chuo.push([analysis[i].seller_name, parseInt(count_item_soldout_in_chuo)]);
            window.soldout_rate_hakata.push([analysis[i].seller_name, parseInt(count_item_soldout_in_hakata)]);
            window.soldout_rate_sawara.push([analysis[i].seller_name, parseInt(count_item_soldout_in_sawara)]);
            window.soldout_rate_koga.push([analysis[i].seller_name, parseInt(count_item_soldout_in_koga)]);
            window.soldout_rate_sasaguri.push([analysis[i].seller_name, parseInt(count_item_soldout_in_sasaguri)]);
            window.soldout_rate_shime.push([analysis[i].seller_name, parseInt(count_item_soldout_in_shime)]);
            window.soldout_rate_kasuga.push([analysis[i].seller_name, parseInt(count_item_soldout_in_kasuga)]);
            window.soldout_rate_fukutsu.push([analysis[i].seller_name, parseInt(count_item_soldout_in_fukutsu)]);
            window.soldout_rate_sue.push([analysis[i].seller_name, parseInt(count_item_soldout_in_sue)]);
            window.soldout_rate_ounojou.push([analysis[i].seller_name, parseInt(count_item_soldout_in_ounojou)]);
            window.soldout_rate_hisayama.push([analysis[i].seller_name, parseInt(count_item_soldout_in_hisayama)]);
            window.soldout_rate_nakagawa.push([analysis[i].seller_name, parseInt(count_item_soldout_in_nakagawa)]);
            window.soldout_rate_itoshima.push([analysis[i].seller_name, parseInt(count_item_soldout_in_itoshima)]);
            window.soldout_rate_shingu.push([analysis[i].seller_name, parseInt(count_item_soldout_in_shingu)]);
            window.soldout_rate_kurume.push([analysis[i].seller_name, parseInt(count_item_soldout_in_kurume)]);
            window.soldout_rate_kasuya.push([analysis[i].seller_name, parseInt(count_item_soldout_in_kasuya)]);
            window.soldout_rate_umimachi.push([analysis[i].seller_name, parseInt(count_item_soldout_in_umimachi)]);
            window.soldout_rate_dazaifu.push([analysis[i].seller_name, parseInt(count_item_soldout_in_dazaifu)]);
            window.soldout_rate_yanagawa.push([analysis[i].seller_name, parseInt(count_item_soldout_in_yanagawa)]);
            window.soldout_rate_chikuzen.push([analysis[i].seller_name, parseInt(count_item_soldout_in_chikuzen)]);
            window.soldout_rate_kamimine.push([analysis[i].seller_name, parseInt(count_item_soldout_in_kamimine)]);
            window.soldout_rate_tachiarai.push([analysis[i].seller_name, parseInt(count_item_soldout_in_tachiarai)]);
            window.soldout_rate_ogori.push([analysis[i].seller_name, parseInt(count_item_soldout_in_ogori)]);
            window.soldout_rate_chikujou.push([analysis[i].seller_name, parseInt(count_item_soldout_in_chikujou)]);
            window.soldout_rate_chikushino.push([analysis[i].seller_name, parseInt(count_item_soldout_in_chikushino)]);
            window.soldout_rate_miyaki.push([analysis[i].seller_name, parseInt(count_item_soldout_in_miyaki)]);
            window.soldout_rate_tosu.push([analysis[i].seller_name, parseInt(count_item_soldout_in_tosu)]);
            window.soldout_rate_kiyama.push([analysis[i].seller_name, parseInt(count_item_soldout_in_kiyama)]);

            window.soldout_rate_time_in_range_1.push([analysis[i].seller_name, parseInt(count_item_soldout_in_range_time_1)]);
            window.soldout_rate_time_in_range_2.push([analysis[i].seller_name, parseInt(count_item_soldout_in_range_time_2)]);
            window.soldout_rate_time_in_range_3.push([analysis[i].seller_name, parseInt(count_item_soldout_in_range_time_3)]);

            //avg price regist
            var avg_price_regist = Math.round(sum_price_regist / count_item_price_regist);
            if (count_item_price_regist == 0) {
                avg_price_regist = '----';
            }

            //avg price soldout
            var avg_price_soldout = Math.round(sum_price_soldout / count_item_price_soldout);
            if (count_item_price_soldout == 0) {
                avg_price_soldout = '----';
            }

            //rate soldout before complete
            rate_soldout_before_complete = (count_item_soldout_before_complete / count_item_price_soldout * 100).toFixed(2);
            if (count_item_price_soldout == 0) {
                rate_soldout_before_complete = '----';
            }

            //time sale
            var avg_time_time = Math.round(sum_time / count_item_time);
            if (count_item_time == 0) {
                avg_time_time = '----';
            }
            //avg time change price
            var avg_time_time_change_price = Math.round(sum_time_change_price / count_item_time_change_price);
            if (count_item_time_change_price == 0) {
                avg_time_time_change_price = '----';
            }

            //avg down price
            var avg_down_price = Math.round(sum_down_price / count_item_down_price_rate);
            if (count_item_down_price_rate == 0) {
                avg_down_price = '----';
            }

            //avg down price rate
            var rate_down_price_rate = (sum_down_price_rate / count_item_down_price_rate * 100).toFixed(2);
            if (count_item_down_price_rate == 0) {
                rate_down_price_rate = '----';
            }

            //avg down price each time
            var avg_down_price_each_time = Math.round(sum_down_price / count_item_time_change_price);
            if (count_item_time_change_price == 0) {
                avg_down_price_each_time = 0;
            }

            //avg down price rate each time
            var avg_down_price_rate_each_time = (sum_down_price_rate_each_time / count_item_time_change_price * 100).toFixed(2);
            if (count_item_time_change_price == 0) {
                avg_down_price_rate_each_time = 0;
            }

            //avg down price times
            var avg_down_price_times = (count_item_time_change_price / count_item_down_price_rate).toFixed(2);
            if (count_item_down_price_rate == 0) {
                avg_down_price_times = 0;
            }

            //market rate
            var rate_market_rate = (sale_number / (count_total_item) * 100).toFixed(2);
            if (count_total_item == 0) {
                rate_market_rate = 0;
            }

            //prepare html
            //sale number
            td_sale_number = td_sale_number + '<td>' + sale_number + '件'
                    + '<input type="hidden" id="sale_number_'
                    + analysis[i].seller_cd
                    + '" value="' + sale_number + '" /></td>';

            //selling number
            td_selling_number = td_selling_number + '<td>' + selling_number + '件'
                    + '<input type="hidden" id="selling_number_'
                    + analysis[i].seller_cd
                    + '" value="' + selling_number + '" /></td>';

            //soldout number
            td_soldout_number = td_soldout_number + '<td>' + count_item_soldout + '件'
                    + '<input type="hidden" id="soldout_number_'
                    + analysis[i].seller_cd
                    + '" value="' + count_item_soldout + '" /></td>';

            //soldout before complete number
            td_soldout_before_complete_number = td_soldout_before_complete_number + '<td>' + count_item_soldout_before_complete + '件'
                    + '<input type="hidden" id="soldout_before_complete_number_'
                    + analysis[i].seller_cd
                    + '" value="' + count_item_soldout_before_complete + '" /></td>';

            //rate soldout before complete
            td_rate_soldout_before_complete = td_rate_soldout_before_complete + '<td>' + rate_soldout_before_complete + '%'
                    + '<input type="hidden" id="rate_soldout_before_complete_'
                    + analysis[i].seller_cd
                    + '" value="' + rate_soldout_before_complete + '" /></td>';

            //avg price regist
            td_avg_price_regist = td_avg_price_regist + '<td>' + avg_price_regist + '万円'
                    + '<input type="hidden" id="avg_price_regist_'
                    + analysis[i].seller_cd
                    + '" value="' + avg_price_regist + '" />'
                    + '<input type="hidden" id="count_price_regist_'
                    + analysis[i].seller_cd
                    + '" value="' + count_item_price_regist + '" /></td>';

            //avg price soldout
            td_avg_price_soldout = td_avg_price_soldout + '<td>' + avg_price_soldout + '万円'
                    + '<input type="hidden" id="avg_price_soldout_'
                    + analysis[i].seller_cd
                    + '" value="' + avg_price_soldout + '" /></td>';

            //time sale
            time = time + '<td>' + avg_time_time + '日間'
                    + '<input type="hidden" id="time_'
                    + analysis[i].seller_cd
                    + '" value="' + avg_time_time + '" /></td>';

            //avg time change price
            avg_time_change_price = avg_time_change_price + '<td>' + avg_time_time_change_price + '日間'
                    + '<input type="hidden" id="time_change_price_'
                    + analysis[i].seller_cd
                    + '" value="' + avg_time_time_change_price + '" /></td>';

            //avg down price
            td_avg_down_price = td_avg_down_price + '<td>' + avg_down_price + '万円'
                    + '<input type="hidden" id="down_price_'
                    + analysis[i].seller_cd
                    + '" value="' + avg_down_price + '" /></td>';

            //avg down price rate
            avg_down_price_rate = avg_down_price_rate + '<td>' + rate_down_price_rate + '%'
                    + '<input type="hidden" id="down_price_rate_'
                    + analysis[i].seller_cd
                    + '" value="' + rate_down_price_rate + '" /></td>';

            //number item down price
            td_num_item_down_price = td_num_item_down_price + '<td>' + count_num_item_down_price + '件'
                    + '<input type="hidden" id="num_item_down_price_'
                    + analysis[i].seller_cd
                    + '" value="' + count_num_item_down_price + '" /></td>';

            //avg down price each time
            td_avg_down_price_each_time = td_avg_down_price_each_time + '<td>' + avg_down_price_each_time + '万円'
                    + '<input type="hidden" id="down_price_each_time_'
                    + analysis[i].seller_cd
                    + '" value="' + avg_down_price_each_time + '" />'
                    + '<input type="hidden" id="count_item_time_change_price_'
                    + analysis[i].seller_cd
                    + '" value="' + count_item_time_change_price + '" /></td>';

            //avg down price rate each time
            td_avg_down_price_rate_each_times = td_avg_down_price_rate_each_times + '<td>' + avg_down_price_rate_each_time + '%'
                    + '<input type="hidden" id="down_price_rate_each_time_'
                    + analysis[i].seller_cd
                    + '" value="' + avg_down_price_rate_each_time + '" /></td>';

            //avg down price times
            td_avg_down_price_times = td_avg_down_price_times + '<td>' + avg_down_price_times
                    + '<input type="hidden" id="down_price_times_'
                    + analysis[i].seller_cd
                    + '" value="' + avg_down_price_times + '" /></td>';

            //market rate
            market_rate = market_rate + '<td>' + rate_market_rate + '%'
                    + '<input type="hidden" id="market_rate_'
                    + analysis[i].seller_cd
                    + '" value="' + rate_market_rate + '" /></td>';

            //append to table
            $('#name').append('<th>' + analysis[i].seller_name + '</th>');
            $('#sale_number').append(td_sale_number);
            $('#selling_number').append(td_selling_number);
            $('#soldout_number').append(td_soldout_number);
            $('#soldout_before_complete_number').append(td_soldout_before_complete_number);
            $('#rate_soldout_before_complete').append(td_rate_soldout_before_complete);
            $('#avg_price_regist').append(td_avg_price_regist);
            $('#avg_price_sold').append(td_avg_price_soldout);
            $('#avg_time_sold').append(time);
            $('#avg_time_change_circle').append(avg_time_change_price);
            $('#avg_down_price').append(td_avg_down_price);
            $('#avg_down_price_rate').append(avg_down_price_rate);
            $('#num_item_down_price').append(td_num_item_down_price);
            $('#avg_down_price_each_time').append(td_avg_down_price_each_time);
            $('#avg_down_price_rate_each_times').append(td_avg_down_price_rate_each_times);
            $('#avg_down_price_times').append(td_avg_down_price_times);
        }
    }

    //total
    var sale_number = 0;
    var selling_number = 0;
    var soldout_number = 0;
    var soldout_before_complete_number = 0;
    var avg_price_regist = 0;
    var avg_price_sold = 0;
    var count_time_change_price = 0;
    var sum_down_price_each_time = 0;
    var sum_down_price_rate_each_time_total = 0;
    var sum_down_price_times = 0;
    var time = 0;
    var avg_time_change_circle = 0;
    var sum = 0;
    var count_item = 0;
    var down_price = 0;
    var down_price_rate = 0;
    var num_item_down_price = 0;
    var market_rate = 0;
    var regist_number = 0;

    for (var i = 0; i < analysis.length; i++) {
        //sale number
        var per_seller = parseInt($('#sale_number_' + analysis[i].seller_cd).val());
        if (per_seller) {
            sale_number = sale_number + per_seller;
        }

        //selling number
        var per_seller = parseInt($('#selling_number_' + analysis[i].seller_cd).val());
        if (per_seller) {
            selling_number = selling_number + per_seller;
        }

        //soldout number
        var per_seller = parseInt($('#soldout_number_' + analysis[i].seller_cd).val());
        if (per_seller) {
            soldout_number = soldout_number + per_seller;
        }

        //soldout before complete number
        var per_seller = parseInt($('#soldout_before_complete_number_' + analysis[i].seller_cd).val());
        if (per_seller) {
            soldout_before_complete_number = soldout_before_complete_number + per_seller;
        }

        //avg price regist
        var per_seller = 0;
        per_seller = parseInt($('#avg_price_regist_' + analysis[i].seller_cd).val())
                * parseInt($('#count_price_regist_' + analysis[i].seller_cd).val());

        if (per_seller) {
            avg_price_regist = avg_price_regist + per_seller;
        }

        //avg price soldout
        var per_seller = 0;
        per_seller = parseInt($('#avg_price_soldout_' + analysis[i].seller_cd).val())
                * parseInt($('#soldout_number_' + analysis[i].seller_cd).val());

        if (per_seller) {
            avg_price_sold = avg_price_sold + per_seller;
        }

        //time sale
        var per_seller = 0;
        per_seller = parseInt($('#time_' + analysis[i].seller_cd).val())
                * parseInt($('#soldout_number_' + analysis[i].seller_cd).val());

        if (per_seller) {
            time = time + per_seller;
        }

        //avg time change price
        for (var k = 0; k < analysis[i].items.length; k++) {
            var hist_regist = new Date(analysis[i].items[k].date_soldout);
            for (var m = 0; m < analysis[i].items[k].history.length; m++) {
                if (analysis[i].items[k].history[m].stat_cd == 2) {
                    for (var n = m - 1; n >= 0; n--) {
                        if (analysis[i].items[k].history[m].stat_cd == "2" ||
                                analysis[i].items[k].history[m].stat_cd == "1") {
                            if (analysis[i].items[k].history[m].hist_regist != null && analysis[i].items[k].history[n].hist_regist != null) {
                                var oneDay = 24 * 60 * 60 * 1000;
                                var firstDate = new Date(analysis[i].items[k].history[m].hist_regist);
                                var secondDate = new Date(analysis[i].items[k].history[n].hist_regist);
                                var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay)));

                                count_item++;
                                sum = sum + parseInt(diffDays);
                                break;
                            }
                        }
                    }
                }
            }
        }

        // avg down price
        var per_seller = 0;
        per_seller = parseFloat($('#down_price_' + analysis[i].seller_cd).val())
                * parseInt($('#soldout_number_' + analysis[i].seller_cd).val());

        if (per_seller) {
            down_price = down_price + per_seller;
        }

        // down price rate
        var per_seller = 0;
        per_seller = parseFloat($('#down_price_rate_' + analysis[i].seller_cd).val())
                * parseInt($('#soldout_number_' + analysis[i].seller_cd).val());

        if (per_seller) {
            down_price_rate = down_price_rate + per_seller;
        }

        // number item down price
        var per_seller = 0;
        per_seller = parseFloat($('#num_item_down_price_' + analysis[i].seller_cd).val())

        if (per_seller) {
            num_item_down_price = num_item_down_price + per_seller;
        }

        //count times change price
        var per_seller = 0;
        per_seller = parseInt($('#count_item_time_change_price_' + analysis[i].seller_cd).val());
        if (per_seller) {
            count_time_change_price = count_time_change_price + parseInt(per_seller);
        }

        //avg down price each time
        var per_seller = 0;
        per_seller = $('#down_price_each_time_' + analysis[i].seller_cd).val() * $('#count_item_time_change_price_' + analysis[i].seller_cd).val();
        if (per_seller) {
            sum_down_price_each_time = sum_down_price_each_time + per_seller;
        }

        //avg down price rate each time
        var per_seller = 0;
        per_seller = $('#down_price_rate_each_time_' + analysis[i].seller_cd).val() * $('#count_item_time_change_price_' + analysis[i].seller_cd).val();
        if (per_seller) {
            sum_down_price_rate_each_time_total = sum_down_price_rate_each_time_total + per_seller;
        }

        //avg down price times
        var per_seller = 0;
        per_seller = $('#down_price_times_' + analysis[i].seller_cd).val() * $('#count_item_time_change_price_' + analysis[i].seller_cd).val();
        if (per_seller) {
            sum_down_price_times = sum_down_price_times + per_seller;
        }

        //avg price regist
        regist_number += parseInt($('#count_price_regist_' + analysis[i].seller_cd).val());
    }

    //rate soldout before complete
    rate_soldout_before_complete = (soldout_before_complete_number / soldout_number * 100).toFixed(2);
    if (soldout_number == 0) {
        rate_soldout_before_complete = 0;
    }

    avg_price_regist = Math.round(avg_price_regist / regist_number);
    //avg price soldout
    avg_price_sold = Math.round(avg_price_sold / soldout_number);
    //time sale
    time = Math.round(time / soldout_number);
    //avg time change price
    avg_time_change_circle = Math.round(sum / count_item);
    if (count_item == 0) {
        avg_time_change_circle = '----';
    }

    //down price rate
    down_price = Math.round(down_price / soldout_number);

    //down price rate
    down_price_rate = (down_price_rate / soldout_number).toFixed(2);

    //avg down price each time
    var avg_down_price_each_time_total = Math.round(sum_down_price_each_time / count_time_change_price);

    //avg down price rate each time
    var avg_down_price_rate_each_time_total = (sum_down_price_rate_each_time_total / count_time_change_price).toFixed(2);

    //avg down price times
    var avg_down_price_times_total = (sum_down_price_times / count_time_change_price).toFixed(2);

    if (count_time_change_price == 0) {
        avg_down_price_times_total = 0;
        avg_down_price_rate_each_time_total = 0;
        avg_down_price_each_time_total = 0;
    }

    if (soldout_number == 0) {
        avg_price_regist = '----';
        avg_price_sold = '----';
        time = '----';
        down_price = '----';
        down_price_rate = '----';
    }

    var selling_rate = 0;
    var soldout_rate = 0;

    if (analysis[0].seller_cd != null) {
        for (var i = 0; i < analysis.length; i++) {
            //market rate
            var rate_market_rate = ($('#sale_number_' + analysis[i].seller_cd).val() / sale_number * 100).toFixed(2);
            if (sale_number == 0) {
                rate_market_rate = 0;
            }
            $('#market_rate').append('<td>' + rate_market_rate + '%</td>');
            market_rate = market_rate + parseFloat(rate_market_rate);

            //selling rate per seller
            var selling_rate_per_seller = ($('#selling_number_' + analysis[i].seller_cd).val() / selling_number * 100).toFixed(2);
            if (selling_number == 0) {
                selling_rate_per_seller = 0;
            }
            $('#selling_rate').append('<td>' + selling_rate_per_seller + '%</td>');
            selling_rate += parseFloat(selling_rate_per_seller);

            //soldout rate per seller
            var soldout_rate_per_seller = ($('#soldout_number_' + analysis[i].seller_cd).val() / soldout_number * 100).toFixed(2);
            if (soldout_number == 0) {
                soldout_rate_per_seller = 0;
            }
            $('#soldout_rate').append('<td>' + soldout_rate_per_seller + '%</td>');
            soldout_rate += parseFloat(soldout_rate_per_seller);
        }
    }

    $('#name_all_seller th:first-child').after('<th style="width: 20%;">全体</th>');
    $('#sale_num_all_seller th:first-child').after('<td>' + sale_number
            + '件<input id="sale_number_all" type="hidden" value="' + sale_number + '" /></td>');
    $('#selling_num_all_seller th:first-child').after('<td>' + selling_number + '件</td>');
    $('#selling_rate_all_seller th:first-child').after('<td>' + selling_rate.toFixed(0) + '%</td>');
    $('#soldout_num_all_seller th:first-child').after('<td>' + soldout_number + '件</td>');
    $('#soldout_rate_all_seller th:first-child').after('<td>' + soldout_rate.toFixed(0) + '%</td>');
    $('#soldout_before_complete_num_all_seller th:first-child').after('<td>' + soldout_before_complete_number + '件</td>');
    $('#rat_soldout_before_complete_all_seller th:first-child').after('<td>' + rate_soldout_before_complete + '%</td>');
    $('#avg_pri_regist_all_seller th:first-child').after('<td>' + avg_price_regist + '万円</td>');
    $('#avg_price_sold_all_seller th:first-child').after('<td>' + avg_price_sold + '万円</td>');
    $('#avg_time_sold_all_seller th:first-child').after('<td>' + time + '日間</td>');
    $('#avg_time_change_circle_all_seller th:first-child').after('<td>' + avg_time_change_circle + '日間</td>');
    $('#avg_down_price_all_seller th:first-child').after('<td>' + down_price + '万円</td>');
    $('#avg_down_price_rate_all_seller th:first-child').after('<td>' + down_price_rate + '%</td>');
    $('#number_item_down_price_all_seller th:first-child').after('<td>' + num_item_down_price + '件</td>');
    $('#avg_down_price_each_time_all_seller th:first-child').after('<td>' + avg_down_price_each_time_total + '万円</td>');
    $('#avg_down_price_rate_each_times_all_seller th:first-child').after('<td>' + avg_down_price_rate_each_time_total + '%</td>');
    $('#avg_down_price_times_all_seller th:first-child').after('<td>' + avg_down_price_times_total + '</td>');
    $('#market_rat_all_seller th:first-child').after('<td>' + market_rate.toFixed(0) + '%</td>');
}

function insertAnalysisTableInTimeRange(analysis) {
    var from = $('#from').val();
    var to = $('#to').val();

    var range = Math.abs(new Date(from) - new Date(to)) / 3;

    var from_1 = new Date(from);
    var to_1 = new Date(from_1);
    to_1.setDate(to_1.getDate() + range / 86400 / 1000);
    if (to_1 > new Date(to)) {
        to_1 = new Date(to);
    }

    from_1 = formatDate(from_1);
    to_1 = formatDate(to_1);
    var diff = Math.abs(new Date(to_1) - new Date(from_1)) / 86400 / 1000;
    $('#table_title_1').html(from_1 + ' ~ ' + to_1 + ' (' + diff + ' 日)');
    $('#name_all_seller').append('<th>' + from_1 + ' ~ ' + to_1 + ' (' + diff + ' 日)</th>');
    to_1 = to_1 + ' 23:59:59';

    var from_2 = new Date(from);
    from_2.setDate(from_2.getDate() + range / 86400 / 1000 + 1);
    var to_2 = new Date(from_2);
    to_2.setDate(to_2.getDate() + range / 86400 / 1000);
    if (to_2 > new Date(to)) {
        to_2 = new Date(to);
    }
    if (from_2 > new Date(to)) {
        from_2 = new Date(to);
    }

    from_2 = formatDate(from_2);
    to_2 = formatDate(to_2);
    var diff = Math.abs(new Date(to_2) - new Date(from_2)) / 86400 / 1000;
    $('#table_title_2').html(from_2 + ' ~ ' + to_2 + ' (' + diff + ' 日)');
    $('#name_all_seller').append('<th>' + from_2 + ' ~ ' + to_2 + ' (' + diff + ' 日)</th>');
    to_2 = to_2 + ' 23:59:59';

    var from_3 = new Date(from);
    from_3.setDate(from_3.getDate() + 2 * range / 86400 / 1000 + 1);
    var to_3 = new Date(to);
    if (from_3 > new Date(to)) {
        from_3 = new Date(to);
    }

    from_3 = formatDate(from_3);
    to_3 = formatDate(to_3);
    var diff = Math.abs(new Date(to_3) - new Date(from_3)) / 86400 / 1000;
    $('#table_title_3').html(from_3 + ' ~ ' + to_3 + ' (' + diff + ' 日)');
    $('#name_all_seller').append('<th>' + from_3 + ' ~ ' + to_3 + ' (' + diff + ' 日)</th>');
    to_3 = to_3 + ' 23:59:59';

    for (var u = 1; u <= 3; u++) {
        if (u == 1) {
            var from_day = from_1;
            var to_day = to_1;

        }
        if (u == 2) {
            var from_day = from_2;
            var to_day = to_2;
        }
        if (u == 3) {
            var from_day = from_3;
            var to_day = to_3;
        }

        var remaining = countItemRemaining(from_day);

        for (var i = 0; i < analysis.length; i++) {

            if (analysis[i].seller_cd != null) {
                var td_sale_number = '';
                var td_selling_number = '';
                var td_soldout_number = '';
                var td_soldout_before_complete_number = '';
                var td_rate_soldout_before_complete = '';
                var td_sale_number = '';
                var td_avg_price_regist = '';
                var td_avg_price_soldout = '';
                var time = '';
                var avg_time_change_price = '';
                var td_avg_down_price = '';
                var avg_down_price_rate = '';
                var td_num_item_down_price = '';
                var td_avg_down_price_each_time = '';
                var td_avg_down_price_rate_each_times = '';
                var td_avg_down_price_times = '';
                var market_rate = '';

                var count_item_sale_number = 0;
                var count_item_soldout = 0;
                var count_item_soldout_before_complete = 0;
                var sum_price_regist = 0;
                var count_item_price_regist = 0;
                var sum_price_soldout = 0;
                var count_item_price_soldout = 0;
                var sum_time = 0;
                var count_item_time = 0;
                var sum_time_change_price = 0;
                var count_item_time_change_price = 0;
                var sum_down_price = 0;
                var sum_down_price_rate = 0;
                var count_item_down_price_rate = 0;
                var count_num_item_down_price = 0;
                var sum_down_price_rate_each_time = 0;
                var sum_market_rate = 0;
                var count_item_market_rate = 0;
                var count_total_item = 0;
                for (var n = 0; n < analysis.length; n++) {
                    var count_item_per_seller = 0;
                    for (var k = 0; k < analysis[n].items.length; k++) {
                        if (analysis[n].items[k].regist >= from_day && analysis[n].items[k].regist <= to_day) {
                            count_item_per_seller++;
                        }
                    }
                    count_total_item = count_total_item + count_item_per_seller;
                }

                for (var k = 0; k < analysis[i].items.length; k++) {
                    //sale number
                    //avg price regist
                    //market_rate
                    if (analysis[i].items[k].regist >= from_day && analysis[i].items[k].regist <= to_day) {
                        //sale number
                        count_item_sale_number++;

                        //avg price regist
                        if (analysis[i].items[k].price_regist != null) {
                            count_item_price_regist++;
                            
                            sum_price_regist = sum_price_regist + parseFloat(analysis[i].items[k].price_regist);
                        }

                        //market_rate
                        count_item_market_rate++;
                    }

                    //avg price soldout
                    //time sale
                    //avg time change price
                    //avg down price rate
                    //number item down price
                    if (analysis[i].items[k].date_soldout >= from_day && analysis[i].items[k].date_soldout <= to_day) {
                        //avg price soldout
                        if (analysis[i].items[k].price_soldout != null) {
                            count_item_soldout++;
                            count_item_price_soldout++;

                            if (analysis[i].items[k].date_build > analysis[i].items[k].date_soldout) {
                                count_item_soldout_before_complete++;
                            }
                            sum_price_soldout = sum_price_soldout + parseInt(analysis[i].items[k].price_soldout);
                        }

                        //time sale
                        count_item_time++;
                        sum_time = sum_time + parseInt(analysis[i].items[k].time);

                        //avg time change price
                        for (var m = 0; m < analysis[i].items[k].history.length; m++) {
                            if (analysis[i].items[k].history[m].stat_cd == 2) {
                                for (var n = m - 1; n >= 0; n--) {
                                    if (analysis[i].items[k].history[m].stat_cd == "2" || analysis[i].items[k].history[m].stat_cd == "1") {
                                        if (analysis[i].items[k].history[m].hist_regist != null && analysis[i].items[k].history[n].hist_regist != null) {
                                            count_item_time_change_price++;

                                            var down_price = parseInt(analysis[i].items[k].history[n].hist_price) - parseInt(analysis[i].items[k].history[m].hist_price);
                                            var down_price_rate_each_time = parseInt(down_price) / parseInt(analysis[i].items[k].history[n].hist_price);
                                            sum_down_price_rate_each_time = sum_down_price_rate_each_time + down_price_rate_each_time;
                                            if(down_price < 0) {
                                                console.log(analysis[i].items[k]);
                                                console.log(analysis[i].items[k].history[n].hist_price);
                                                console.log(analysis[i].items[k].history[m].hist_price);
                                            }
                                            var oneDay = 24 * 60 * 60 * 1000;
                                            var firstDate = new Date(analysis[i].items[k].history[m].hist_regist);
                                            var secondDate = new Date(analysis[i].items[k].history[n].hist_regist);
                                            var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay)));
                                            sum_time_change_price = sum_time_change_price + parseInt(diffDays);
                                            break;
                                        }
                                    }
                                }
                            }
                        }

                        //avg down price rate
                        if (analysis[i].items[k].price_regist != null && analysis[i].items[k].price_soldout != null) {
                            var down_price = (analysis[i].items[k].price_regist - analysis[i].items[k].price_soldout);

                            sum_down_price = sum_down_price + down_price;
                            sum_down_price_rate = sum_down_price_rate + parseFloat(down_price / analysis[i].items[k].price_regist);
                            count_item_down_price_rate++;

                            if (analysis[i].items[k].price_regist != analysis[i].items[k].price_soldout) {
                                count_num_item_down_price++;
                            }
                        }
                    }
                }


                //selling number
                var count_remaining = 0;
                for (var k = 0; k < remaining.length; k++) {
                    if (remaining[k].seller_cd == analysis[i].seller_cd) {
                        count_remaining = count_remaining + parseInt(remaining[k].count);
                    }
                }
                sale_number = count_remaining + count_item_sale_number;
                selling_number = count_remaining + count_item_sale_number - count_item_soldout;

                //avg price regist
                var avg_price_regist = Math.round(sum_price_regist / count_item_price_regist);
                if (count_item_price_regist == 0) {
                    avg_price_regist = '----';
                }

                //avg price soldout
                var avg_price_soldout = Math.round(sum_price_soldout / count_item_price_soldout);
                if (count_item_price_soldout == 0) {
                    avg_price_soldout = '----';
                }

                //rate soldout before complete
                rate_soldout_before_complete = (count_item_soldout_before_complete / count_item_price_soldout * 100).toFixed(2);
                if (count_item_price_soldout == 0) {
                    rate_soldout_before_complete = '----';
                }

                //time sale
                var avg_time_time = Math.round(sum_time / count_item_time);
                if (count_item_time == 0) {
                    avg_time_time = '----';
                }

                //avg time change price
                var avg_time_time_change_price = Math.round(sum_time_change_price / count_item_time_change_price);
                if (count_item_time_change_price == 0) {
                    avg_time_time_change_price = '----';
                }

                //avg down price
                var avg_down_price = Math.round(sum_down_price / count_item_down_price_rate);
                if (count_item_down_price_rate == 0) {
                    avg_down_price = '----';
                }

                //avg down price rate
                var rate_down_price_rate = (sum_down_price_rate / count_item_down_price_rate * 100).toFixed(2);
                if (count_item_down_price_rate == 0) {
                    rate_down_price_rate = '----';
                }

                //avg down price each time
                var avg_down_price_each_time = Math.round(sum_down_price / count_item_time_change_price);
                if (count_item_time_change_price == 0) {
                    avg_down_price_each_time = 0;
                }

                //avg down price rate each time
                var avg_down_price_rate_each_time = (sum_down_price_rate_each_time / count_item_time_change_price * 100).toFixed(2);
                if (count_item_time_change_price == 0) {
                    avg_down_price_rate_each_time = 0;
                }

                //avg down price times
                var avg_down_price_times = (count_item_time_change_price / count_item_down_price_rate).toFixed(2);
                if (count_item_down_price_rate == 0) {
                    avg_down_price_times = 0;
                }

                //market rate
                var rate_market_rate = (count_item_market_rate / count_total_item * 100).toFixed(2);
                if (count_total_item == 0) {
                    rate_market_rate = 0;
                }

                //prepare html
                //sale number
                td_sale_number = td_sale_number + '<td>' + sale_number
                        + '件<input type="hidden" id="sale_number_'
                        + analysis[i].seller_cd + '_' + u
                        + '" value="' + sale_number + '" />'
                        + '<input type="hidden" id="regist_number_'
                        + analysis[i].seller_cd + '_' + u
                        + '" value="' + count_item_price_regist + '" /></td>';

                //selling number
                td_selling_number = td_selling_number + '<td>' + selling_number
                        + '件<input type="hidden" id="selling_number_'
                        + analysis[i].seller_cd + '_' + u
                        + '" value="' + selling_number + '" /></td>';

                //soldout number
                td_soldout_number = td_soldout_number + '<td>' + count_item_soldout
                        + '件<input type="hidden" id="soldout_number_'
                        + analysis[i].seller_cd + '_' + u
                        + '" value="' + count_item_soldout + '" /></td>';

                //soldout before complete number
                td_soldout_before_complete_number = td_soldout_before_complete_number + '<td>' + count_item_soldout_before_complete
                        + '件<input type="hidden" id="soldout_before_complete_number_'
                        + analysis[i].seller_cd + '_' + u
                        + '" value="' + count_item_soldout_before_complete + '" /></td>';

                //rate soldout before complete
                td_rate_soldout_before_complete = td_rate_soldout_before_complete + '<td>' + rate_soldout_before_complete + '%'
                        + '<input type="hidden" id="rate_soldout_before_complete_'
                        + analysis[i].seller_cd + '_' + u
                        + '" value="' + rate_soldout_before_complete + '" /></td>';

                //avg price regist
                td_avg_price_regist = td_avg_price_regist + '<td>' + avg_price_regist + '万円'
                        + '<input type="hidden" id="avg_price_regist_'
                        + analysis[i].seller_cd + '_' + u
                        + '" value="' + avg_price_regist + '" />'
                        + '<input type="hidden" id="count_price_regist_'
                        + analysis[i].seller_cd + '_' + u
                        + '" value="' + count_item_price_regist + '" /></td>';

                //avg price soldout
                td_avg_price_soldout = td_avg_price_soldout + '<td>' + avg_price_soldout + '万円'
                        + '<input type="hidden" id="avg_price_soldout_'
                        + analysis[i].seller_cd + '_' + u
                        + '" value="' + avg_price_soldout + '" /></td>';

                //time sale
                time = time + '<td>' + avg_time_time + '日間'
                        + '<input type="hidden" id="time_'
                        + analysis[i].seller_cd + '_' + u
                        + '" value="' + avg_time_time + '" /></td>';

                //avg time change price
                avg_time_change_price = avg_time_change_price + '<td>' + avg_time_time_change_price + '日間'
                        + '<input type="hidden" id="time_change_price_'
                        + analysis[i].seller_cd + '_' + u
                        + '" value="' + avg_time_time_change_price + '" /></td>';

                //avg down price
                td_avg_down_price = td_avg_down_price + '<td>' + avg_down_price + '万円'
                        + '<input type="hidden" id="down_price_'
                        + analysis[i].seller_cd + '_' + u
                        + '" value="' + avg_down_price + '" /></td>';

                //avg down price rate
                avg_down_price_rate = avg_down_price_rate + '<td>' + rate_down_price_rate + '%'
                        + '<input type="hidden" id="down_price_rate_'
                        + analysis[i].seller_cd + '_' + u
                        + '" value="' + rate_down_price_rate + '" /></td>';

                //number item down price
                td_num_item_down_price = td_num_item_down_price + '<td>' + count_num_item_down_price + '件'
                        + '<input type="hidden" id="num_item_down_price_'
                        + analysis[i].seller_cd + '_' + u
                        + '" value="' + count_num_item_down_price + '" /></td>';

                //avg down price each time
                td_avg_down_price_each_time = td_avg_down_price_each_time + '<td>' + avg_down_price_each_time + '万円'
                        + '<input type="hidden" id="down_price_each_time_'
                        + analysis[i].seller_cd + '_' + u
                        + '" value="' + avg_down_price_each_time + '" />'
                        + '<input type="hidden" id="count_item_time_change_price_'
                        + analysis[i].seller_cd + '_' + u
                        + '" value="' + count_item_time_change_price + '" /></td>';

                //avg down price rate each time
                td_avg_down_price_rate_each_times = td_avg_down_price_rate_each_times + '<td>' + avg_down_price_rate_each_time + '%'
                        + '<input type="hidden" id="down_price_rate_each_time_'
                        + analysis[i].seller_cd + '_' + u
                        + '" value="' + avg_down_price_rate_each_time + '" /></td>';
                
                //avg down price times
                td_avg_down_price_times = td_avg_down_price_times + '<td>' + avg_down_price_times
                        + '<input type="hidden" id="down_price_times_'
                        + analysis[i].seller_cd + '_' + u
                        + '" value="' + avg_down_price_times + '" /></td>';

                //market rate
                market_rate = market_rate + '<td>' + rate_market_rate + '%'
                        + '<input type="hidden" id="market_rate_'
                        + analysis[i].seller_cd + '_' + u
                        + '" value="' + rate_market_rate + '" /></td>';

                //append to table
                $('#name_' + u).append('<th>' + analysis[i].seller_name + '</th>');
                $('#sale_num_' + u).append(td_sale_number);
                $('#selling_num_' + u).append(td_selling_number);
                $('#soldout_num_' + u).append(td_soldout_number);
                $('#soldout_before_complete_num_' + u).append(td_soldout_before_complete_number);
                $('#rat_soldout_before_complete_' + u).append(td_rate_soldout_before_complete);
                $('#avg_pri_regist_' + u).append(td_avg_price_regist);
                $('#avg_price_sold_' + u).append(td_avg_price_soldout);
                $('#avg_time_sold_' + u).append(time);
                $('#avg_time_change_circle_' + u).append(avg_time_change_price);
                $('#avg_down_price_' + u).append(td_avg_down_price);
                $('#avg_down_price_rate_' + u).append(avg_down_price_rate);
                $('#number_item_down_price_' + u).append(td_num_item_down_price);
                $('#avg_down_price_each_time_' + u).append(td_avg_down_price_each_time);
                $('#avg_down_price_rate_each_times_' + u).append(td_avg_down_price_rate_each_times);
                $('#avg_down_price_times_' + u).append(td_avg_down_price_times);
            }
        }

        //total
        var sale_number = 0;
        var selling_number = 0;
        var soldout_number = 0;
        var soldout_before_complete_number = 0;
        var avg_price_regist = 0;
        var avg_price_sold = 0;
        var count_time_change_price = 0;
        var sum_down_price_each_time = 0;
        var sum_down_price_rate_each_time_total = 0;
        var sum_down_price_times = 0;
        var time = 0;
        var avg_time_change_circle = 0;
        var sum = 0;
        var count_item = 0;
        var down_price = 0;
        var down_price_rate = 0;
        var num_item_down_price = 0;
        var market_rate = 0;
        var regist_number = 0;

        for (var i = 0; i < analysis.length; i++) {
            //sale number
            var per_seller = parseInt($('#sale_number_' + analysis[i].seller_cd + '_' + u).val());
            if (per_seller) {
                sale_number = sale_number + per_seller;
            }

            //selling number
            var per_seller = parseInt($('#selling_number_' + analysis[i].seller_cd + '_' + u).val());
            if (per_seller) {
                selling_number = selling_number + per_seller;
            }

            //soldout number
            var per_seller = parseInt($('#soldout_number_' + analysis[i].seller_cd + '_' + u).val());
            if (per_seller) {
                soldout_number = soldout_number + per_seller;
            }

            //soldout before complete number
            var per_seller = parseInt($('#soldout_before_complete_number_' + analysis[i].seller_cd + '_' + u).val());
            if (per_seller) {
                soldout_before_complete_number = soldout_before_complete_number + per_seller;
            }

            //avg price regist
            var per_seller = 0;
            if (parseInt($('#avg_price_regist_' + analysis[i].seller_cd + '_' + u).val())) {
                per_seller = parseInt($('#avg_price_regist_' + analysis[i].seller_cd + '_' + u).val())
                            * parseInt($('#count_price_regist_' + analysis[i].seller_cd + '_' + u).val());
            }
            if (per_seller) {
                avg_price_regist = avg_price_regist + per_seller;
            }

            //avg price soldout
            var per_seller = 0;
            per_seller = parseInt($('#avg_price_soldout_' + analysis[i].seller_cd + '_' + u).val())
                    * parseInt($('#soldout_number_' + analysis[i].seller_cd + '_' + u).val());
            if (per_seller) {
                avg_price_sold = avg_price_sold + per_seller;
            }

            //time sale
            var per_seller = 0;
            per_seller = parseInt($('#time_' + analysis[i].seller_cd + '_' + u).val())
                    * parseInt($('#soldout_number_' + analysis[i].seller_cd + '_' + u).val());
            if (per_seller) {
                time = time + per_seller;
            }

            //avg time change price
            for (var k = 0; k < analysis[i].items.length; k++) {
                if (analysis[i].items[k].date_soldout >= from_day && analysis[i].items[k].date_soldout <= to_day) {
                    for (var m = 0; m < analysis[i].items[k].history.length; m++) {
                        if (analysis[i].items[k].history[m].stat_cd == 2) {
                            for (var n = m - 1; n >= 0; n--) {
                                if (analysis[i].items[k].history[m].stat_cd == "2" ||
                                        analysis[i].items[k].history[m].stat_cd == "1") {
                                    if (analysis[i].items[k].history[m].hist_regist != null && analysis[i].items[k].history[n].hist_regist != null) {
                                        var oneDay = 24 * 60 * 60 * 1000;
                                        var firstDate = new Date(analysis[i].items[k].history[m].hist_regist);
                                        var secondDate = new Date(analysis[i].items[k].history[n].hist_regist);
                                        var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay)));

                                        count_item++;
                                        sum = sum + parseInt(diffDays);
                                        break;
                                    }
                                }
                            }
                        }
                    }
                }
            }

            // avg down price
            var per_seller = 0;
            per_seller = parseFloat($('#down_price_' + analysis[i].seller_cd + '_' + u).val())
                    * parseInt($('#soldout_number_' + analysis[i].seller_cd + '_' + u).val());

            if (per_seller) {
                down_price = down_price + per_seller;
            }

            // down price rate
            var per_seller = 0;
            per_seller = parseFloat($('#down_price_rate_' + analysis[i].seller_cd + '_' + u).val())
                    * parseInt($('#soldout_number_' + analysis[i].seller_cd + '_' + u).val());

            if (per_seller) {
                down_price_rate = down_price_rate + per_seller;
            }

            // number item_down price
            var per_seller = 0;
            per_seller = parseFloat($('#num_item_down_price_' + analysis[i].seller_cd + '_' + u).val());

            if (per_seller) {
                num_item_down_price = num_item_down_price + per_seller;
            }

            //count times change price
            var per_seller = 0;
            per_seller = parseInt($('#count_item_time_change_price_' + analysis[i].seller_cd + '_' + u).val());
            if (per_seller) {
                count_time_change_price = count_time_change_price + parseInt(per_seller);
            }

            //avg down price each time
            var per_seller = 0;
            per_seller = $('#down_price_each_time_' + analysis[i].seller_cd + '_' + u).val()
                    * $('#count_item_time_change_price_' + analysis[i].seller_cd + '_' + u).val();
            if (per_seller) {
                sum_down_price_each_time = sum_down_price_each_time + per_seller;
            }

            //avg down price rate each time
            var per_seller = 0;
            per_seller = $('#down_price_rate_each_time_' + analysis[i].seller_cd + '_' + u).val()
                    * $('#count_item_time_change_price_' + analysis[i].seller_cd + '_' + u).val();
            if (per_seller) {
                sum_down_price_rate_each_time_total = sum_down_price_rate_each_time_total + per_seller;
            }

            //avg down price times
            var per_seller = 0;
            per_seller = $('#down_price_times_' + analysis[i].seller_cd + '_' + u).val()
                    * $('#count_item_time_change_price_' + analysis[i].seller_cd + '_' + u).val();
            if (per_seller) {
                sum_down_price_times = sum_down_price_times + per_seller;
            }

            //market rate
            var per_seller = 0;
            per_seller = parseFloat($('#market_rate_' + analysis[i].seller_cd + '_' + u).val());
            if (per_seller) {
                market_rate = market_rate + per_seller;
            }

            //regist number
            var per_seller = parseInt($('#count_price_regist_' + analysis[i].seller_cd + '_' + u).val());
            if (per_seller) {
                regist_number = regist_number + per_seller;
            }
        }

        //rate soldout before complete
        rate_soldout_before_complete = (soldout_before_complete_number / soldout_number * 100).toFixed(2);

        //avg price regist
        avg_price_regist = Math.round(avg_price_regist / regist_number);
        if (regist_number == 0) {
            avg_price_regist = '----';
        }

        //avg price soldout
        avg_price_sold = Math.round(avg_price_sold / soldout_number);
        //time sale
        time = Math.round(time / soldout_number);

        //avg time change price
        avg_time_change_circle = Math.round(sum / count_item);
        if (count_item == 0) {
            avg_time_change_circle = '----';
        }

        //avg down price
        down_price = Math.round(down_price / soldout_number);

        //down price rate
        down_price_rate = (down_price_rate / soldout_number).toFixed(2);

        //avg down price each time
        var avg_down_price_each_time_total = Math.round(sum_down_price_each_time / count_time_change_price);

        //avg down price rate each time
        var avg_down_price_rate_each_time_total = (sum_down_price_rate_each_time_total / count_time_change_price).toFixed(2);

        //avg down price times
        var avg_down_price_times_total = (sum_down_price_times / count_time_change_price).toFixed(2);

        if (count_time_change_price == 0) {
            avg_down_price_times_total = 0;
            avg_down_price_rate_each_time_total = 0;
            avg_down_price_each_time_total = 0;
        }

        if (soldout_number == 0) {
            rate_soldout_before_complete = '----';
            avg_price_sold = '----';
            time = '----';
            down_price = '----';
            down_price_rate = '----';
        }

        var selling_rate = 0;
        var soldout_rate = 0;

        if (analysis[0].seller_cd != null) {
            for (var i = 0; i < analysis.length; i++) {
                //market rate
                var rate_market_rate = ($('#sale_number_' + analysis[i].seller_cd + '_' + u).val() / sale_number * 100).toFixed(2);
                if (sale_number == 0) {
                    rate_market_rate = 0;
                }
                $('#market_rat_' + u).append('<td>' + rate_market_rate + '%</td>');
                market_rate = market_rate + parseFloat(rate_market_rate);

                //selling rate per seller
                var selling_rate_per_seller = ($('#selling_number_' + analysis[i].seller_cd + '_' + u).val() / selling_number * 100).toFixed(2);
                if (selling_number == 0) {
                    selling_rate_per_seller = 0;
                }
                $('#selling_rate_' + u).append('<td>' + selling_rate_per_seller + '%</td>');
                selling_rate += parseFloat(selling_rate_per_seller);

                //soldout rate per seller
                var soldout_rate_per_seller = ($('#soldout_number_' + analysis[i].seller_cd + '_' + u).val() / soldout_number * 100).toFixed(2);
                if (soldout_number == 0) {
                    soldout_rate_per_seller = 0;
                }
                $('#soldout_rate_' + u).append('<td>' + soldout_rate_per_seller + '%</td>');
                soldout_rate += parseFloat(soldout_rate_per_seller);
            }
        }
        
        //$('#name_all_seller').append('<th>' + from_day + ' ~ ' + to_day + '</th>');
        $('#sale_num_all_seller').append('<td>' + sale_number + '件</td>');
        $('#selling_num_all_seller').append('<td>' + selling_number + '件</td>');
        $('#selling_rate_all_seller').append('<td>' + selling_rate.toFixed(0) + '%</td>');
        $('#soldout_num_all_seller').append('<td>' + soldout_number + '件</td>');
        $('#soldout_rate_all_seller').append('<td>' + soldout_rate.toFixed(0) + '%</td>');
        $('#soldout_before_complete_num_all_seller').append('<td>' + soldout_before_complete_number + '件</td>');
        $('#rat_soldout_before_complete_all_seller').append('<td>' + rate_soldout_before_complete + '%</td>');
        $('#avg_pri_regist_all_seller').append('<td>' + avg_price_regist + '万円</td>');
        $('#avg_price_sold_all_seller').append('<td>' + avg_price_sold + '万円</td>');
        $('#avg_time_sold_all_seller').append('<td>' + time + '日間</td>');
        $('#avg_time_change_circle_all_seller').append('<td>' + avg_time_change_circle + '日間</td>');
        $('#avg_down_price_all_seller').append('<td>' + down_price + '万円</td>');
        $('#avg_down_price_rate_all_seller').append('<td>' + down_price_rate + '%</td>');
        $('#number_item_down_price_all_seller').append('<td>'+ num_item_down_price + '件</td>');
        $('#avg_down_price_each_time_all_seller').append('<td>' + avg_down_price_each_time_total + '万円</td>');
        $('#avg_down_price_rate_each_times_all_seller').append('<td>' + avg_down_price_rate_each_time_total + '%</td>');
        $('#avg_down_price_times_all_seller').append('<td>' + avg_down_price_times_total + '</td>');
        $('#market_rat_all_seller').append('<td>' + market_rate.toFixed(0) + '%</td>');
    }
}

function resetAnalysisTable() {
    $('#name_all_seller').html('<th width="12%"></th>');
    $('#sale_num_all_seller').html('<th>新規売出物件数</th>');
    $('#selling_num_all_seller').html('<th>売出中物件数</th>');
    $('#selling_rate_all_seller').html('<th>売出中物件数シェア</th>');
    $('#soldout_num_all_seller').html('<th>成約済物件数</th>');
    $('#soldout_rate_all_seller').html('<th>成約件数シェア</th>');
    $('#soldout_before_complete_num_all_seller').html('<th>完成前成約物件数</th>');
    $('#rat_soldout_before_complete_all_seller').html('<th>完成前成約率</th>');
    $('#avg_pri_regist_all_seller').html('<th>平均売出開始価格</th>');
    $('#avg_price_sold_all_seller').html('<th>平均成約価格</th>');
    $('#avg_time_sold_all_seller').html('<th>平均売出期間</th>');
    $('#avg_time_change_circle_all_seller').html('<th>平均価格改定周期</th>');
    $('#avg_down_price_all_seller').html('<th>平均値下価格</th>');
    $('#avg_down_price_rate_all_seller').html('<th>平均値下率</th>');
    $('#number_item_down_price_all_seller').html('<th>値下物件数</th>');
    $('#avg_down_price_each_time_all_seller').html('<th>平均価格改定価格</th>');
    $('#avg_down_price_rate_each_times_all_seller').html('<th>価格改定毎値下率</th>');
    $('#avg_down_price_times_all_seller').html('<th>平均価格改定回数</th>');
    $('#market_rat_all_seller').html('<th>新規売出物件数シェア</th>');
    
    
    $('#analysis_tbl').show();
    $('#name').html('<th width="12%"></th>');
    $('#sale_number').html('<th>新規売出物件数</th>');
    $('#market_rate').html('<th>新規売出物件数シェア</th>');
    $('#selling_number').html('<th>売出中物件数</th>');
    $('#selling_rate').html('<th>売出中物件数シェア</th>');
    $('#soldout_number').html('<th>成約済物件数</th>');
    $('#soldout_rate').html('<th>成約件数シェア</th>');
    $('#soldout_before_complete_number').html('<th>完成前成約物件数</th>');
    $('#rate_soldout_before_complete').html('<th>完成前成約率</th>');
    $('#avg_price_regist').html('<th>平均売出開始価格</th>');
    $('#avg_price_sold').html('<th>平均成約価格</th>');
    $('#avg_time_sold').html('<th>平均売出期間</th>');
    $('#avg_down_price').html('<th>平均値下価格</th>');
    $('#avg_down_price_rate').html('<th>平均値下率</th>');
    $('#num_item_down_price').html('<th>値下物件数</th>');
    $('#avg_down_price_each_time').html('<th>平均価格改定価格</th>');
    $('#avg_down_price_rate_each_times').html('<th>価格改定毎値下率</th>');
    $('#avg_down_price_times').html('<th>平均価格改定回数</th>');
    $('#avg_time_change_circle').html('<th>平均価格改定周期</th>');

    for (var u = 1; u <= 3; u++) {
        $('#name_' + u).html('<th width="12%"></th>');
        $('#sale_num_' + u).html('<th>新規売出物件数</th>');
        $('#selling_num_' + u).html('<th>売出中物件数</th>');
        $('#selling_rate_' + u).html('<th>売出中物件数シェア</th>');
        $('#soldout_num_' + u).html('<th>成約済物件数</th>');
        $('#soldout_rate_' + u).html('<th>成約件数シェア</th>');
        $('#soldout_before_complete_num_' + u).html('<th>完成前成約物件数</th>');
        $('#rat_soldout_before_complete_' + u).html('<th>完成前成約率</th>');
        $('#avg_pri_regist_' + u).html('<th>平均売出開始価格</th>');
        $('#avg_price_sold_' + u).html('<th>平均成約価格</th>');
        $('#avg_time_sold_' + u).html('<th>平均売出期間</th>');
        $('#avg_time_change_circle_' + u).html('<th>平均価格改定周期</th>');
        $('#avg_down_price_' + u).html('<th>平均値下価格</th>');
        $('#avg_down_price_rate_' + u).html('<th>平均値下率</th>');
        $('#number_item_down_price_' + u).html('<th>値下物件数</th>');
        $('#avg_down_price_each_time_' + u).html('<th>平均価格改定価格</th>');
        $('#avg_down_price_rate_each_times_' + u).html('<th>価格改定毎値下率</th>');
        $('#avg_down_price_times_' + u).html('<th>平均価格改定回数</th>');
        $('#market_rat_' + u).html('<th>新規売出物件数シェア</th>');

    }
}
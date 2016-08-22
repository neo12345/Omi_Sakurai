;(function ($, window){
    $(function () {
        $('#zone_1').on('click', function (){
            var checkBoxes = $('[data-checkbox=zone_1]');
            checkBoxes.prop("checked", !checkBoxes.prop("checked"));
        });
        $('#zone_2').on('click', function (){
            var checkBoxes = $('[data-checkbox=zone_2]');
            checkBoxes.prop("checked", !checkBoxes.prop("checked"));
        });
        $('#zone_3').on('click', function (){
            var checkBoxes = $('[data-checkbox=zone_3]');
            checkBoxes.prop("checked", !checkBoxes.prop("checked"));
        });
    })
})(window.jQuery, window);
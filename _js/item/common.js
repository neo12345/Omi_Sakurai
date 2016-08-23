;(function ($, window){
    $(function () {
        $('#zone_1').on('click', function (){
			$.each($("[data-checkbox=zone_1]"), function() {									 
				$(this).prop('checked', $('#zone_1').prop("checked"));
			});							   
        });
        $('#zone_2').on('click', function (){
			$.each($("[data-checkbox=zone_2]"), function() {									 
				$(this).prop('checked', $('#zone_2').prop("checked"));
			});	
        });
        $('#zone_3').on('click', function (){
			$.each($("[data-checkbox=zone_3]"), function() {									 
				$(this).prop('checked', $('#zone_3').prop("checked"));
			});	
        });
    })
})(window.jQuery, window);
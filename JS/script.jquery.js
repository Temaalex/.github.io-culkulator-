'use strict';

$(function(){
    /*block 1 and 2*/
    $('#group input:checkbox').click(function(){
        if ($(this).is(':checked')) {
            $('#group input:checkbox').not(this).prop('checked', false);
        };
        if($('.click_square').is(':checked')){
            $('.square').show(100);
            $('.square').addClass("square__style");
        } else {
            $('.square').hide(100);
        };
            if($('.click_circle').is(':checked')){
            $('.circle').show(100);
            $('.circle').addClass("circle__style");
        } else {
        $('.circle').hide(100);
    };
    });
    /*block 3*/
    $('.btn_hello_text').on('click', function(){
        $('.hello_text').toggleClass('hello_text_open');
    })
    
$( ".slider" ).slider({
    animate: "slow",
    min: 0,
    max: 8000,
    step: 5,
    value: 500,
    
    slide : function(event, ui) {
        $(".air_airtext").val(ui.value);
    }
});
    $(".slider").css('border-bottom-right-radius','50px');
    $(".slider").css('border-bottom-left-radius','50px');
    $(".slider").css('border','none');
    $(".slider").css('background','linear-gradient(to left, hsl(123, 84%, 45%), hsl(69, 87%, 50%))');
    $(".slider").css('height','15px');
    $(".ui-state-default, .ui-widget-content .ui-state-default").css('border', '2px solid #131111');
});

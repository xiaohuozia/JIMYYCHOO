


$(function(){
    $(".stealth").hide();
        $(window).scroll(function(){
        if($(window).scrollTop()>100){
            $(".stealth").show();
        }else{
            $(".stealth").hide();
        }

    });
});





let count=0;
$(".check").on("click",function(){
    count++;
    if(count%2==0){
        $(".squre").hid();
    }else{
        $(".squre").show();
    }
});
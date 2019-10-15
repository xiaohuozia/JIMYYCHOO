

// 固定导航栏
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
$(".check").click(function(){
    if(count%2==0){
        $(this).children().hide();
    }else{
        $(this).children().show();
    }
    count++;
}); 



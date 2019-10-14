
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



let str;
$(".login_mobile").focus(function(){
    str=$(this).prop("placeholder")
    $(this).attr("placeholder",'');
});
$(".login_mobile").blur(function(){
    $(this).attr("placeholder",str);
});


$(".login_yzm").focus(function(){
    str=$(this).prop("placeholder")
    $(this).attr("placeholder",'');
});
$(".login_yzm").blur(function(){
    $(this).attr("placeholder",str);
});



$(".mimaLogin").click(function(){
        $(".leftlist_two").show();
        $(".leftlist_one").hide();
  
    }
);
$(".mimaLogin_two").click(function(){
        $(".leftlist_one").show();
        $(".leftlist_two").hide();
    }
);


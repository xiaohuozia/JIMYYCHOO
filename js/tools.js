
        let index = 0;
        let myTimer = null;
        let imgs = $(".top_sec").children();
        let lis = $(".doudouBox").children();

        function autoPlay(){
            myTimer = setInterval(() => {
               
              
                let outIndex = index;
                index++;
           
                if(index>2){
                    index=0;
                }
               
                fadeInOut(imgs[index],imgs[outIndex],500);
                lis[index].style.backgroundColor = "black";
                lis[outIndex].style.backgroundColor = "white";
            }, 1500);

       }

       window.onload=function(){
           autoPlay();
           
       }

       

  

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
   

        
        let xiabiao = 0;
            $(".jiantou_two").click(function(){
                xiabiao++;
                if( xiabiao>1){
                    xiabiao = 1;
                    return;
                }
                console.log(xiabiao);
                console.log(xiabiao*(-1320)+"px");

                $(".eightImg").css({
                    left:  xiabiao*(-1320)+"px"
                });
            });
            $(".jiantou_one").click(function(){
                 xiabiao--;
                if( xiabiao<0){
                     xiabiao = 0;
                    return;
                }
                $(".eightImg").css({
                    left:  xiabiao*(-1320)+"px"
                });
            });

            


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




$(".zcButton").onclick = function(){
    //1、
    let xhr = new XMLHttpRequest();

    xhr.open("post","regSave.php",true);

    xhr.onreadystatechange = function(){
        if(xhr.readyState==4 && xhr.status==200){
            if(xhr.responseText=="-1"){
                $("#messageBox").style.color ="red";
                $("#messageBox").innerHTML ="用户名被人使用";
            }else if(xhr.responseText=="0"){
                $("#messageBox").style.color ="red";
                $("#messageBox").innerHTML ="注册失败";
            }else if(xhr.responseText=="1"){
                $("#messageBox").style.color ="greenyellow";
                $("#messageBox").innerHTML ="注册成功，请<a href='login.html'>登录</a>";
            }
        }
    }
    //post方式：设置请求头
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    //post方式：把传给服务器端数据（键值对）放在send函数的参数里。
    let sendstr = `username=${$("#username").value}&userpass=${$("#userpass").value}`;
    xhr.send(sendstr);

}




function checkuser(obj){
    let xhr =new XMLHttpRequest();

    //2 设置请求参数
    xhr.open("get","checkuser.php?username="+$("#username").value,true);

    //3 设置回调函数
    xhr.onreadystatechange = function(){
        if(xhr.readyState==4 && xhr.status==200){
            //5 接收请求
            obj.nextElementSibling.innerHTML =  xhr.responseText;
        }
    }
    //4 发送请求
    xhr.send();

}



function check(){
    //非空判断：
    if($("#username").value=="" || $("#userpass").value=="" || $("#checkpass").value==""){
        alert("亲，请把带星号的都输入了");
        return false;//阻止浏览器的默认行为
    }
    //判断用户名是否符合规则

    //判断密码和重复密码是否一致。

    
}

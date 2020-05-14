
$("#buttonTop-close").click(function(){
    $("#top-banner").css("display","none");
})

// $("#nav-wrap ul li").hover(
//     function(){
//     $("#nav-wrap ul a").css({"color":"#fff"});
//     },
//     function(){
//     $("#nav-wrap ul a").css({"color":"#afafaf"});
//     }
    
// )

var ord = 0;
var myTimer = null;
var $img = $("#banner-box>img");
var $li = $("#banner>ul>li");

function autoPlay(){
    myTimer = setInterval(function(){
        goImg(ord+1);
    },2000)
}

function goImg(transord){
    if(transord==ord){
        return;
    }

    let outord = ord;
    ord = transord;

    if(ord>$img.length-1){
        ord = 0;
    }else if(ord<0){
        ord = $img.length-1;
    }

    $img.eq(outord).animate({"opacity":0},1000)
    $img.eq(ord).animate({"opacity":1},1000)

    $li.eq(outord).css({"background-color":"transparent"});
    $li.eq(ord).css({"background-color":"#ffff"}); 
}

function stopPlay(){
    window.clearInterval(myTimer);
    myTimer = null;
}

$(function(){
    autoPlay();
    $("#banner>ul>li").click(function(){
        stopPlay();
        goImg($(this).index());
    });

    $("#banner-box").mouseover(function(){
        stopPlay();
    });

    $("#banner-box").mouseout(function(){
        autoPlay();
    });

    let $span = $("#banner>span");
    $span.eq(0).click(function(){
        stopPlay();
        goImg(ord-1);
    });
    
    $span.eq(1).click(function(){
        stopPlay();
        goImg(ord+1);
    });

 
    

})
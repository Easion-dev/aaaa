
let location_goods=location.search.split("=")[1];
let username = getCookie("userName");

user_Login();
$("#nav .nav_r .user .userOut").click(function(){
    removeCookie("userName")
    user_Login()
})
car();
getData(); 

function getData() {
     $.get("./php/getGoodsInfo.php", "goodsId=" + location_goods, function (data) {
        showData(data)
    }, "json")
}

function showData(data) {
     let htmlss = `
    <div class="goods-img" style="background:url(${data.goodsImg}) no-repeat;background-size: 450px 450px;">
            <div class="mirror-box"></div>
            <div class="show-box" style="
            background: url(${data.goodsImg}) no-repeat;
            "></div>
    </div>
    `;
    $("#goods .goods-ss").html(htmlss);


    let htmlstr = `
        <h3>${data.goodsName}</h3>
        <a href="">
            <p>${data.goodsDesc}</p>
        </a>
        <span>价&nbsp;&nbsp;&nbsp;&nbsp;格</span>
        <span><em>￥</em>${data.goodsPrice}</span>
        <div class="pro_skus">
            <span>选择容量</span>
            <ul>
                <a href="javascript:void(0)">
                    <li>
                        <span>8G+256G</span>
                    </li>
                </a>
                <a href="javascript:void(0)">
                    <li>
                        <span>8G+256G</span>
                    </li>
                </a>


            </ul>
        <div class="stock">
           
            <input id="shuliang" type="text" value="1">
            <p>
                <a href="javascript:void(0)">+</a>
                <a href="javascript:void(0)">-</a>
            </p>
            

            <div class="operation">
                <a href="javascript::" class="a_1" id="shop" >
                    <span>加入购物车</span>
                </a>
                <a href="javascript::">
                    <span>立即购买</span>
                </a>
            </div>
        </div>
        </div>
    `;
    $("#goods .goods-buy").html(htmlstr)
    fangdajing ();
    shopcount();
    shopCar();
    

}

function car(){
    let htmlstr=`
    <span class="iconfont icon-icon8"></span>
    <a  href="./shoppercar.html?goodsId=${location_goods}" target="_blank">购物车</a>
    `;
    $("#car").html(htmlstr)
}


function fangdajing(){
    
     
    let oMirrorBox = document.getElementsByClassName("mirror-box");
    let oBox = document.getElementsByClassName("goods-img");
    let oShowBox = document.getElementsByClassName("show-box");
    let boxOffsetLeft = oBox[0].offsetLeft;
    let boxOffsetTop = oBox[0].offsetTop;

    let mirrorWidth = oMirrorBox[0].offsetWidth;
    let mirrorHeight = oMirrorBox[0].offsetHeight;

   
    $("#goods .goods-img").mousemove(function (event) {

        let e = event || window.event;


        let left1 = e.pageX - boxOffsetLeft - mirrorWidth / 2;
        let top1 = e.pageY - boxOffsetTop - mirrorHeight / 2;

        if (left1 < 0) {
            left1 = 0;
        } else if (left1 + mirrorWidth > 450) {
            left1 = 450 - mirrorWidth;
        }

        if (top1 < 0) {
            top1 = 0;
        } else if (top1 + mirrorHeight > 450) {
            top1 = 450 - mirrorHeight;
        }

  
        oMirrorBox[0].style.left = left1 + "px";
        oMirrorBox[0].style.top = top1 + "px";


        oShowBox[0].style.backgroundPosition = `-${left1*2}px -${top1*2}px`;

    })

    $("#goods .goods-img").mouseenter(function () {
        $("#goods .show-box").css("display", "block")
        $("#goods .mirror-box").css("opacity", "0.3")

    })
    $("#goods .goods-img").mouseleave(function () {
        $("#goods .show-box").css("display", "none")
        $("#goods .mirror-box").css("opacity", "0")
    })

  }

  function shopcount(){
      $("#goods .stock>p>a:nth-child(1)").click(function(){
          let count = $("#goods .stock>input:nth-child(1)").val()
          count++;
          $("#goods .stock>input:nth-child(1)").val(count)
      })
      $("#goods .stock>p>a:nth-child(2)").click(function(){
        let count = $("#goods .stock>input:nth-child(1)").val()
        count--;
        if(count<1){
            count = 1
        }
        $("#goods .stock>input:nth-child(1)").val(count)
    })
  }
        
  function shopCar(){
    $("#shop").click(function(){
        if(username==null){
            alert("请先登陆")
            return
        }


        $.post("./php/addShoppingCart.php",{
            "vipName":username,
            "goodsId":location_goods,
            "goodsCount":$("#shuliang").val()
        },function(data){
            if(data==1){
                alert("加入购车成功")
            }else if(data==0){
                alert("加入购物车失败")
            }
        }
    ) 
    })
}

function user_Login(){
    let username = getCookie("userName")
    if(username==null){
        $("#nav .nav_r .user").hide()
        $("#btnLogin").show()
    }else{
        $("#nav .nav_r .userSpan").html(username)
        $("#nav .nav_r .user").show()
        $("#btnLogin").hide()
        
    }
}
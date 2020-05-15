
function getGoods_1() {
    $.get("./php/getGoodsListNew.php",{
        "typeId":"001",
        "count":5
    },function (data) {
        showData(data)
        // console.log(data)
    },"json") 
}

function showData(data) {
    let htmlstr = "";
    data.forEach(item => {
        htmlstr += `
            <li>
                <a href="goodslist.html?goodsId=${item.goodsId}" target="_blank">
                    <p>
                        <img src="${item.goodsImg}" alt="">
                    </p>
                    <div>${item.goodsName}</div>
                    <span>${item.goodsDesc}</span>
                    <span>￥${item.goodsPrice}</span>
                </a>
            </li>
        `
    });
    $("#goods .box_2").html(htmlstr)
}

function getGoods_2(){
    $.get("./php/getGoodsListNew.php",{
        "typeId":"002",
        "count":5
    },function(data){
        showData_1(data);
    },"json")
    
}

function showData_1(data){
    let htmlstr ="";
        data.forEach(item=>{
            htmlstr +=`
            <li>
                <a href="goodslist.html?goodsId=${item.goodsId}" target="_blank">
                    <p>
                        <img src="${item.goodsImg}"  alt="">
                    </p>
                    <div>${item.goodsName}</div>
                    <span>${item.goodsDesc}</span>
                    <span>￥${item.goodsPrice}</span>
                </a>
            </li>
            `;
        })
        $("#goods-1 .goods_box .box_2").html(htmlstr)
}

$(function(){
    getGoods_1();
    getGoods_2();
})
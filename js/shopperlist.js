$(function(){
    $(".all :checkbox:eq(0)").check($(".all :checkbox:gt(0)"));
        
    $(".reduceBtn").click(function(){
        let count = $(this).next().html()
        count--

        let price = $(this).parent().pre()
    })
})

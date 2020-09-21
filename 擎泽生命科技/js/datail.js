$(function() {
    // 手机版头部导航栏效果
    $(".daohangip").click(function() {
            console.log("1")
            $(".icon-daohang").toggle(function() {
                $(".icon-chahao").toggle();
            });
            $(".nav").toggle(600, function() {})
        })
        //   二级菜单
    $(".erji>li a").click(function() {
        $(this).next().slideToggle(500);
        $(this).parent().siblings().children("ul").slideUp(500);
    });



})
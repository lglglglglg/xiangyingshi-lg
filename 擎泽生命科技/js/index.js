// swiper
// 第一个swiper

var mySwiper1 = new Swiper('#swiper1', {
    speed: 300,
    autoplay: true, //可选选项，自动滑动
    loop: true,
    // 如果需要分页器
    pagination: {
        el: '.s1-pagination',
        // dynamicBullets: true,
        clickable: true,
    },
})

//如果你初始化时没有定义Swiper实例，后面也可以通过Swiper的HTML元素来获取该实例
// new Swiper('#swiper1')
// var mySwiper1 = document.querySelector('#swiper1').swiper
// mySwiper1.slideNext();



$(function() {
    // 手机版头部导航栏效果
    $(".nav_but ").click(function() {
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

    // erjimenu 滑过
    $(".manufir").mouseover(function() {
        // $(".naverji").slideDown("500")
        $(".naverji").css({
            display: "block"
        })
    })
    $(".manufir").mouseout(function() {
        // $(".naverji").slideUp("500")
        $(".naverji").css({
            display: "none"
        })
    })

    //   chanp[in二级菜单
    $(".erjis>li a").click(function() {
        $(this).next().slideToggle(500);
        $(this).parent().siblings().children("ul").slideUp(500);
    });
    // 分享更多图标
    $(".fxmore").mouseover(function() {
        $(".shareMore").slideDown(500)
        $(".shareMore").mouseover(function {
            $(".shareMore").css
        })

        // $(".shareMore").css({
        //     display: "block"
        // })
    })
    $(".fxmore").mouseout(function() {
        $(".shareMore").slideUp(500)
            // $(".shareMore").css({
            //     display: "none"
            // })
    })
})
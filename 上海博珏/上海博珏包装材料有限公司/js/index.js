// 第一个swiper
var mySwiper1 = new Swiper('#swiper1', {
    speed: 300,
    autoplay: true, //可选选项，自动滑动
    loop: true,
    // 如果需要分页器
    pagination: {
        el: '.s1-pagination ',
        dynamicBullets: true,
    },
})

//如果你初始化时没有定义Swiper实例，后面也可以通过Swiper的HTML元素来获取该实例
new Swiper('#swiper1')
var mySwiper1 = document.querySelector('#swiper1').swiper
mySwiper1.slideNext();

$(function() {
    // 手机版头部导航栏效果
    $(".nav_but").click(function() {
            console.log("1")
            $(".icon-daohang").toggle(function() {
                $(".icon-chahao").toggle();
            });
            $(".phonenav").toggle(600, function() {})
        })
        // 手机版 产品 导航栏下拉菜单
    $(".xialaicon").click(function() {
        $(".icon-xialacaidan").toggle(function() {
            $(".icon-xialacaidan1").toggle(
                // display: "block"

            );
        });
        $(".sellertj_phone").toggle(1000);
    })

    //  animate 动画 


})
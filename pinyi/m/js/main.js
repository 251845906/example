$('.nav_btn').attr('_show','0');
$('.nav_btn').click(function(){
    if($(this).attr('_show') === '0'){
        $('nav').addClass('active')
        $('.nav_btn').attr('_show','1');
    }else{
        $('nav').removeClass('active')
        $('.nav_btn').attr('_show','0');
    }
});
$('.new .subMenu>a').click(function(){
    var index = $(this).index();
    $(this).addClass('active').siblings().removeClass('active');
    $('.new .newItem>div').eq(index).show().siblings().hide()
})
$('.details_case>.details_menu a').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    $('.details_case>.details_container .Item_box').eq($(this).index()).show().siblings().hide()
})
$('.details_new>.details_menu a').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    $('.details_new>.details_container>div').eq($(this).index()).show().siblings().hide()
})

var mySwiper = new Swiper ('.swiper-container', {
        autoplay: 5000,
        loop: true,
        // 如果需要分页器
        pagination: '.swiper-pagination',
        // 如果需要前进后退按钮
})
    // alert($('html').css('fontSize'))
    // alert($(window).width())
// if(navigator.userAgent.indexOf('baiduboxapp')>0){
//     if(parseInt($(window).width()) === 360){
//         $('html').css('fontSize','48px')
//     }
// }
// if(navigator.userAgent.indexOf('HUAWEIDUK-AL20')>0&&navigator.userAgent.indexOf('MQQBrowser')>0){
//     if(parseInt($(window).width()) === 360){
//         $('html').css('fontSize','64px')
//     }
// }
    // alert(navigator.appCodeName)
    // alert(navigator.appName)
    // alert(navigator.appVersion)
    // alert(navigator.cookieEnabled)
    // alert(navigator.platform)
    // alert(navigator.userAgent)
    // alert(navigator.systemLanguage)

    // if(parseInt($(window).width()) === 360){
    //     $('html').css('fontSize','48px')
    // }
    // window.resize(function(){
    //     if(parseInt($(window).width()) === 360){
    //         $('html').css('fontSize','48px')
    //     }
    // })

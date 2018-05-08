/**
 * Created by 34338 on 2018/3/26.
 */
layui.use('carousel', function(){
    var carousel = layui.carousel;
    //建造实例
    carousel.render({
        elem: '#Lun',
        width: '100%', //设置容器宽度
        height:'100%',
        arrow: 'hover' //始终显示箭头
        //,anim: 'updown' //切换动画方式
    });

});
layui.use('layer',function () {
    var layer = layui.layer;
    layer.photos({
        photos: '#about_silide' //格式见API文档手册页
        ,anim: 5 //0-6的选择，指定弹出图片动画类型，默认随机
    });
})
$(function(){Page(30)});
function Page(zongye){
    $('.paging .all_page').html(parseInt(zongye))
    $('.paging').click(function(e){
        if($(e.target).attr('class') === 'prev_page'){
            $(this).find('.now_page').html(function(){
                return parseInt($(this).html())<=1 ?  parseInt($(this).html()):parseInt($(this).html())-1
            })
        }else if($(e.target).attr('class') === 'next_page'){
            $(this).find('.now_page').html(function(){
                return parseInt($(this).html())>=zongye ?  parseInt($(this).html()):parseInt($(this).html())+1
            })
        }else if($(e.target).attr('class') === 'ipt_btn'){
            if(/^[0-9]*$/.test($(e.target).siblings('input').val())){
                   if(parseInt($(e.target).siblings('input').val())>=1&&$(e.target).siblings('input').val()<=parseInt(zongye)){
                       $(this).find('.now_page').html(function(){
                           return $(e.target).siblings('input').val();
                       })
                    }
            }
        }
    });
}
$(window).scroll(function(){
    var $scrollTop = $(document).scrollTop()
    if($scrollTop>900){
        $('.adside').fadeIn(200);
    }else{
        $('.adside').fadeOut(200);
    };
})
if($('.adside').html() !== undefined ){
    var $left = $('.case .container').offset().left;
    $('.adside').css('right',$left-180+"px");

    $(window).resize(function() {
        var $left = $('.case .container').offset().left;

        $('.adside').css('right',$left-180+"px")

    });
    $('.to_top').click(function(){
        $('body,html').animate({
            scrollTop:0,
        },500)
    })
}
$('.nav li').hover(function(){$(this).find('.nav_pull').show()},function (){$(this).find('.nav_pull').hide()});
function IssueBox(){
    $('.IssueBox').animate({
        top:'-98px'
    },800,function(){
        $('.IssueBox').css('top','0');
        $('.IssueBox').append($('.IssueBox').children('.list').eq(0));
    })
}
var timer;
timer = setInterval(function(){IssueBox()},2000);
$('.IssueBox').hover(function () {clearInterval(timer)},function(){
    timer = setInterval(function(){IssueBox()},2000);
})
$('.details_about .Item_List .last').click(function(){
    $('.details_about .Item_List .slide').animate({
        left:'-290px'
    },200,function(){
        $('.details_about .Item_List .slide').css('left','0');
        $('.details_about .Item_List .slide').append($('.details_about .section .slide').children('.List').eq(0));
    })
})

$('.NewItem .menu>a').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    $(this).parent().siblings('.ItemBox').find('.ItemContact').eq($(this).index()).show().siblings('.ItemContact').hide();
})

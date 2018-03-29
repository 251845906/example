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
layui.use('laypage',function(){
    var laypage = layui.laypage;
    //执行一个laypage实例
    laypage.render({
        elem: 'paging1', //注意，这里的 test1 是 ID，不用加 # 号
        count: 50, //数据总数，从服务端得到
        limit:1,
        jump:function (obj,first) {
            console.log(obj.curr)
        }
    });
    laypage.render({
        elem: 'paging2', //注意，这里的 test1 是 ID，不用加 # 号
        count: 50, //数据总数，从服务端得到
        limit:1,
        jump:function (obj,first) {
            console.log(obj.curr)
        }
    });
    laypage.render({
        elem: 'paging3', //注意，这里的 test1 是 ID，不用加 # 号
        count: 50, //数据总数，从服务端得到
        limit:1,
        jump:function (obj,first) {
            console.log(obj.curr)
        }
    });
    laypage.render({
        elem: 'case_paging1', //注意，这里的 test1 是 ID，不用加 # 号
        count: 50, //数据总数，从服务端得到
        limit:1,
        jump:function (obj,first) {
            console.log(obj.curr)
        }
    });
    laypage.render({
        elem: 'case_paging2', //注意，这里的 test1 是 ID，不用加 # 号
        count: 50, //数据总数，从服务端得到
        limit:1,
        jump:function (obj,first) {
            console.log(obj.curr)
        }
    });
    laypage.render({
        elem: 'case_paging3', //注意，这里的 test1 是 ID，不用加 # 号
        count: 50, //数据总数，从服务端得到
        limit:1,
        jump:function (obj,first) {
            console.log(obj.curr)
        }
    });
    laypage.render({
        elem: 'case_paging4', //注意，这里的 test1 是 ID，不用加 # 号
        count: 50, //数据总数，从服务端得到
        limit:1,
        jump:function (obj,first) {
            console.log(obj.curr)
        }
    });
})
$('.nav li').hover(function(){$(this).find('.nav_pull').show()},function (){$(this).find('.nav_pull').hide()});
var timer = setInterval(function(){
    $('.IssueBox').animate({
        top:'-98px'
    },800,function(){
        $('.IssueBox').css('top','0');
        $('.IssueBox').append($('.IssueBox').children('.list').eq(0));
    })
},2000);
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

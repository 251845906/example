$(function () {
    $('.banner .menu>li').hover(function(){
        var index = $(this).index();
        $(this).addClass('active');
        $('.banner .menuDetails li').stop(true,true).eq(index).css({'width':'280px',height:'400px'});
    },function () {
        var index = $(this).index();
        $(this).removeClass('active');
        $('.banner .menuDetails li').stop(true,true).eq(index).css({width:'0px',height:'0px'});
    });

    $('.recommend_txt').html(function (){
        return $('.recommend_txt').html().substring(0,20)
    });

    $('.recommend .next').click(function(){
        var $this = $(this);
        swiper({Dom:$('.swiper_box'),left:'-1262px',callback:function(){
            $($this).fadeOut(200).siblings('.prev').css({visibility:'visible'}).animate({opacity:1},500)
        }})
    });
    $('.recommend .prev').click(function(){
        var $this = $(this);
        swiper({Dom:$('.swiper_box'),left:'20px',callback:function(){
            $($this).stop(true,true).animate({opacity:0},200,function(){
                $(this).css({visibility:'hidden'})
            }).siblings('.next').fadeIn(200);
        }})
    });
    $('.focusCurriculum .prev').click(function () {
        var $this = $(this);
        swiper({
            Dom: $('.focusCurriculum .swiper'),
            left:'0px',
            callback:function () {
               $($this).fadeOut(200).siblings('.next').fadeIn(200)
            }
        })
    })
    $('.focusCurriculum .next').click(function () {
        var $this = $(this);
        swiper({
            Dom: $('.focusCurriculum .swiper'),
            left:'-746px',
            callback:function () {
                $($this).fadeOut(200).siblings('.prev').fadeIn(200)
            }
        })
    })
});
function swiper(obj) {
    obj.Dom = obj.Dom || false;
    obj.left = obj.left || 0;
    obj.callback = obj.callback || function(){}
    if(obj.Dom){
        obj.Dom.animate({
            left:obj.left
        },300,obj.callback)
    }
}
function placeholder(obj){
    obj.defaultValue = obj.defaultValue || '请输入文本';
    obj.Dom = obj.Dom || false ;
    obj.col = obj.col || '#000';
    if(/MSIE 9.0/i.test(navigator.userAgent)){
        obj.Dom.css('color','#999');
        obj.Dom.val(obj.defaultValue);
        obj.Dom.focus(function(){
            if($(this).val() === obj.defaultValue){
                $(this).val('')
            }
            $(this).css('color',obj.col);
        });
        obj.Dom.blur(function(){
            if(!($(this).val().length>0&&$(this).val()!==obj.defaultValue)){
                $(this).val(obj.defaultValue)
                $(this).css('color','#999');
            }
        })
    }else{
        obj.Dom.attr('placeholder',obj.defaultValue)
    }
}
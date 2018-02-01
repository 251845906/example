$(function () {
    $('.banner .menu>li').mouseenter(function(){
        var index = $(this).index();
        $(this).addClass('active').siblings('li').removeClass('active');
        $('.banner .menuDetails li').stop(true).eq(index).animate({'width':280+'px'},200).siblings().css('width','0px')
    })
    $('.recommend_txt').html(function (){
        return $('.recommend_txt').html().substring(0,20)

    })
})
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
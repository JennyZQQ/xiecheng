(function($){
    $.fn.ckSlide = function(opts){
        opts = $.extend({}, $.fn.ckSlide.opts, opts);
        this.each(function(){
            var slidewrap = $(this).find('.ck-slide-wrapper');
            var slide = slidewrap.find('li');
            var count = slide.length;
            var that = this;
            var index = 0;
            var time = null;
            $(this).data('opts', opts);
            // next
            $(this).find('.ck-next').on('mouseover', function(){
                if(opts['isAnimate'] == true){
                    return;
                }
                
                var old = index;
                if(index >= count - 1){
                    index = 0;
                }else{
                    index++;
                }
                change.call(that, index, old);
            });
            // prev
            $(this).find('.ck-prev').on('mouseover', function(){
                if(opts['isAnimate'] == true){
                    return;
                }
                
                var old = index;
                if(index <= 0){
                    index = count - 1;
                }else{                                      
                    index--;
                }
                change.call(that, index, old);
            });
            $(this).find('.ck-slidebox li').each(function(cindex){
                $(this).on('mouseover.slidebox', function(){
                    change.call(that, cindex, index);
                    index = cindex;
                });
            });
            
            // focus clean auto play
            $(this).on('mouseover', function(){
                if(opts.autoPlay){
                    clearInterval(time);
                }
                $(this).find('.ctrl-slide').css({opacity:0.6});
            });
            //  leave
            $(this).on('mouseleave', function(){
                if(opts.autoPlay){
                    startAtuoPlay();
                }
                $(this).find('.ctrl-slide').css({opacity:0.15});
            });
            startAtuoPlay();
            // auto play
            function startAtuoPlay(){
                if(opts.autoPlay){
                    time  = setInterval(function(){
                        var old = index;
                        if(index >= count - 1){
                            index = 0;
                        }else{
                            index++;
                        }
                        change.call(that, index, old);
                    }, 2000);
                }
            }
            // 修正box
            var box = $(this).find('.ck-slidebox');
            box.css({
                'margin-left':-(box.width() / 2)
            })
            // dir
            switch(opts.dir){
                case "x":
                    opts['width'] = $(this).width();
                    slidewrap.css({
                        'width':count * opts['width']
                    });
                    slide.css({
                        'float':'left',
                        'position':'relative'
                    });
                    slidewrap.wrap('<div class="ck-slide-dir"></div>');
                    slide.show();
                    break;
            }
        });
    };
    function change(show, hide){
        var opts = $(this).data('opts');
        if(opts.dir == 'x'){
            var x = show * opts['width'];
            $(this).find('.ck-slide-wrapper').stop().animate({'margin-left':-x}, function(){opts['isAnimate'] = false;});
            opts['isAnimate'] = true
        }else{
            $(this).find('.ck-slide-wrapper li').eq(hide).stop().animate({opacity:0});
            $(this).find('.ck-slide-wrapper li').eq(show).show().css({opacity:0}).stop().animate({opacity:1});
        }
        $(this).find('.ck-slidebox li').removeClass('current');
        $(this).find('.ck-slidebox li').eq(show).addClass('current');
    }
    $.fn.ckSlide.opts = {
        autoPlay: false,
        dir: null,
        isAnimate: false
    };
})(jQuery);
$(function(){
    $('.zqq_subnav').find('a').attr('class','');
    $('.zqq_subnav').find('a').eq(0).attr('class','zqq_subnav_bg');
    $('.zqq_subnav1').find('a').attr('class','');
    $('.zqq_subnav1').find('a').eq(0).attr('class','zqq_subnav_bg');
    $('.zqq_hidden').css('display','block');
    $('#zqq_list').css('display','block');
    $('.zqq_hidden_beijing,.zqq_hidden_hangzhou,.zqq_hidden_guangzhou,.zqq_hidden_nanjing,.zqq_hidden_tianjin,.zqq_hidden_wuhan,.zqq_hidden_xian').css('display','none');
    $('#zqq_list_beijing,#zqq_list_hangzhou,#zqq_list_guangzhou,#zqq_list_nanjing,#zqq_list_tianjin,#zqq_list_wuhan,#zqq_list_xian').css('display','none');
    $('.zqq_subnav').find('a').eq(0).click(function(){
        $('.zqq_subnav').find('a').attr('class','');
        $('.zqq_subnav').find('a').eq(0).attr('class','zqq_subnav_bg');
        $(".zqq_base3 div[class*='hidden']").css('display','none');
        $('.zqq_hidden').css('display','block');
    });
    $('.zqq_subnav').find('a').eq(1).click(function(){
        $('.zqq_subnav').find('a').attr('class','');
        $('.zqq_subnav').find('a').eq(1).attr('class','zqq_subnav_bg');
        $(".zqq_base3 div[class*='hidden']").css('display','none');
        $('.zqq_hidden_beijing').css('display','block');
    });
    $('.zqq_subnav').find('a').eq(2).click(function(){
        $('.zqq_subnav').find('a').attr('class','');
        $('.zqq_subnav').find('a').eq(2).attr('class','zqq_subnav_bg');
        $(".zqq_base3 div[class*='hidden']").css('display','none');
        $('.zqq_hidden_hangzhou').css('display','block');
    });
    $('.zqq_subnav').find('a').eq(3).click(function(){
        $('.zqq_subnav').find('a').attr('class','');
        $('.zqq_subnav').find('a').eq(3).attr('class','zqq_subnav_bg');
        $(".zqq_base3 div[class*='hidden']").css('display','none');
        $('.zqq_hidden_guangzhou').css('display','block');
    });
    $('.zqq_subnav').find('a').eq(4).click(function(){
        $('.zqq_subnav').find('a').attr('class','');
        $('.zqq_subnav').find('a').eq(4).attr('class','zqq_subnav_bg');
        $(".zqq_base3 div[class*='hidden']").css('display','none');
        $('.zqq_hidden_nanjing').css('display','block');
    });
    $('.zqq_subnav').find('a').eq(5).click(function(){
        $('.zqq_subnav').find('a').attr('class','');
        $('.zqq_subnav').find('a').eq(5).attr('class','zqq_subnav_bg');
        $(".zqq_base3 div[class*='hidden']").css('display','none');
        $('.zqq_hidden_tianjin').css('display','block');
    });
    $('.zqq_subnav').find('a').eq(6).click(function(){
        $('.zqq_subnav').find('a').attr('class','');
        $('.zqq_subnav').find('a').eq(6).attr('class','zqq_subnav_bg');
        $(".zqq_base3 div[class*='hidden']").css('display','none');
        $('.zqq_hidden_wuhan').css('display','block');
    });
    $('.zqq_subnav').find('a').eq(7).click(function(){
        $('.zqq_subnav').find('a').attr('class','');
        $('.zqq_subnav').find('a').eq(7).attr('class','zqq_subnav_bg');
        $(".zqq_base3 div[class*='hidden']").css('display','none');
        $('.zqq_hidden_xian').css('display','block');
    });


    $('.zqq_subnav1').find('a').eq(0).click(function(){
        $('.zqq_subnav1').find('a').attr('class','');
        $('.zqq_subnav1').find('a').eq(0).attr('class','zqq_subnav_bg');
        $("#zqq_base6 div[id*='list']").css('display','none');
        $('#zqq_list').css('display','block');
    });
    $('.zqq_subnav1').find('a').eq(1).click(function(){
        $('.zqq_subnav1').find('a').attr('class','');
        $('.zqq_subnav1').find('a').eq(1).attr('class','zqq_subnav_bg');
        $("#zqq_base6 div[id*='list']").css('display','none');
        $('#zqq_list_beijing').css('display','block');
    });
    $('.zqq_subnav1').find('a').eq(2).click(function(){
        $('.zqq_subnav1').find('a').attr('class','');
        $('.zqq_subnav1').find('a').eq(2).attr('class','zqq_subnav_bg');
        $("#zqq_base6 div[id*='list']").css('display','none');
        $('#zqq_list_hangzhou').css('display','block');
    });
    $('.zqq_subnav1').find('a').eq(3).click(function(){
        $('.zqq_subnav1').find('a').attr('class','');
        $('.zqq_subnav1').find('a').eq(3).attr('class','zqq_subnav_bg');
        $("#zqq_base6 div[id*='list']").css('display','none');
        $('#zqq_list_guangzhou').css('display','block');
    });
    $('.zqq_subnav1').find('a').eq(4).click(function(){
        $('.zqq_subnav1').find('a').attr('class','');
        $('.zqq_subnav1').find('a').eq(4).attr('class','zqq_subnav_bg');
        $("#zqq_base6 div[id*='list']").css('display','none');
        $('#zqq_list_nanjing').css('display','block');
    });
    $('.zqq_subnav1').find('a').eq(5).click(function(){
        $('.zqq_subnav1').find('a').attr('class','');
        $('.zqq_subnav1').find('a').eq(5).attr('class','zqq_subnav_bg');
        $("#zqq_base6 div[id*='list']").css('display','none');
        $('#zqq_list_tianjin').css('display','block');
    });
    $('.zqq_subnav1').find('a').eq(6).click(function(){
        $('.zqq_subnav1').find('a').attr('class','');
        $('.zqq_subnav1').find('a').eq(6).attr('class','zqq_subnav_bg');
        $("#zqq_base6 div[id*='list']").css('display','none');
        $('#zqq_list_wuhan').css('display','block');
    });
    $('.zqq_subnav1').find('a').eq(7).click(function(){
        $('.zqq_subnav1').find('a').attr('class','');
        $('.zqq_subnav1').find('a').eq(7).attr('class','zqq_subnav_bg');
        $("#zqq_base6 div[id*='list']").css('display','none');
        $('#zqq_list_xian').css('display','block');
    });
    //点击换图片
    var index=0;
    $(".zqq_hotel_right").click(function(){
        $(".zqq_base5").eq(index).css('display','none');
        $(".zqq_base5_beijing").eq(index).css('display','none');
        $(".zqq_base5_hangzhou").eq(index).css('display','none');
        $(".zqq_base5_guangzhou").eq(index).css('display','none');
        $(".zqq_base5_nanjing").eq(index).css('display','none');
        $(".zqq_base5_tianjin").eq(index).css('display','none');
        $(".zqq_base5_wuhan").eq(index).css('display','none');
        $(".zqq_base5_xian").eq(index).css('display','none');
        index=++index==$(".zqq_base5").length?0:index;
        $(".zqq_base5").eq(index).css('display','block');
        $(".zqq_base5_beijing").eq(index).css('display','block');
        $(".zqq_base5_hangzhou").eq(index).css('display','block');
        $(".zqq_base5_guangzhou").eq(index).css('display','block');
        $(".zqq_base5_nanjing").eq(index).css('display','block');
        $(".zqq_base5_tianjin").eq(index).css('display','block');
        $(".zqq_base5_wuhan").eq(index).css('display','block');
        $(".zqq_base5_xian").eq(index).css('display','block');
        if(index>2){
            index=index-3;
            $(".zqq_base5").eq(index).css('display','block');
            $(".zqq_base5_beijing").eq(index).css('display','block');
            $(".zqq_base5_hangzhou").eq(index).css('display','block');
            $(".zqq_base5_guangzhou").eq(index).css('display','block');
            $(".zqq_base5_nanjing").eq(index).css('display','block');
            $(".zqq_base5_tianjin").eq(index).css('display','block');
            $(".zqq_base5_wuhan").eq(index).css('display','block');
            $(".zqq_base5_xian").eq(index).css('display','block');
        }
    });
    $(".zqq_hotel_left").click(function(){
        $('.zqq_base5').eq(index).css('display','none');
        $(".zqq_base5_beijing").eq(index).css('display','none');
        $(".zqq_base5_hangzhou").eq(index).css('display','none');
        $(".zqq_base5_guangzhou").eq(index).css('display','none');
        $(".zqq_base5_nanjing").eq(index).css('display','none');
        $(".zqq_base5_tianjin").eq(index).css('display','none');
        $(".zqq_base5_wuhan").eq(index).css('display','none');
        $(".zqq_base5_xian").eq(index).css('display','none');
        index=--index==$('.zqq_base5').length?0:index;
        if(index<0){
            index=index+3;
            $('.zqq_base5').eq(index).css('display','block');
            $(".zqq_base5_beijing").eq(index).css('display','block');
            $(".zqq_base5_hangzhou").eq(index).css('display','block');
            $(".zqq_base5_guangzhou").eq(index).css('display','block');
            $(".zqq_base5_nanjing").eq(index).css('display','block');
            $(".zqq_base5_tianjin").eq(index).css('display','block');
            $(".zqq_base5_wuhan").eq(index).css('display','block');
            $(".zqq_base5_xian").eq(index).css('display','block');
        }
        $('.zqq_base5').eq(index).css('display','block');
        $(".zqq_base5_beijing").eq(index).css('display','block');
        $(".zqq_base5_hangzhou").eq(index).css('display','block');
        $(".zqq_base5_guangzhou").eq(index).css('display','block');
        $(".zqq_base5_nanjing").eq(index).css('display','block');
        $(".zqq_base5_tianjin").eq(index).css('display','block');
        $(".zqq_base5_wuhan").eq(index).css('display','block');
        $(".zqq_base5_xian").eq(index).css('display','block');
    });
});
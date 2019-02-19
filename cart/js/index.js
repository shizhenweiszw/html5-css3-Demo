$(function () {
    $('#container').fullpage({
        //配置参数
        //设置每一个屏幕的背景颜色
        sectionsColor: ["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
        //设置屏幕内容对齐方式，默认是垂直居中 改成顶部对齐
        verticalCentered: false,
        //设置导航指示器
        navigation: true,
        //监听进入某一屏的时候
        afterLoad:function(link,index){
            $('.section').eq(index-1).addClass('now');
        },
        //离开某一个页面时出发
        onLeave: function(index,nextIndex,direction){
            var currentSection=$('.section').eq(index-1);
            if (index==2&&nextIndex==3){
            //    当前是从第二页到第三页
                currentSection.addClass('leaved');
            }else if(index==3&&nextIndex==4){
                /*从第三页到第四页*/
                currentSection.addClass('leaved');
            }else if(index==5&&nextIndex==6){
                /*从第五页到第六页*/
                currentSection.addClass('leaved');
                $('.screen06 .box').addClass('show');
            }else if(index==6&&nextIndex==7){
                /*从第六页到第七页*/
                $('.screen07 .star img').each(function (i,item) {
                    $(this).delay(i*0.5*1000).fadeIn();
                });
                $('.screen07 .text').addClass('show');
            }
        },
        //组件初始完毕或者插件内容渲染完毕
        afterRender:function () {
            $('.more').on('click',function () {
                $.fn.fullpage.moveSectionDown();
            });

            $('.screen04 .cart').on('transitionend',function () {
                $('.screen04 .address').show().find('img:last').fadeIn(1000);
                $('.screen04 .text').addClass('show');
            });
            /*第八屏手跟着鼠标移动*/
            $('.screen08').on('mousemove',function (e) {
               $('.screen08 .hand').css({
                   left:e.clientX-300,
                   top:e.clientY-110
               });
            }).find('.again').on('click',function () {
                $('.now,.leaved,.show').removeClass('now').removeClass('leaved').removeClass('show');
                $('.content [style]').removeAttr('style');
                $.fn.fullpage.moveTo(1);
            });
        },
        /*当第四屏购物车动画结束后执行收货地址动画*/

        //页面切换时间默认700ms
        scrollingSpeed: 1000

    });

});
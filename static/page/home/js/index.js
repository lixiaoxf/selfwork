import $ from 'jquery';
import context from '@/common/js/context.js';
let mousemove = context.mousemove;
mousemove.setInnerDom($('<div class="movedom"><div class="black-arrow-rt"></div></div>'))
setTimeout(function(){
    $('.section1').removeClass('firstenter')
    $('.yellow-arrow').show()
    header.show()
},400)

let app = {
    init(){
        this.wrap = $('.page-wrap')
        this.titlefix = $('.titlefix')
        this.initEvt()
        this.initSection2Num()
    },
    initSection2Num(){
        let height = $(window).height()
        this.titlefix.height(height)
        let top = this.titlefix.position().top
        this.titlefixnum = {
            top:0,
            bottom: 0,
            sectionTop:$('.section2')[0].offsetTop,
            titlefixHeight:height,
            sectionHeight:$('.section2')[0].offsetHeight,
            sectionTop:$('.section2')[0].offsetTop
        }
    },
    initEvt(){
        var _this = this;
        $('.yellow-arrow').on('click',function(){
            let top = $('.section2')[0].offsetTop;
            $('[scroll-wrap]').animate({scrollTop:top},800)
        })
        this.wrap.on('mouseenter','.article',function(){
            mousemove.addClass('big')
        })
        this.wrap.on('mouseleave','.article',function(){
            mousemove.removeClass('big')
        })

        scrollstep.enter(1,function(){
            header.changeStyle('dark')
            header.putAway()
        })
        scrollstep.leave(1,function(item,scrolltop){
            header.changeStyle('default')
            header.open()
            if(scrolltop < item.top){
                _this.titlefix.css({
                    position:'absolute',
                    top:0,
                    bottom:'unset'
                })
            }

        })
        scrollstep.move(1,function(item,scrolltop){
            let height = _this.titlefixnum.sectionHeight + _this.titlefixnum.sectionTop
            if(scrolltop > item.top){
                _this.titlefix.css({
                    position:'fixed',
                    top:_this.titlefixnum.top,
                    bottom:'unset'
                })
            }
            if(scrolltop+_this.titlefixnum.titlefixHeight>=item.bottom){
                _this.titlefix.css({
                    position:'absolute',
                    top:'unset',
                    bottom:'0'
                })
            }

        })
    }
}
app.init()
import $ from 'jquery';
import context from '@/common/js/context.js';
let mousemove = context.mousemove;
mousemove.setInnerDom($('<div class="movedom"><div class="play-btn"></div></div>'))
header.show()

function sectionScroll(option){
    let scrollWrap = option.wrap;
    let posdom = option.dom;
    var windowHeight = $(window).height()-2,windowWidth = $(window).width()-2;
    function initPosDom(dom){
        var thisdom = dom[0];
        var thisvideo = dom.find('.video-wrap')
        var sectionHeight =thisdom.offsetHeight
        var sectionTop = thisdom.offsetTop
        var height = thisvideo[0].offsetHeight ,width =  thisvideo[0].offsetWidth;
        var tx = (windowWidth/width),ty = (windowHeight/height);
        scrollWrap.on('scroll',function(e){
            var scrollCur = e.target.scrollTop
            if(scrollCur >= sectionTop && scrollCur-sectionTop <= sectionHeight ){
                var precet = (scrollCur-sectionTop)/(sectionHeight) *  1.4
                precet < 0 ? precet = 0: '';
                var X = precet +1 >= tx ? tx : precet +1
                var Y=  precet +1 >= ty ? ty : precet +1
                thisvideo.css({
                    'transform':'scale('+X+','+Y+')'
                })
            }
        })
    }
    posdom.map(function(){
        initPosDom($(this))
    })
     



}



let app = {
    init(){
        this.wrap = $('.page-wrap')
        this.initEvt()
        sectionScroll({
            wrap:$('[scroll-wrap]'),
            dom:$('[section-scalc]')
        })
    },

    initEvt(){
        var _this = this;
        this.wrap.on('mouseenter','.video-wrap',function(){
            mousemove.addClass('big')
        })
        this.wrap.on('mouseleave','.video-wrap',function(){
            mousemove.removeClass('big')
        })
        scrollstep.leave(5,function(){
            header.putAway()
        })
        scrollstep.enter(0,function(){
            header.open()
        })
        scrollstep.enter(1,function(){
            header.putAway()
        })
        scrollstep.enter(5,function(){
            header.open()
        })
    }
}
app.init()
import $ from 'jquery';
import context from '@/common/js/context.js';
let mousemove = context.mousemove;
mousemove.setInnerDom($('<div class="movedom"><div class="inner"></div></div>'))

header.show()
header.changeStyle('white')
var advisorlist = {
    'init':function(){
        this.listdom = $('.advisor-card-list')
        this.max = this.listdom.find('.advisor-card').length;
        this.leftBtn = $('.section4').find('[blackArrow=left]');
        this.rightBtn = $('.section4').find('[blackArrow=right]');
        this.curStep = 0
        this.setStep(0)
        this.initEvt();
    },
    setStep(step){
        $('.section4').find('[blackArrow]').removeClass('noclick');
        if(step >= this.max-1){
            this.rightBtn.addClass('noclick')
        }else if(step <= 0){
            this.leftBtn.addClass('noclick')
        }
       
        if(step > this.max-1 || step < 0){
            return ;
        }
        
        this.curStep = step;
        this.listdom.css('transform','translateX(-'+step*100+'%)')
    },
    initEvt:function(){
        let _this = this;
        $('.section4').on('click','[blackArrow]',function(){
            let type = $(this).attr('blackArrow')
            if(type=='left'){
                _this.setStep(_this.curStep - 1)
            }else{
                _this.setStep(_this.curStep + 1)
            }
            
        })

    }
}
let app = {
    init(){
        advisorlist.init()
        this.wrap = $('.page-wrap')
        this.titlefix = $('.titlefix')
        this.initEvt()
        this.initSection2Num()
    },
    initSection2Num(){
        let height = $(window).height()
        this.titlefix.height(height)

        let top = this.titlefix[0].offsetTop
        this.titlefixnum = {
            top,
            bottom: 0
        }
    },
    initEvt(){
        var _this = this;
        this.wrap.on('mouseenter','.black-arrow-wrap',function(){
            if($(this).hasClass('l')){
                mousemove.innerDom.find('.inner').removeClass('black-arrow-r').addClass('black-arrow-l')
            }else{
                mousemove.innerDom.find('.inner').removeClass('black-arrow-l').addClass('black-arrow-r')
            }
            mousemove.addClass('big')
        })
        this.wrap.on('mouseleave','.black-arrow-wrap',function(){
            mousemove.removeClass('big')
        })
        scrollstep.leave(0,function(){
            header.changeStyle('white')
            $('.section2 .page-p').map(function(index){
                $(this).addClass('font-move delay-'+index)
            })
        })
        scrollstep.enter(0,function(){
            header.open()
            header.changeStyle('white')
        })
        scrollstep.enter(1,function(){
            header.putAway()
        })
        scrollstep.enter(3,function(){
            header.open()
        })
        scrollstep.leave(3,function(){
            header.putAway()
        })
        scrollstep.leave(1,function(){
            header.changeStyle('white')
        })
        let moved = false
        scrollstep.move(0,function(item,scrolltop){
            _this.titlefix.css({
                position:'fixed',
                top:_this.titlefixnum.top,
                bottom:'unset'
            })
            if(!moved){
                $('.section2 .page-p').eq(0).addClass('font-move')
                $('.section2 .page-p').eq(1).addClass('font-move delay-1')
                $('.section2 .page-p').eq(2).addClass('font-move delay-2')
                moved = true;
                // if(scrolltop>item.top+item.bottom/2){
                //     $('.section2 .page-p').eq(0).addClass('font-move')
                // }else if(scrolltop>item.top+item.bottom*2/3){
                //     $('.section2 .page-p').eq(1).addClass('font-move ')
                // }else if(scrolltop>item.bottom){
                //     $('.section2 .page-p').eq(2).addClass('font-move')
                //     let moved = true;
                // }
            }

        })
        scrollstep.move(1,function(item,scrolltop){
            let height = $('.section2')[0].offsetHeight+$('.section2')[0].offsetTop
            if(scrolltop+$(window).height() <= height ){
                _this.titlefix.css({
                    position:'fixed',
                    top:_this.titlefixnum.top,
                    bottom:'unset'
                })

            }else{
                _this.titlefix.css({
                    position:'absolute',
                    top:'unset',
                    bottom:_this.titlefixnum.bottom
                })
            }


           
        })
    }
}
app.init()
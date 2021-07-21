import $ from 'jquery';

var slider = {
    init(){
        this.wrap = $('.section3')
        this.cur = 0
        this.photos = this.wrap.find('.user-photo-wrap .scroll-inner')
        this.msgs = this.wrap.find('.user-msg-wrap .scroll-inner')
        this.length = this.photos.find('.user-photo-card').size()
        this.toStep(0
            )
        this.initEvt();
    },
    toStep(step){
        if(step<0 || step>=this.length){
            return ;
        }
        if(step-1<0){
            this.wrap.find('.btn.left').addClass('hide')
        }else{
            this.wrap.find('.btn.left').removeClass('hide')
        }
        if(step+1 >=this.length){
            this.wrap.find('.btn.right').addClass('hide')
        }else{
            this.wrap.find('.btn.right').removeClass('hide')
        }
        this.cur = step;
        this.msgs.css('transform','translateX(-'+step*100+'%)')
        this.photos.css('transform','translateX(-'+step*100+'%)')
    },
    initEvt(){
        var _this= this; 
        this.wrap.on('click','.btn',function(){
            if($(this).hasClass('left')){
                _this.toStep(_this.cur-1)
            }else{
                _this.toStep(_this.cur+1)
            }
        })
    }

}
slider.init()
scrollstep.enter(2,function(){
    $('.app-page').addClass('yellowdark')
})
scrollstep.leave(2,function(item,scrolltop){
    $('.app-page').removeClass('yellowdark')

})
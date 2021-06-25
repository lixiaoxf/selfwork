import $ from 'jquery';

$(function(){
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
            $('.black-arrow-wrap').removeClass('hide')
            if(step <= 0) {
                $('.black-arrow-wrap.left').addClass('hide');
            }
            if(step >= this.max-1){
                $('.black-arrow-wrap.right').addClass('hide');
            }
            if(step > this.max-1 || step < 0){
                return ;
            }
            $('.section4 [blackArrow]').show();
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
    header.show()
    advisorlist.init();
    app.canSetStep = function(step){
        if(step==3){
            header.putAway()
        }
        if(step>=3){
            
            header.changeStyle('default')
        }
    } 
    
})
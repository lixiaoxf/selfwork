
import $ from 'jquery';
import '@/common/js/mousewheel.js'
$(function(){


    var app = {
        init:function(){
            this.steps = 5
            this.step = 1;
            this.pageduration = 2;
            this.canProagation = false;
            this.cd = false;
            this.wrap = $('.app-page')
            this.yellowBtn = $('.yellow-arrow');
            this.initEvt();
        },
        clearStep:function(){
            for(var i = 0;i<this.steps;i++){
                this.wrap.removeClass('step'+(i+1))
            }
        },
        canSetStep(step){
            
            if(step==3){
                header.show()
            }

            if(step<=5){
                header.changeStyle('default')
            }

            if(step==4){
                header.putAway()
                header.changeStyle('dark')
            }

        },
        setStep:function(step){
            if(step<=0 || step> this.steps || this.cd){
                return ;
            }
            this.cd = true;
            this.clearStep()
            this.wrap.addClass('step'+step)
            this.step = step;
            this.canSetStep(step)
            setTimeout(()=>{
                this.cd = false
            },this.pageduration * 1000)

        },
        initEvt:function(){
            let _this = this;
            this.wrap.on('click','.yellow-arrow',function(){
                _this.setStep(++_this.step);
            })
            $('.page-section').on('mousewheel', function(e) {
                if(e.wheelDelta < -30){
                    _this.setStep(_this.step + 1)
                }

                if(e.wheelDelta > 30){
                    _this.setStep(_this.step - 1)
                }
            
            });
            var timer = null;
            $('[scroll-delay]').on('mousewheel',function(e){
                var $this = $(this);
                var scrolltop = $this.scrollTop()
                var scrollHeigth = $this[0].scrollHeight
                var height = $this[0].offsetHeight
                if(height+scrolltop == scrollHeigth || scrolltop == 0){
                    
                    if(!_this.canProagation){
                        clearTimeout(timer)
                        timer = setTimeout(function(){
                            _this.canProagation = true;
                        },200)
                        e.stopPropagation()
                    }
                   
                }else{
                    _this.canProagation = false;
                    e.stopPropagation()
                }
                
            })
        }
    }
    app.init();
    window.app = app;
})
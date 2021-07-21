import $ from 'jquery';
import context from '@/common/js/context.js';
let mousemove = context.mousemove;
mousemove.setInnerDom($('<div class="movedom"><div class="black-arrow-rt"></div></div>'))
header.show()

let app = {
    init(){
        this.wrap = $('.page-wrap')
        this.titlefix = $('.titlefix')
        this.initEvt()

    },

    initEvt(){

        scrollstep.enter(0,function(){
            header.open()
        })
        scrollstep.enter(1,function(){
            header.changeStyle('dark')
            header.putAway()
        })
        scrollstep.leave(1,function(){
            header.changeStyle('default')
        })
        scrollstep.leave(3,function(){
            header.putAway()
        })
        scrollstep.enter(3,function(){
            header.open()
        })
    }
}
app.init()
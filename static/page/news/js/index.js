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
       
    }
}
app.init()
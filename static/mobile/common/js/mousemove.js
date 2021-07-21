import $ from 'jquery';
import context from './context';

var mousemove = {
    init:function(option){
        if(!option){
            option = {}
        }
        this.wrap = $('body');
        this.className = option.className || '';
        this.innerDom = option.innerDom ||
        this.dom;
        this.createDom();
        this.startmove();
    },
    createDom:function(){
        if(this.dom){
            return
        }
        this.dom = $('<div class="movewrap '+this.className+'">'+this.innerDom+'</div>');
        this.wrap.append(this.dom);
    },
    setInnerDom(dom){
        this.innerDom = dom;
        this.dom.html(dom)
    },
    addClass(name){
        this.innerDom.addClass(name)
    },
    removeClass(name){
        this.innerDom.removeClass(name)
    },
    startmove:function(){
        var _this = this;
        this.wrap.on('mousemove',function(e){
            _this.setPos(e.pageX,e.pageY)
        })
    },
    setPos(x,y){
        this.dom.css({
            'opacity':1,
            'transform':'translate('+x+'px,'+y+'px)'
        })
    }

}
mousemove.init()
context.mousemove = mousemove

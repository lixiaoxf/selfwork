import $ from 'jquery'
const StyleMap = {
    default:'default',
    dark:'dark'
}
class SiteHeader {
    constructor(){
        this.dom = $('#site-header')
        this.setAct();
        this.initEvt()
    }
    initEvt(){
        var _this = this;
        this.dom.on('click','.putawayicon',function(){
            
            if(_this.dom.hasClass('putAway')){
                _this.open()
            }else{
                _this.putAway()
            }
        })
    }
    setAct(){
        var path = window.location.pathname;
        this.dom.find('.navlist a').each(function(){
            var link = $(this).attr('href');
            if(link.indexOf( path)>-1||(link=='/'&&path=='/index')){
                $(this).parent().addClass('cur')
            }
        })

    }
    show(){
        this.dom.removeClass('hide')
    }
    changeStyle(type){
        Object.values(StyleMap).map(className=>{
            this.dom.removeClass(className)
        })

        this.dom.addClass(StyleMap[type] || StyleMap['default'])
    }
    putAway(){
        this.dom.removeClass('open').addClass('putAway')
    }
    open(){
        this.dom.removeClass('putAway').addClass('open')
    }
}
export default new SiteHeader()
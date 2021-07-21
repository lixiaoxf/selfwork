import $ from 'jquery';

var scrollstep = {
    init(){
         this.wrap = $('[scroll-wrap]')
         this.steptops=[];
         this.curstep;
         this.entercallback = {};
         this.leavecallback = {};
         this.movecallback = {};
         this.initStep()
         this.initEvt()
    },
    initStep(){
        var _this = this;
        this.wrap.find('[scroll-step]').each(function(index){
            let top = $(this)[0].offsetTop;
            let bottom = top + $(this)[0].offsetHeight;
            _this.steptops.push({
                top,
                bottom,
                index
            })
        })
    },
    move(step,callback){
        this.movecallback[step] ? this.movecallback[step].push(callback) : this.movecallback[step] = [callback]
    },
    enter(step,callback){
        this.entercallback[step] ? this.entercallback[step].push(callback) : this.entercallback[step] = [callback]
    },
    leave(step,callback){
        this.leavecallback[step] ? this.leavecallback[step].push(callback) : this.leavecallback[step] = [callback]
    },
    call(type,key,scrollTop){
        let callbacks = this[type+'callback'] && this[type+'callback'][key];
        callbacks&&callbacks.map(callback=>{
            callback && callback(this.curstep,scrollTop)
        })
    },
    countStep(scrolltop){
        if(this.curstep && this.isinStep(this.curstep,scrolltop)){
                return 
        }
        var _this = this
        this.curstep && this.call('leave',this.curstep.index,scrolltop)
        this.steptops.some((item,index)=>{
            if(_this.isinStep(item,scrolltop)){
                _this.curstep = item;
                _this.call('enter',_this.curstep.index,scrolltop)
            }
        })
    },
    isinStep(item,scrolltop){
        let height = $(window).height();
        let curPos = scrolltop + 60;
        if(curPos>=item.top && curPos<item.bottom){
            return true;
        }else{
            return false;
        }
    },
    initEvt(){
        var _this = this;
        this.wrap.on('scroll',function(e){
            let scrolltop = e.target.scrollTop;
            _this.countStep(scrolltop)
            _this.curstep && _this.call('move',_this.curstep.index,scrolltop);
        })
    }
}
scrollstep.init()
window.scrollstep = scrollstep
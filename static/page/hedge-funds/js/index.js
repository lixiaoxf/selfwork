import $ from 'jquery';

$(function(){
    header.show()
    app.steps = 3;
    app.canSetStep = function(step){
        if(step == 1){
            header.changeStyle('default')
        }

        if(step==2){
            header.putAway()
            header.changeStyle('dark')
        }
        if(step==3){
            header.putAway()
            header.changeStyle('default')
        }
    } 
    
})
import $ from 'jquery';

$(function(){
    header.show()
    app.canSetStep = function(step){
        if(step==2){
            header.putAway()
        }
        if(step>=2){
            
            header.changeStyle('default')
        }
    } 
})
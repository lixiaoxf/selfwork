import $ from 'jquery';

scrollstep.enter(1,function(){
    $('.app-page').addClass('sitedark')
})
scrollstep.leave(1,function(item,scrolltop){
    $('.app-page').removeClass('sitedark')

})
setTimeout(function(){
    $('.start-icon').addClass('movetop')
},200)

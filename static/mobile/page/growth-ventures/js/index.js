import $ from 'jquery';
scrollstep.enter(1,function(){
    $('.app-page').addClass('yellowdark')
})
scrollstep.leave(1,function(item,scrolltop){
    $('.app-page').removeClass('yellowdark')

})
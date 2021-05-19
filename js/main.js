$('.toggle-bar').on('click', function(event){
    $(this).toggleClass('open');
    $('#navigation').slideToggle(300);
})
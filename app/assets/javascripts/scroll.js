window.addEventListener('DOMContentLoaded', function(){

$(function(){
  var effect_pos = 1350; 
  var effect_move = 70; 
  var effect_time = 800;

  $('.main-wrapper__groups--app').css({
      opacity: 0,
      transform: 'translateY('+ effect_move +'px)',
      transition: effect_time + 'ms'
  });

  $(window).on('scroll load', function(){
      var scroll_top = $(this).scrollTop();
      var scroll_btm = scroll_top + $(this).height();
      effect_pos = scroll_btm - effect_pos;

      $('.main-wrapper__groups--app').each( function() {
          var this_pos = $(this).offset().top;
          if ( effect_pos > this_pos ) {
              $(this).css({
                  opacity: 1,
                  transform: 'translateY(0)'
              });
          }
      });
  });
});







}); 
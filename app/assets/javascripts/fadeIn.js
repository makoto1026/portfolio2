window.addEventListener('DOMContentLoaded', function(){

$(function(){
  $('.about-wrapper__box__left--textBox p').addClass('move');
  $(window).scroll(function(){
    $('.about-wrapper__box__left--textBox').each(function(){
      var imgPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight/5){
        $(this).find("p").removeClass("move");
      } else {
        $(this).find("p").addClass('move');
      }
    });
  });
});

$(function(){
  $('.about-wrapper__box__right img').addClass('move');
  $(window).scroll(function(){
    $('.about-wrapper__box__right').each(function(){
      var imgPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight/5){
        $(this).find("img").removeClass("move");
      } else {
        $(this).find("img").addClass('move');
      }
    });
  });
});

});
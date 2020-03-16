window.addEventListener('DOMContentLoaded', function(){

  var _window = $(window),
      _header = $('.site-header'),
      heroBottom;
  
  _window.on('scroll',function(){
      heroBottom = $('.top-wrapper__left--body').height();
      if(_window.scrollTop() > heroBottom){
          _header.addClass('transform');   
      }
      else{
          _header.removeClass('transform');   
      }
  });
  
  _window.trigger('scroll');
  
  }); 
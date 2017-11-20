$(document).ready(function() {
//main menu show/hide on phone screen
  var menu  = $('#menu');
  var burger = menu.find('.menu__toggle');
  menu.removeClass("menu--nojs");
  burger.on('click', function(){
      menu.toggleClass("menu--opened");
  });

//slider
  $('.slider').slick({
  	dots: false
  });
});
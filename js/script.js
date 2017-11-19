//main menu show/hide on phone screen
$(document).ready(function() {
  let menu  = $('#menu');
  let burger = menu.find('.menu__toggle');
  menu.removeClass("menu--nojs");
  burger.on('click', function(){
      menu.toggleClass("menu--opened");
  });
});
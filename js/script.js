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

  $('.chart__percent').each(function(){
  	$(this).after('<span class="chart__jshint">' + $(this).text().slice(1, -1) + '</span>');
  })

  $('.chart__load').on('mouseover', function(){
  	$(this).addClass('chart__load--active');
  });

  $('.chart__load').on('mouseout', function(){
  	$(this).removeClass('chart__load--active');
  });
});
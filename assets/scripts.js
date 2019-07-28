jQuery( document ).ready(function($){
  // Smoooooth scrolling
  $('.smooth-scroll').on("click", function(){
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top - 60
    }, 500);
    return false;
  });

  // Set navbar height
  var $h = $('.navbar').outerHeight(),
      $wh = $(window).outerHeight();
  $("nav").css({
    "top": $h + "px",
    "height": $wh-$h + "px"
  });

  // Toggle menu
  var $hamburger = $('.hamburger');
  $hamburger.on("click", function(){
    $hamburger.toggleClass("is-active");
    $('.navbar').toggleClass("menu-open");
    $('nav').fadeToggle("fast");
  });

});

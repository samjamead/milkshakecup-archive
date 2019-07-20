jQuery( document ).ready(function($){
  // Smoooooth scrolling
  $('.smooth-scroll').on("click", function(){
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top - 60
    }, 500);
    return false;
  });

  // Toggle menu
  var $hamburger = $('.hamburger');
  $hamburger.on("click", function(){
    $hamburger.toggleClass("is-active");
    $('.navbar').toggleClass("menu-open");
  });

});

$(function() {

  var pathname = window.location.pathname;

  $(".menu a").each(function(index) {
    if (pathname === $(this).attr('href') ) {
      $(this).addClass("active");
    }
  });

  $('.mobile-nav-toggle').on('click', function(){
    var status = $(this).hasClass('is-open');
    if(status){ $('.mobile-nav-toggle, #page-header').removeClass('is-open'); }
    else { $('.mobile-nav-toggle, #page-header').addClass('is-open'); }
  });

})

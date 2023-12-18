$(document).ready(function() {

  $('.color-choose input').on('click', function() {
      var Bookcolor = $(this).attr('data-image');

      $('.active').removeClass('active');
      $('.left-column img[data-image = ' + Bookcolor + ']').addClass('active');
      $(this).addClass('active');
  });

});

$(document).ready(function() {

  $('a').click(function(e) {
    if($(this).attr('target') !== '_blank' && !e.ctrlKey) {
      //$('#body-wrapper').addClass('blur');
      $('.loader-wrapper').removeClass('loader-wrapper-hidden');
    }
  });

});
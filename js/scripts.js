$(document).ready(function() {

  /*// Allow better <pre><code> formatting.
  $("pre code").each(function() {
    const $this = $(this);

    const html = $this.html();
    const pattern = html.match(/\s*\n[\t\s]*!/);

    $this.html(html.replace(new RegExp(pattern, 'g'), '\n'));
  });*/

  $('a').click(function(e) {
    const $element = $(this);

    if($element.attr('href') !== '#' && $element.attr('target') !== '_blank' && !e.ctrlKey) {
      $('#body-wrapper').addClass('blur');
      $('.loader-wrapper').removeClass('loader-wrapper-hidden');
    }
  });

});
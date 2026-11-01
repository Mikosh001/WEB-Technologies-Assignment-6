$(document).ready(function () {
  $('#change-text').on('click', function () {
    $('#selector-title').text('Selected by ID with jQuery');
  });

  $('#change-html').on('click', function () {
    $('.selector-message').html('Explore <strong>Aktau and Mangystau</strong>.');
  });

  $('#change-css').on('click', function () {
    $('h3').css({
      'color': '#1765a8',
      'font-size': '28px'
    });
  });
});

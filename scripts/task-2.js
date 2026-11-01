$(document).ready(function () {
  $('#hide-text').on('click', function () {
    $('#visibility-text').hide();
  });

  $('#show-text').on('click', function () {
    $('#visibility-text').show();
  });

  $('#toggle-text').on('click', function () {
    $('#visibility-text').toggle();
  });
});

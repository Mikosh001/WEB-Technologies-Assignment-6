$(document).ready(function () {
  $('#live-form').on('submit', function (event) {
    event.preventDefault();
  });

  $('#name').on('input', function () {
    $('#live-name').text($(this).val() || '—');
  });

  $('#email').on('input', function () {
    $('#live-email').text($(this).val() || '—');
  });
});

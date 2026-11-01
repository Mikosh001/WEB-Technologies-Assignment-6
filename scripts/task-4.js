$(document).ready(function () {
  const panel = $('#slide-panel');

  $('#slide-up').on('click', function () {
    panel.stop(true, true).slideUp(400);
  });

  $('#slide-down').on('click', function () {
    panel.stop(true, true).slideDown(400);
  });

  $('#slide-toggle').on('click', function () {
    panel.stop(true, true).slideToggle(400);
  });
});

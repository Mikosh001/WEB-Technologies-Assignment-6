$(document).ready(function () {
  const image = $('#fade-image');

  $('#fade-in').on('click', function () {
    image.stop(true, true).fadeIn(400);
  });

  $('#fade-out').on('click', function () {
    image.stop(true, true).fadeOut(400);
  });

  $('#fade-toggle').on('click', function () {
    image.stop(true, true).fadeToggle(400);
  });
});

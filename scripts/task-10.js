$(document).ready(function () {
  $('#animate-combined').on('click', function () {
    $('#combined-box')
      .stop(true, true)
      .css({ opacity: 1, width: 64, height: 64, left: 16, top: 16 })
      .animate({
        opacity: 0.35,
        width: 136,
        height: 136,
        left: 88,
        top: 104
      }, 900);
  });
});

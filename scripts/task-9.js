$(document).ready(function () {
  $('#animate-sequence').on('click', function () {
    $('#sequence-box')
      .stop(true, true)
      .css({ width: 64, height: 64, left: 16, top: 16 })
      .animate({ left: 160 }, 400)
      .animate({ top: 144 }, 400)
      .animate({ width: 40, height: 40 }, 400)
      .animate({ left: 16, top: 16, width: 64, height: 64 }, 500);
  });
});

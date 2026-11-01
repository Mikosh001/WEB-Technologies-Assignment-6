$(document).ready(function () {
  $('#animate-basic').on('click', function () {
    $('#basic-box')
      .stop(true, true)
      .css({ width: 64, height: 64, left: 16, top: 16 })
      .animate({ width: 128, height: 128, left: 96, top: 80 }, 800);
  });
});

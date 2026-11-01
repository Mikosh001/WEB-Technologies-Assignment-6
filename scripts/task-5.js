$(document).ready(function () {
  let nextItem = 4;

  $('#add-item').on('click', function () {
    $('#item-list').append('<li>Item ' + nextItem + '</li>');
    nextItem += 1;
  });

  $('#prepend-item').on('click', function () {
    $('#item-list').prepend('<li>Item ' + nextItem + '</li>');
    nextItem += 1;
  });

  $('#remove-item').on('click', function () {
    $('#item-list li').last().remove();
  });
});

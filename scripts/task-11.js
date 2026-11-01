$(document).ready(function () {
  $('.accordion-button').on('click', function () {
    const button = $(this);
    const panel = $('#' + button.attr('aria-controls'));
    const opening = button.attr('aria-expanded') === 'false';

    $('.accordion-button').not(button).attr('aria-expanded', 'false');
    $('.accordion-button').not(button).find('.accordion-symbol').text('+');
    $('.accordion-panel').not(panel).stop(true, true).slideUp(300);

    button.attr('aria-expanded', opening ? 'true' : 'false');
    button.find('.accordion-symbol').text(opening ? '−' : '+');
    panel.stop(true, true).slideToggle(300);
  });
});

$(document).ready(function () {
  let showingSunset = false;
  let linkingToAccordion = false;

  $('#change-image').on('click', function () {
    showingSunset = !showingSunset;

    $('#attribute-image').attr({
      src: showingSunset ? 'images/aktau-sunset.jpg' : 'images/bozzhyra.jpg',
      alt: showingSunset
        ? 'Sunset over the Caspian Sea in Aktau'
        : 'White cliffs and rock formations in Bozzhyra Valley, Mangystau'
    });

    $('#image-caption').text(showingSunset
      ? 'Sunset over the Caspian Sea, Aktau.'
      : 'Bozzhyra Valley, Mangystau.');
  });

  $('#change-link').on('click', function () {
    linkingToAccordion = !linkingToAccordion;

    $('#dynamic-link')
      .attr('href', linkingToAccordion ? 'accordion.html' : 'fade.html')
      .text(linkingToAccordion ? 'Open Accordion Menu' : 'Open Fade Methods');
  });
});

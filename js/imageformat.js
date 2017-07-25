/*$(document).ready(function() {

  var $boxes = $('.portfolio-item');
  $boxes.hide();

  var $container = $('#js-masonry');
  $container.imagesLoaded( function() {
    $boxes.fadeIn();

    $container.masonry({
        itemSelector : '.portfolio-item',
        columnwidth: 10,
        gutter: 20,
        isFitWidth: true,
        isAnimated: true,
    });
  });
});*/
$(document).ready( function() {

  var $container = $('.js-masonry').imagesLoaded( function() {
    $container.masonry({
      columnWidth: 10,
      itemSelector: '.portfolio-item'
    });
  });

});

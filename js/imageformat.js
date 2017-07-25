$(document).ready(function() {

  //var $boxes = $('.portfolio-item');
  //$boxes.hide();

  var $container = $('#row');
  $container.imagesLoaded( function() {
    $boxes.fadeIn();

    $container.masonry({
        itemSelector : '.portfolio-item',
        columnwidth: 10,
        //gutter: 20,
        //isFitWidth: true,
        //isAnimated: true,
    });
  });
});

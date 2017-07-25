$(document).ready( function() {

  var $container = $('#row').imagesLoaded( function() {
    $container.masonry({
      columnWidth: 10,
      itemSelector: '.portfolio-item'
    });
  });

});

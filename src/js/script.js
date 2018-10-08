$(document).ready(function(){

  $('.sliders').slick({
  infinite: true,
  speed: 400,
  fade: true,
  arrows: false,
  autoplay: true
  }) 
});
  
$('.grid').masonry({
        // options
        itemSelector: '.grid-item',
        columnWidth:  '.grid-item',
        gutter: 15,
        isFitWidth: true
  });  


var $menu = $("#my-menu").mmenu({
   //   options
   "extensions": [
          "position-right",
    ],
    "autoHeight": true,
});
var $icon = $("#my-icon");
var API = $menu.data( "mmenu" );

$icon.on( "click", function() {
   API.open();
});
$("#my-icon").click(function() {
    API.close();
});
API.bind( "open:finish", function() {
   setTimeout(function() {
      $icon.addClass( "is-active" );
   }, 100);
});
API.bind( "close:finish", function() {
   setTimeout(function() {
      $icon.removeClass( "is-active" );
   }, 100);
});


var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

$overlay.append($image);
$overlay.append($caption);

$("body").append($overlay);



$("#imageGallery a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  var captionLocation = $(this).children("img").attr("alt");
  console.log(captionLocation);
  $image.attr('src',imageLocation);
  $caption.text(captionLocation);
  $overlay.show();
  console.log(imageLocation);
});

$overlay.click(function(){
  $(this).hide();
});

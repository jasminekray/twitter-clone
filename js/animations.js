$(document).ready(function() {

$(".tweet-compose").on("click", function(){
  $(this).css("height", "6em");
  $("#tweet-controls").css("opacity", "1");
});


$(".tweet-compose").keyup(function() {
  var length = $(this).val().length;
  $('#char-count').text(140 - length);
  if(length >= 130){
    $('#char-count').css("color", "red");
  } else if(length < 130){
    $('#char-count').css("color", "#999");
  }
  if(length <= 140){
    $('#tweet-submit').attr("disabled", false);
  } else if(length >= 140){
    $('#tweet-submit').attr("disabled", true);
  }
});

});

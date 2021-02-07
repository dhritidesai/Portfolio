function displayBlock(){
  $(".done").css("display", "block");
  $(".blur").addClass("active");
}

function displayNone(){
  $(".done").css("display", "none");
  $(".blur").removeClass("active");
}


$(".btn").on("click", displayBlock)
$(".fas").on("click", displayNone)

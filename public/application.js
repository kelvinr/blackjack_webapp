$(document).ready(function(){
  player_hits();
  player_stays();
  dealer_hit();
  if($(window).width() <= 640) {
      $(".pos").removeClass("spin spin_r");
    }
});

function player_hits() {
  $(document).on("click", "#hit", function() {
    $.ajax({
      type: "POST",
      url: "/hit"
    }).done(function(msg) {
      $("#game").replaceWith(msg)
    });

    return false;
  });
}

function player_stays() {
  $(document).on("click", "#stay", function () {
    $.ajax({
      type: "POST",
      url: "/stay"
    }).done(function(msg) {
      $("#game").replaceWith(msg)
    });

    return false;
  });
}

function dealer_hit() {
  $(document).on("click", "#dealer_hit", function() {
    $.ajax({
      type: "POST",
      url: "/game/dealer/hit"
    }).done(function(msg) {
      $("#game").replaceWith(msg)
    });

    return false;
  });
}
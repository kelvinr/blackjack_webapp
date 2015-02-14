$(document).ready(function(){
  get_name();
  info();
  place_bet();
  player_hits();
  player_stays();
  dealer_hit();
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

function get_name() {
  $("#name").submit(function() {
    var name = $.trim($(".name").val());
    if (name === '') {
      $(".error").text("Name is required.").show();
      return false;
    }
  });
}

function place_bet() {
  $("#bet").submit(function() {
    var bet = $.trim($(".bet").val());
    if (bet === '') {
      $(".error").text("Must place a bet.").show();
      return false;
    }
  });
}

function info() {
  $('.glyphicon-info-sign').click(function(){
    $('.directions').slideToggle();
  });
}
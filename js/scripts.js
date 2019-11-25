$(document).ready(function() {
  $("form#aboutyou").submit(function(event) {
    var age = parseInt($("input#age").val());
     var gender = $("select#gender").val();

    var celebrity = "gary coleman";
    if (gender === 'male' && age < 18) {
      celebrity = "hannah montana";
    } else if (gender === "nonbinary") {
      celebrity = "whoever the fuck you want!";
    } else if (gender === "transmale" && age > 18) {
      celebrity = "katlyn jenner";
    } else if (gender === "female" && age < 16) {
      celebrity = "justin beiber";
    } else if (gender === "transfemale") {
      celebrity = "should i be making any suggestion at all here, really?"
    } else if (gender === "female" && age >= 16) {
      celebrity = "george clooney";
    }

    $("#celebrity").text(celebrity);
    $("#partner").show();

    event.preventDefault();
  });
});

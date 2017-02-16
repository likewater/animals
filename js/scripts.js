// $(document).ready(function(){
//   $("form#Form").submit(function(event) {
//     if (animal==="lion"){
//       $("#showlion").show();
//     }
//     else if (animal==="tiger"){
//       $("#showtiger").show();
//     }
//     else if (animal==="-"){
//       $("#blank").show();
//     }
//     else  {
//       $("#showbear").show();
//     }
//   event.preventDefault();
//   var animal = $("#selection-box").val();
//   });
// // var lion = "lion";   //not really needed
// });


$(document).ready(function(){
  $("form#Form").submit(function(event) {
    var animal = $("#selection-box").val();

    if (animal==="lion"){
      $("#showlion").show();
    }
    else if (animal==="tiger"){
      $("#showtiger").show();
    }
    else if (animal===""){
      $("#blank").show();
    }
    else  {
      $("#showbear").show();
    }
  event.preventDefault();
  });
});

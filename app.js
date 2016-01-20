var main = function(){
  $('.entypo-menu').click(function(){
      $('.side-menu').animate({
        left: "0px"
      },200);

  });

  $(".entypo-left-open-big").click(function(){
     $('.side-menu').animate({
        left: "-250px"
      },200);

  

  });

};


$(document).ready(main);
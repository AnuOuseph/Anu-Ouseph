$(document).ready(function(){
  $('.head-right-btn').click(function(){
    $('.header .head-right').toggleClass("active");
    $('.head-right-btn i').toggleClass("active");
  });

  var typed = new Typed(".typing",{
    strings: ["Developer", "Artist"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

  $('.carousel').owlCarousel({
     margin: 20,
     loop: true,
     autoplayTimeOut: 2000,
     autoplayHoverPause: true,
     responsive: {
       0:{
         items: 1,
         nav: false
       },
       600:{
        items: 2,
        nav: false
      },
      1000:{
        items: 3,
        nav: false
      }
     }

  });
   

  $("#submit-form").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbzTLx6pBhfWv5t1pROaGOxrtM9ial0azh4ROg7gOg/exec",
        data:$("#submit-form").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")

        }
    });
});
  

});
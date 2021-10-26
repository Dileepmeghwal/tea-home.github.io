// Toggle button

$(".toggle-btn").click(function(){
    $("ul").slideToggle();
});



// carousel code

$('.owl-carousel').owlCarousel({
            loop:true,
            margin:25,
            nav:false,
            dots:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:3
                }
            }
        })
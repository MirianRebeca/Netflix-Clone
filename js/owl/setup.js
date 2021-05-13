$('.owl-carousel').owlCarousel({
    loop:true, 
    margin:10,
    nav:true, 
    dots: false,
    navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],


    
    responsive:{ 
        0:{
            items:2 
        },
        600:{
            items:5 
        },
        1000:{
            items:7
        }
    }
})

console.log("hello");

$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});


// $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:3
//         },
//         1000:{
//             items:5
//         }
//     }
// })

// $('.owl-carousel').owlCarousel({
//     stagePadding: 50,
//     loop:true,
//     margin:10,
//     nav:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:3
//         },
//         1000:{
//             items:5
//         }
//     }
// })

$('.owl-carousel').owlCarousel({
    items:1,
    margin:10,
    autoHeight:true
});


$('.hero-carousel').owlCarousel({
  loop:true,
  margin:20,
  dots:false,
  autoplay:true,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          
      },
      1400:{
          items:1,
         
      },
    
      
  }
});
$('.product-carousel').owlCarousel({
    loop:true,
    margin:20,
    responsiveClass:true,
    dots:false,
    navs:true,
    responsive:{
        0:{
            items:1
            
        },
        600:{
            items:1
            
        },
        1000:{
            items:1
            
        }
    }
})
$('.demo-carousel').owlCarousel({
    loop:true,
    responsiveClass:true,
    dots:false,
    nav:false,
    responsive:{
        0:{
            items:1,
            
        },
        550:{
            items:3,
           
        },
        750:{
            items:4,
            
        }
    }
})
$('.trends-carousel').owlCarousel({
    loop:true,
    responsiveClass:true,
    dots:false,
    nav:false,
    margin:20,
    responsive:{
        0:{
            items:1,
        },
     600:{
         items:2,
     },
        1020:{
            items:3
        }
    }
})
$('.brands-carousel').owlCarousel({
    loop:true,
    responsiveClass:true,
    dots:false,
    nav:false,
    responsive:{
        0:{
            items:2,
        },
        550:{
            items:3,
        },
        760:{
            items:4,
        },
        1020:{
            items:6
        }
    }
})

$(function(){
   $(".img1").on("click", ()=>{
       $('.hero-img1').attr("src", "img/hero/slider-main-demo-1.jpg");
   });
   $(".img2").on("click", ()=>{
       $('.hero-img1').attr("src", "img/hero/slider-main-demo-1-2.jpg");
   });
   $(".img3").on("click", ()=>{
       $('.hero-img1').attr("src", "img/hero/slider-main-demo-1-3.jpg");
   });
   $(".img4").on("click", ()=>{
       $('.hero-img1').attr("src", "img/hero/slider-main-demo-1-4.jpg");
   });
   $(".red").on("click",()=>{
       $(".chair").attr("src", "img/hero/slider-main-demo-2-1.jpg")
       });
   $(".blue").on("click",()=>{
       $(".chair").attr("src", "img/hero/slider-main-demo-2.jpg")
       });
   $(".orange").on("click",()=>{
       $(".chair").attr("src", "img/hero/slider-main-demo-2-2.jpg")
       });
})

$(".nav-menu-icon").on("click",()=>{
    $(".header-mobile-menu").addClass("active");
})
$(".header-mobile-menu").on("click",()=>{
    $(".header-mobile-menu").removeClass("active");
})
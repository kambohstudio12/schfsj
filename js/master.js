// partners owl-carsoul start 
$('.hero-section').owlCarousel({
    loop:true,
    responsiveClass:true,
    margin:20,
    nav:true,
    navText : ['<i class="fa fa-angle-left " aria-hidden="true"></i>','<i class="fa fa-angle-right " aria-hidden="true"></i>'],
    dots:false,
    responsive:{
        0:{
            items:1
            
        },
        600:{
            items:1
        },
        1000:{
            items:1,
            loop:true
        }
    }
})
// partners owl-carsoul end 
// testemonials owl-carsoul start 
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:40,
    responsiveClass:true,
    autoplay:true,
    responsive:{
        0:{
            items:1
            
        },
        600:{
            items:1
        },
        1000:{
            items:3,
            loop:true
        }
    }
})
// testemonials owl-carsoul end 
// portfolio filter jquery start 

$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
  //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
  //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
  $(this).removeClass("active");
  }
  $(this).addClass("active");
  
  });
   
    
  // portfolio filter jquery end 
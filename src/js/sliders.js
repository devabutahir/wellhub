import Swiper from 'swiper';
import { Autoplay, EffectFade, FreeMode, Navigation, Pagination, Thumbs } from 'swiper/modules';


if (document.querySelector('.brandslider')) {
  new Swiper('.brandslider', {
    slidesPerView: 'auto',
    spaceBetween: 24,
    loop: true,
    autoplay: {
      delay: 1,
      pauseOnMouseEnter: true,
      reverseDirection: true
    },
    speed: 6000,
    modules: [Autoplay],
    allowTouchMove: false,
    breakpoints: {
      1024: {
        spaceBetween: 48
      },
      1200: {
        spaceBetween: 60
      },
    }
  })
}

if (document.querySelector('.banner-wrapper-one')) {
    new Swiper('.banner-wrapper-one', {
    slidesPerView: 'auto',
    spaceBetween: 24,
    loop: true,
    effect:"fade",
    modules: [Navigation, Autoplay,EffectFade],
    autoplay: {
      delay: .5,
      pauseOnMouseEnter: true,
      reverseDirection: false
    },
    speed: 4000,
    allowTouchMove: true,
    breakpoints: {
      1024: {
        spaceBetween: 0
      },
      1200: {
        spaceBetween: 0
      },
    }
  })
}

if (document.querySelector('.client-slider1')) {
    new Swiper('.client-slider1', {
    slidesPerView: 'auto',
    spaceBetween: 24,
    loop: true,
    modules: [Navigation],
    speed: 2000,
    allowTouchMove: true,
    navigation: {
      nextEl: ".client-next",
      prevEl: ".client-prev",
    },
    breakpoints: {
      1024: {
        spaceBetween: 0
      },
      1200: {
        spaceBetween: 0
      },
    }
  })
}

  if (document.querySelector('.processSlider')) {
    new Swiper('.processSlider', {
      slidesPerView:1,
      spaceBetween: 24,
      loop: true,
      effect:"fade",
      modules: [Navigation, Autoplay,EffectFade],
      autoplay: {
        delay: 1000,
        pauseOnMouseEnter: true,
        reverseDirection: true
      },
      speed: 1000,
      navigation: {
        nextEl: ".next-process",
        prevEl: ".prev-process",
      },
    })
  }
  
  if (document.querySelector('.testimonial3Slider')) {
    new Swiper('.testimonial3Slider', {
      slidesPerView:1,
      spaceBetween: 24,
      loop: true,   
      modules: [Navigation, Autoplay],
      autoplay: {
        delay: 1500,      
      },
      speed: 500,
      navigation: {
        nextEl: ".next-review",
        prevEl: ".prev-review",
      },
    })
  }


// project slider
if (document.querySelector('.projectSlider')) {
    new Swiper('.projectSlider', {
      slidesPerView: 'auto',
      spaceBetween: 0,
      centeredSlides: true,
      modules:[Autoplay],
      loop: true,
      autoplay:true,    
      speed: 1500
    })
  }
  
  if (document.querySelector('.client1Slider')) {
    new Swiper('.client1Slider', {
      slidesPerView: 'auto',
      spaceBetween: 24,
      loop: true,
      speed: 1000,
      modules:[Autoplay,Navigation],
      autoplay:true,
      slidesPerView: 1,
      centeredSlides: true,
      navigation: {
        nextEl: ".client-next",
        prevEl: ".client-prev",
      },
      breakpoints: {
        768: {
          slidesPerView: 1.6,
        },
        1024: {
          slidesPerView: 2.4,
        },
  
      }
    })
  }
  
  if (document.querySelector('.clientSlider2')) {
    new Swiper('.clientSlider2', {
      slidesPerView: 'auto',
      spaceBetween: 24,
      loop: true,
      speed: 1000,
      modules:[Autoplay,Navigation],
      autoplay:true,
      slidesPerView: 1,
      centeredSlides: true,
      navigation: {
        nextEl: ".client-next",
        prevEl: ".client-prev",
      },
      breakpoints: {
        768: {
          slidesPerView: 1.6,
        },
        992: {
          slidesPerView: 2.4,
        },
        1200: {
          slidesPerView: 3,
        },
  
      }
    })
  }
  
  if (document.querySelector('.serviceSlider4')) {
    new Swiper('.serviceSlider4', {
      slidesPerView: 1,
      spaceBetween: 24,
      loop: true,
      modules:[Autoplay,Navigation],
      autoplay:true,
      navigation: {
        nextEl: ".service-next",
        prevEl: ".service-prev",
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },    
        1200: {
          slidesPerView: 3,
        },
  
      }
    })
  }
  if (document.querySelector('.clientSlider6')) {
    new Swiper('.clientSlider6', {
      slidesPerView: 1,
      spaceBetween: 24,
      loop: true,
      modules:[Autoplay,Pagination],
      autoplay:true,
      pagination: {
        el:'.client4-pagination',
        clickable:true
      },  
    })
  }
  
  if (document.querySelector('.farmerSlider4')) {
    new Swiper('.farmerSlider4', {
      slidesPerView: 1,
      spaceBetween: 24,
      loop: true,
      modules:[Autoplay,Navigation],
      autoplay:true,
      navigation: {
        nextEl: ".farmer-next",
        prevEl: ".farmer-prev",
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },    
        992: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
      }
    })
  }
  
  if (document.querySelector('.clientSlider4')) {
    new Swiper('.clientSlider4', {
      slidesPerView: 1,
      spaceBetween: 24,
      loop: true,
      modules:[Pagination,Autoplay],
      autoplay:true,
      pagination: {
        el:'.client4-pagination',
        clickable:true
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },    
        1200: {
          slidesPerView: 3,
        },     
      }
    })
  }
  if (document.querySelector('.ourFarmerSlider')) {
    new Swiper('.ourFarmerSlider', {
      slidesPerView: 1,
      spaceBetween: 24,
      loop: true,
      modules:[Pagination,Autoplay],
      autoplay:true,
      pagination: {
        el:'.farmer-pagination',
        clickable:true
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },    
        992: {
          slidesPerView: 3,
        },     
      }
    })
  }
  
  // blog slider
  if (document.querySelector('.blogSlider')) {
    new Swiper('.blogSlider', {
      slidesPerView: 'auto',
      modules: [Navigation,Autoplay],
      autoplay:true,
      spaceBetween: 24,
      loop: true,
      navigation: {
        nextEl: ".blog-next",
        prevEl: ".blog-prev",
      },
    })
  }
  
  // blog slider
  if (document.querySelector('.instagramImgSlider')) {
    new Swiper('.instagramImgSlider', {
      slidesPerView: 'auto',
      spaceBetween: 0,
      loop: true, 
      autoplay:false,
      modules:[Autoplay],
      speed:2000,
      centeredSlides:true
    })
  }
  
  if(document.querySelector('.thumbSlider')){
    // game details slider
    var swiper = new Swiper(".thumbSlider", {
        spaceBetween: 16,
        slidesPerView: 3,
        freeMode: true,
        modules:[Autoplay,Thumbs,FreeMode],
        autoplay:true,
        loop: true,
        watchSlidesProgress: true,
      });
      var swiper2 = new Swiper(".productSlider", {
        spaceBetween: 10,
        loop: true,
        autoplay:true,   
        modules:[Autoplay,Thumbs],
        thumbs: {
          swiper: swiper,
        },
      });
  }
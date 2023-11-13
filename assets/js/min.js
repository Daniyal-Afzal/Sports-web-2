$(document).ready(function(){
    $('#navigation a, #sticky a').on('click', function(e) {
      e.preventDefault();
    });
    $(window).on('scroll',function() {
      var scrolltop = $(this).scrollTop();
      if(scrolltop >= 215) {
        $('#sticky').fadeIn(250);
      }
      else if(scrolltop <= 210) {
        $('#sticky').fadeOut(250);
      }
    });
  });
  $("img").mousedown(function(e){
       e.preventDefault()
  });
  $("img").on("contextmenu",function(e){
       return false;
  });
  function myFunction(smallImg)
  {
    var fullImg = document.getElementById("imageBox");
    fullImg.src = smallImg.src;
  }
  //<img id="imageBox" src="img-1.jpg"> large img code
  //onclick="myFunction(this)"; small img code
  /*------------ Auto IMage Change -------------*/
  $(document).ready(function(){
    $(".mobile-menu-toggle2").click(function() {
      $( ".tus_mbnav" ).slideToggle();
    });
  });
  $(document).ready(function(){
    $(".mobile-menu-toggle2").click(function() {
      $( "#slideMe2" ).slideToggle();
    });
  });
  $(document).ready(function(){
    $(".mobile-menu-toggle3").click(function() {
      $( "#slideMe3" ).slideToggle();
    });
  });
  function openNav(id)
  {
   $( "#slide"+id ).slideToggle();
  }
  /*------------ Popup Search Bar -------------*/
  $(document).ready(function(){
    $("#toggleContent").click(function() {
      $( ".tus_srboxss" ).fadeToggle();
    });
  });
  $(document).ready(function(){
    $(".tus_close2").click(function() {
      $( ".tus_popsearch" ).fadeToggle("slow");
    });
  });
  $(document).ready(function(){
    $("#toggleContent4").click(function() {
      $( ".tus_popsearch" ).fadeToggle();
    });
  });
  $(document).ready(function(){
    $(".tus_close4").click(function() {
      $( ".tus_popsearch" ).fadeToggle("slow");
    });
  });
  $(document).ready(function(){
    $(".tus_close3").click(function() {
      $( ".tus_mbnav" ).fadeToggle("slow");
    });
  });
  $(document).ready(function(){
    $("#toggleContent3").click(function() {
      $( ".tus_popsearch" ).fadeToggle();
    });
  });
  $(document).ready(function(){
    $(".tus_close4").click(function() {
      $( ".tus_popsearch" ).fadeToggle("slow");
    });
  });
  $(document).ready(function(){
    $("#toggleContentt").click(function() {
      $( ".tus_click" ).fadeToggle();
    });
  });
  $(document).ready(function(){
    $(".tus_close5").click(function() {
      $( ".tus_click" ).fadeToggle("slow");
    });
  });
  $(document).ready(function(){
    $("#toggleContentts").click(function() {
      $( ".tus_sharboxs" ).fadeToggle();
    });
  });
  $(document).ready(function(){
    $(".tus_close6").click(function() {
      $( ".tus_sharboxs" ).fadeToggle("slow");
    });
  });
/*------------ PerGroup Slider -------------------*/
var swiper = new Swiper(".exhibition.swiper-container", {
    slidesPerView: 4,
    spaceBetween: 15,
    slidesPerGroup: 3,
    loop: false,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        360: {
            slidesPerView: 2,
        },
        480: {
            slidesPerView: 2,
        },
        667: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 4,
        },
    },
  });
/*------------ PerGroup Slider -------------------*/
var swiper = new Swiper(".production.swiper-container", {
    slidesPerView: 4,
    spaceBetween: 15,
    slidesPerGroup: 3,
    loop: false,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        360: {
            slidesPerView: 2,
        },
        480: {
            slidesPerView: 2,
        },
        667: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 4,
        },
    },
  });
/*------------ PerGroup Slider -------------------*/
var swiper = new Swiper(".catgroup.swiper-container", {
    slidesPerView: 3,
    spaceBetween: 15,
    slidesPerGroup: 3,
    loop: false,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        360: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 1,
        },
        667: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 3,
        },
    },
  });
/*------------ Product View -------------------*/
var categorySlider = new Swiper('.categories.swiper-container', {
    loop: false,
    navigation: {
      nextEl: ".tus_nxtct",
      prevEl: ".tus_prtct",
    },
    slidesPerView: 3,
    spaceBetween: 50,
    speed: 1500,
    autoplay: {
    delay: 4000,
    disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        360: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
        },
        667: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 3,
        },
    },
});
/*-------------- Soccer Uniform ------------------*/
var categorySlider = new Swiper('.soccer.swiper-container', {
    loop: false,
     pagination: {
    el: '.swiper-pagination',
    clickable: true,
     },
    slidesPerView: 4,
    spaceBetween: 15,
    speed: 1500,
    autoplay: {
    delay: 4000,
    disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        360: {
            slidesPerView: 2,
        },
        480: {
            slidesPerView: 2,
        },
        667: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 4,
        },
    },
});
/*------------ Our Services -------------------*/
var categorySlider = new Swiper('.services.swiper-container', {
    loop: false,
     pagination: {
    el: '.swiper-pagination',
    clickable: true,
     },
    slidesPerView: 5,
    spaceBetween: 15,
    speed: 1500,
    autoplay: {
    delay: 4000,
    disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        360: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
        },
        667: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 5,
        },
    },
});
/*------------ Product View ----------------*/
var swiper = new Swiper('.cate.swiper-container', {
  effect: 'coverflow',
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 1,
  spaceBetween: 150,
  speed: 1500,
    autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    },
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 220,
    modifier: 2,
    slideShadows: false,
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  breakpoints: {
        0: {
            slidesPerView: 1,
        },
        360: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        480: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        667: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 2,
        },
    },
});
/*--------------------------------*/
var categorySlider = new Swiper('.products.swiper-container', {
    loop: false,
     navigation: {
     nextEl: '.tus_downaro',
     prevEl: '.tus_uparo',
     },
    slidesPerView: 4,
    //slidesPerColumn: 2,
    spaceBetween: 15,
    speed: 1500,
    autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        360: {
            slidesPerView: 2,
        },
        480: {
            slidesPerView: 2,
        },
        667: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 4,
        },
    },
});
var categorySlider = new Swiper('.fproducts.swiper-container', {
    loop: false,
     navigation: {
     nextEl: '.tus_downaro',
     prevEl: '.tus_uparo',
     },
    slidesPerView: 4,
    //slidesPerColumn: 2,
    spaceBetween: 15,
    speed: 1500,
    autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        360: {
            slidesPerView: 2,
        },
        480: {
            slidesPerView: 2,
        },
        667: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 4,
        },
    },
});





  


  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 15,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    slidesPerView: 4,
    //slidesPerColumn: 2,
    spaceBetween: 15,
    speed: 2000,
    autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        360: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
        },
        667: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 4,
        },
    },
  });



// image magnify

  function magnify(imgID, zoom) {
    var img, glass, w, h, bw;
    img = document.getElementById(imgID);
  
    /* Create magnifier glass: */
    glass = document.createElement("DIV");
    glass.setAttribute("class", "img-magnifier-glass");
  
    /* Insert magnifier glass: */
    img.parentElement.insertBefore(glass, img);
  
    /* Set background properties for the magnifier glass: */
    glass.style.backgroundImage = "url('" + img.src + "')";
    glass.style.backgroundRepeat = "no-repeat";
    glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
    bw = 3;
    w = glass.offsetWidth / 2;
    h = glass.offsetHeight / 2;
  
    /* Execute a function when someone moves the magnifier glass over the image: */
    glass.addEventListener("mousemove", moveMagnifier);
    img.addEventListener("mousemove", moveMagnifier);
  
    /*and also for touch screens:*/
    glass.addEventListener("touchmove", moveMagnifier);
    img.addEventListener("touchmove", moveMagnifier);
    function moveMagnifier(e) {
      var pos, x, y;
      /* Prevent any other actions that may occur when moving over the image */
      e.preventDefault();
      /* Get the cursor's x and y positions: */
      pos = getCursorPos(e);
      x = pos.x;
      y = pos.y;
      /* Prevent the magnifier glass from being positioned outside the image: */
      if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
      if (x < w / zoom) {x = w / zoom;}
      if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
      if (y < h / zoom) {y = h / zoom;}
      /* Set the position of the magnifier glass: */
      glass.style.left = (x - w) + "px";
      glass.style.top = (y - h) + "px";
      /* Display what the magnifier glass "sees": */
      glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
    }
  
    function getCursorPos(e) {
      var a, x = 0, y = 0;
      e = e || window.event;
      /* Get the x and y positions of the image: */
      a = img.getBoundingClientRect();
      /* Calculate the cursor's x and y coordinates, relative to the image: */
      x = e.pageX - a.left;
      y = e.pageY - a.top;
      /* Consider any page scrolling: */
      x = x - window.pageXOffset;
      y = y - window.pageYOffset;
      return {x : x, y : y};
    }
  }

//   image magnify



window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-76px";
    document.getElementById("navbar").style.transitionDuration="2s";
  }
}
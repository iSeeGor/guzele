"use strict";

$(function () {
  // *************************
  // ** COMPONENTS
  // *************************
  iframeTextEditor();
  scrollToTop();
  dropdown();
  filterTabsToggle();
  textOverflow();
  wishlistToggle();
  perfectScrollbar();
  initModals();
  iframeModal();
  formValidation();
  priceMask();
  idMask();
  anchorScroll();
  mobileDeviceDetect(); // Buttons & Toggles    
  ////////////////////////////

  laguageToggle(); // Inputs, Secels  
  ////////////////////////////

  mainFilterSelectInit();
  productCurrencyDropdown(); // Mobile 
  ////////////////////////////

  mobileMenu(); // Pages
  ////////////////////////////
  // Home

  productCarousel();

  if (window.innerWidth > 1200) {
    heroAnimation();
  }

  testimonialCarousel();
  newsCarousele(); // Property

  propertyMetaBtn();
  galleryInit();
  similarProductCarousele();
  managersCarousele(); // About Us

  googleMap(); // Posts

  relatedPostCarousel(); // Question

  questionCarouseleReadmore();
  questionTabChange();
  questionTabCarousele();
  questionReadmoreAnchor();
  showHideCarouseleControl();
}); // Buttons & Toggles    
////////////////////////////

var laguageToggle = function laguageToggle() {
  var language = document.querySelectorAll('.js-language');
  language.forEach(function (language) {
    var langButtons = language.querySelectorAll('button');
    langButtons.forEach(function (button) {
      button.onclick = function () {
        var selected = language.querySelector('button.selected');
        selected.classList.remove('selected');
        this.classList.add('selected');
      };
    });
  });
}; // Inputs, Secels  
////////////////////////////


var mainFilterSelectInit = function mainFilterSelectInit() {
  $(".js-filter-select").select2({
    minimumResultsForSearch: Infinity
  });
}; //////////////////////////////////////
// COMPONENTS FILE
//////////////////////////////////////
// Mobile Device Detect
/////////////////////////////////////


var mobileDeviceDetect = function mobileDeviceDetect() {
  window.mobileAndTabletcheck = function () {
    var check = false;

    (function (a) {
      if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);

    return check;
  };
}; // iFrame TextEditor Auto Height
/////////////////////////////////////


var iframeTextEditor = function iframeTextEditor() {
  $('.typography iframe').parent().addClass('responsive-iframe');
}; // ScrollTop Button
/////////////////////////////////////


var scrollToTop = function scrollToTop() {
  var toTopBtn = $('.scrolltop');
  $(window).scroll(function () {
    if ($(window).scrollTop() > 600) {
      toTopBtn.addClass('scrolltop_visible');
    } else {
      toTopBtn.removeClass('scrolltop_visible');
    }
  });
  $(document).on('click', '.scrolltop', function () {
    $('html, body').animate({
      scrollTop: 0
    }, 1000);
  });
}; // Anchore Scroll
/////////////////////////////////////


var anchorScroll = function anchorScroll() {
  $('a[href*="#a_"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 90
        }, 800);
        return false;
      }
    }
  });
}; // Price Mask
/////////////////////////////////////


var priceMask = function priceMask() {
  var priceTo = document.querySelector('#filter-form__price-to');
  var priceFrom = document.querySelector('#filter-form__price-from');

  if (priceTo && priceFrom) {
    var inputs = [priceTo, priceFrom];
    inputs.forEach(function (item) {
      var maskOptions = {
        mask: Number,
        thousandsSeparator: ' '
      };
      var mask = IMask(item, maskOptions);
    });
  }
}; // ID Field Mask
/////////////////////////////////////


var idMask = function idMask() {
  var idInput = document.querySelector('.js-input-id');

  if (idInput) {
    var mask = IMask(idInput, {
      mask: Number
    });
  }
}; // Form Validation
/////////////////////////////////////


var formValidation = function formValidation() {
  var forms = document.querySelectorAll('.js-validate');

  $.validator.methods.email = function (value, element) {
    return this.optional(element) || /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value);
  };

  forms.forEach(function (form) {
    $(form).validate({
      errorElement: "em",
      errorPlacement: function errorPlacement(error, element) {
        element.parent().parent().append(error);
      }
    });
  });
}; // Modals Init
/////////////////////////////////////


var initModals = function initModals() {
  $('.js-modal').magnificPopup({
    type: 'inline',
    preloader: false,
    modal: false,
    removalDelay: 300,
    callbacks: {
      open: function open() {
        // $('.mfp-wrap').addClass('mfp-slideInDown');
        gsap.fromTo('.modal', {
          y: '-100px',
          opacity: 0
        }, {
          y: 0,
          opacity: 1,
          duration: 1.5,
          delay: 0,
          ease: "power4.out"
        });
      },
      beforeClose: function beforeClose() {
        gsap.to('.modal', {
          y: '-100px',
          opacity: 0,
          duration: 1.5,
          delay: 0,
          ease: "power4.out"
        });
      }
    }
  });
}; // Iframe Modal
/////////////////////////////////////


var iframeModal = function iframeModal() {
  $('.tour__right-content').lightGallery({
    selector: '.js-iframe-modal',
    share: false,
    actualSize: false,
    autoplayControls: false,
    download: false,
    fullScreen: false,
    counter: false,
    zoom: false,
    thumbWidth: 130,
    thumbContHeight: 110,
    loadYoutubeThumbnail: true,
    youtubeThumbSize: 'default',
    videoMaxWidth: '1000px'
  });
}; // const iframeModal = () => {
//     $('.js-iframe-modal').magnificPopup({
//         type: 'iframe',
//         closeBtnInside: false,
//         closeMarkup: '<button class="iframe-close mfp-close" aria-label="Close"><svg class="icon-close"><use xlink:href="assets/img/symbol/sprite.svg#icon-close"></use></svg></button>',
//         removalDelay: 300,
//         iframe: {
//             patterns: {
//                 youtube: {
//                     index: 'youtube.com/',
//                     id: function(url) {
//                         var m = url.match(/[\\?\\&]v=([^\\?\\&]+)/);
//                         if (!m || !m[1]) return null;
//                         return m[1];
//                     },
//                     src: '//www.youtube.com/embed/%id%?autoplay=1'
//                 },
//                 vimeo: {
//                     index: 'vimeo.com/',
//                     id: function(url) {
//                         var m = url.match(
//                             /(https?:\/\/)?(www.)?(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/
//                         );
//                         if (!m || !m[5]) return null;
//                         return m[5];
//                     },
//                     src: '//player.vimeo.com/video/%id%?autoplay=1'
//                 }
//             }
//         },
//         callbacks: {
//             open: function() {
//               gsap.fromTo('.mfp-iframe-scaler', {
//                     opacity: 0,
//                 },
//                 { 
//                     opacity: 1,
//                     duration: 2,
//                     delay: 0,
//                     ease: "power4.out", 
//                 });
//             },
//             beforeClose: function() {
//                 gsap.fromTo('.mfp-iframe-scaler', {
//                     opacity: 1,
//                 },
//                 { 
//                     opacity: 0,
//                     duration: 2,
//                     delay: 0,
//                     ease: "power4.out", 
//                 });
//             },
//         }    
//     });
// };
// Custom ScrollBar
/////////////////////////////////////


var perfectScrollbar = function perfectScrollbar() {
  var container = document.querySelectorAll('.js-scrollbar');
  if (container) initScroll();

  function initScroll() {
    for (var i = 0; i < container.length; i++) {
      new PerfectScrollbar(container[i], {
        wheelSpeed: 0.5,
        wheelPropagation: true,
        minScrollbarLength: 20
      });
    }
  }
}; // Dropdown
/////////////////////////////////////


var dropdown = function dropdown() {
  var dropdowns = document.querySelectorAll('.js-dropdown');
  dropdowns.forEach(function (dropdown) {
    var button = dropdown.querySelector('.dropdown__btn');
    var headItem = dropdown.querySelector('.dropdown__head-item');
    var bropdownItems = dropdown.querySelectorAll('.dropdown__list-item');
    headItem.onclick = dropdownClose;
    button.onclick = dropdownToggle;
    bropdownItems.forEach(setCurrentPhone);
  });

  function dropdownClose() {
    var dropdown = this.closest('.dropdown');
    var opened = dropdown.classList.contains('opened');
    if (opened) dropdown.classList.remove('opened');
  }

  function dropdownToggle() {
    var dropdown = this.closest('.dropdown');
    dropdown.classList.toggle('opened');
  }

  ;

  function setCurrentPhone(item) {
    item.onclick = function () {
      var dropdown = this.closest('.dropdown');
      var current = dropdown.querySelector('.dropdown__list-item.current');
      var headItem = dropdown.querySelector('.dropdown__head-item');
      headItem.innerHTML = this.innerHTML;
      current.classList.remove('current');
      this.classList.add('current');
      dropdown.classList.remove('opened');
    };
  }

  ;
}; // Filter Tabs Toggle
/////////////////////////////////////


var filterTabsToggle = function filterTabsToggle() {
  $('.filter__categorie-item').on('click', function () {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
    }
    else {
      $(this).addClass('active').siblings().removeClass('active');
    }
  });
}; // Text Overflow
/////////////////////////////////////


var textOverflow = function textOverflow() {
  var textBlock = document.querySelectorAll('.js-text-overflow');
  var cutedText = '';
  var newText = '';
  textBlock.forEach(function ($this) {
    var textLimit = $this.getAttribute('data-text-overflow');
    var fullText = $this.innerText;

    if (fullText.length > +textLimit) {
      cutedText = fullText.substring(0, textLimit);
      newText = "".concat(cutedText, " ...");
      $this.innerText = newText;
    }
  });
}; // Product Currency Dropdown
/////////////////////////////////////


var productCurrencyDropdown = function productCurrencyDropdown() {
  $('.js-prod-curr').select2({
    minimumResultsForSearch: Infinity,
    dropdownCssClass: 'product-card__dropdown'
  });
}; // WishList Toggle Button
/////////////////////////////////////


var wishlistToggle = function wishlistToggle() {
  $(document).on('click', '.js-wishlist-btn', function () {
    $(this).toggleClass('active');
  });
};

var mobileMenu = function mobileMenu() {
  var openTrigger = $('.menu-trigger');
  var openTriggerTop = openTrigger.find('.menu-trigger-bar.top');
  var openTriggerMiddle = openTrigger.find('.menu-trigger-bar.middle');
  var openTriggerBottom = openTrigger.find('.menu-trigger-bar.bottom');
  var mobileMenu = $('.mobile-menu');
  var closeTrigger = $('.close-trigger');
  var closeTriggerLeft = closeTrigger.find('.close-trigger-bar.left');
  var closeTriggerRight = closeTrigger.find('.close-trigger-bar.right');
  var menuContainer = $('.menu-container');
  var menu = $('.mobile-menu__container');
  var menuMiddle = $('.menu-bg.middle');
  var tlOpen = gsap.timeline({
    paused: true
  });
  var tlClose = gsap.timeline({
    paused: true
  }); //OPEN TIMELINE

  tlOpen.add("preOpen").to(mobileMenu, {
    display: 'block'
  }).to(openTriggerTop, {
    x: "+=80px",
    y: "-=80px",
    duration: 0.4,
    delay: 0.1,
    ease: Power4.easeIn,
    onComplete: function onComplete() {
      closeTrigger.css('z-index', '25');
    }
  }, "preOpen").to(openTriggerMiddle, {
    x: "+=80px",
    y: "-=80px",
    duration: 0.4,
    ease: Power4.easeIn,
    onComplete: function onComplete() {
      openTrigger.css('visibility', 'hidden');
    }
  }, "preOpen").to(openTriggerBottom, {
    x: "+=80px",
    y: "-=80px",
    delay: 0.2,
    duration: 0.4,
    ease: Power4.easeIn
  }, "preOpen").add("open", "-=0.4").to(menuMiddle, {
    scaleY: 6,
    scaleX: 2,
    duration: 0.8,
    ease: Power4.easeInOut
  }, "open").fromTo(menu, {
    y: 30,
    opacity: 0,
    duration: 0.4,
    visibility: 'hidden'
  }, {
    y: 0,
    opacity: 1,
    visibility: 'visible',
    ease: Power4.easeOut
  }, "-=0.2").add("preClose", "-=0.8").to(closeTriggerLeft, {
    x: "-=100px",
    y: "+=100px",
    duration: 0.8,
    ease: Power4.easeOut
  }, "preClose").to(closeTriggerRight, {
    x: "+=100px",
    y: "+=100px",
    delay: 0.2,
    duration: 0.4,
    ease: Power4.easeOut
  }, "preClose"); //CLOSE TIMELINE

  tlClose.add("close").to(menuMiddle, {
    backgroundColor: "#0055b5",
    duration: 0.2,
    ease: Power4.easeInOut,
    onComplete: function onComplete() {
      closeTrigger.css('z-index', '5');
      openTrigger.css('visibility', 'visible'); // 
    }
  }, "close").to(menu, {
    y: 20,
    opacity: 0,
    ease: Power4.easeOut,
    duration: 0.4,
    onComplete: function onComplete() {
      menu.css('visibility', 'hidden');
    }
  }, "close").to(menuMiddle, {
    scaleY: 0,
    duration: 0.8,
    ease: Power4.easeInOut,
    onComplete: function onComplete() {
      menuMiddle.css('background-color', '#004592');
      mobileMenu.css({
        'display': 'none'
      });
    }
  }, "close", "+=0.2").to(closeTriggerLeft, {
    x: "+=100px",
    y: "-=100px",
    duration: 0.2,
    ease: Power4.easeIn
  }, "close").to(closeTriggerRight, {
    x: "-=100px",
    y: "-=100px",
    delay: 0.1,
    duration: 0.2,
    ease: Power4.easeIn
  }, "close").to(openTriggerTop, {
    x: "-=80px",
    y: "+=80px",
    delay: 0.2,
    duration: 1,
    ease: Power4.easeOut
  }, "close").to(openTriggerMiddle, {
    x: "-=80px",
    y: "+=80px",
    duration: 1,
    ease: Power4.easeOut
  }, "close").to(openTriggerBottom, {
    x: "-=80px",
    y: "+=80px",
    delay: 0.1,
    duration: 1,
    ease: Power4.easeOut
  }, "close"); //EVENTS

  openTrigger.on('click', function () {
    if (tlOpen.progress() < 1) {
      tlOpen.play();
    } else {
      tlOpen.restart();
    }
  });
  closeTrigger.on('click', function () {
    if (tlClose.progress() < 1) {
      tlClose.play();
    } else {
      tlClose.restart();
    }
  });
}; // Hero Animation 
////////////////////////////


var heroAnimation = function heroAnimation() {
  // Sliding Blue Overlay
  gsap.to(".section-hero__overlay", {
    left: '-50%',
    width: '100%',
    duration: 2.5,
    delay: 1,
    ease: "power4.out"
  }); // Main Slide 

  gsap.to(".section-hero__background-image", {
    scale: 1,
    duration: 6,
    delay: 0.5,
    ease: "power2.out"
  }); // Lines Sets

  gsap.to('.hero__deco-line.right', {
    x: 0,
    duration: 1.8,
    delay: 2.0,
    ease: "power4.out"
  });
  gsap.to('.hero__deco-line.left', {
    x: 0,
    duration: 1.8,
    delay: 2.0,
    ease: "power4.out"
  });
  gsap.to('.hero__deco-line.right', {
    opacity: 1,
    duration: 1.5,
    delay: 1.8,
    ease: "power4.out"
  });
  gsap.to('.hero__deco-line.left', {
    opacity: 1,
    duration: 1.5,
    delay: 1.8,
    ease: "power4.out"
  }); // Title

  gsap.to(".hero__title", {
    y: '0',
    opacity: 1,
    duration: 3.5,
    delay: 2.8,
    ease: "power4.out"
  });
  gsap.to(".hero__bottom-text", {
    y: 0,
    duration: 2,
    delay: 1.0,
    ease: "power2.out"
  });
  gsap.to(".hero__footer-background", {
    y: 0,
    duration: 2,
    delay: 1.0,
    ease: "power2.out"
  });
  gsap.to(".section-hero__guzel", {
    x: 0,
    opacity: 0.08,
    duration: 2,
    delay: 3.5,
    ease: "power3.out"
  });
  gsap.to(".hero__second-image", {
    width: 630,
    duration: 1.2,
    delay: 2.0,
    ease: "power1.out"
  });
}; // Product Carousele & Tabs  
////////////////////////////


var productCarousel = function productCarousel() {
  slidersTab();
  slidersInit();

  function slidersInit() {
    var slideNewArrivals;
    var slideHotArrivals;
    var slidePromo;
    var sliderOptions = {};
    sliderOptions = {
      // loop: true,
      slidesPerView: 3,
      spaceBetween: 0,
      speed: 600,
      threshold: 20,
      navigation: {
        nextEl: '.product-carousel__btn_next',
        prevEl: '.product-carousel__btn_prev'
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 30
        },
        767: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        991: {
          slidesPerView: 1,
          spaceBetween: 60
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 0,
          direction: 'vertical'
        }
      }
    };
    slideNewArrivals = new Swiper('.slider__new-arrivals .swiper-container', sliderOptions);
    slideHotArrivals = new Swiper('.slider__hot-arrivals .swiper-container', sliderOptions);
    slidePromo = new Swiper('.slider__promo .swiper-container', sliderOptions);
  }

  function slidersTab() {
    $('.product-carousel__tab').on('click', function () {
      var activeTabindex = $(this).index();
      $(this).addClass('active').siblings().removeClass('active');
      $('.product-carousel__slider').removeClass('active');
      $('.product-carousel__slider').eq(activeTabindex).addClass('active');

      let id = $(this).attr('data-id');      
      $('.product-carousel .btn_primary').addClass('property_button_hide');
      $(`.product-carousel .btn_primary[data-id="${id}"]`).removeClass('property_button_hide');

      textOverflow();
    });
  }
}; // Testimonial Slider 
////////////////////////////


var testimonialCarousel = function testimonialCarousel() {
  var slider = new Swiper('.testimonials-carousel .swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    speed: 600,
    threshold: 20,
    navigation: {
      nextEl: '.swiper-nav .swiper-button-next',
      prevEl: '.swiper-nav .swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });
  slider.on('slideChange', function () {
    var countBlock = document.querySelector('.swiper-counter');
    countBlock.innerHTML = slider.activeIndex + 1;
    $('.swiper-slide-active').find('iframe').each(function (index) {
      $(this).attr('src', $(this).attr('src'));
      return false;
    });
  });
}; // News Carousel 
////////////////////////////


var newsCarousele = function newsCarousele() {
  var $owl = $('.js-news-carousele');
  var owlSettings = {
    responsive: {
      0: {
        items: 1,
        margin: 30
      },
      767: {
        items: 2,
        margin: 30
      }
    }
  };

  function initialize() {
    if (window.innerWidth <= 992) {
      $owl.addClass('owl-carousel').owlCarousel(owlSettings);
    } else {
      $owl.trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
      $owl.find('.owl-stage-outer').children().unwrap();
    }
  }

  var id;
  $(window).resize(function () {
    clearTimeout(id);
    id = setTimeout(initialize, 500);
  });
  $('.home__news .btn-prev').click(function () {
    $owl.trigger('prev.owl.carousel');
  });
  $('.home__news .btn-next').click(function () {
    $owl.trigger('next.owl.carousel');
  });
  initialize();
}; // Meta Btn Toggle
////////////////////////////


var propertyMetaBtn = function propertyMetaBtn() {
  var metaBtns = document.querySelectorAll('.js-meta-btn');
  metaBtns.forEach(function (button) {
    button.onclick = function () {
      this.classList.toggle('active');
    };
  });
}; // Gallery
////////////////////////////


var galleryInit = function galleryInit() {
  var sliderSelector = '.gallery__slider .swiper-container',
    thumbsSelector = '.gallery__thumbs .swiper-container';
  var slidesOptions = {
    spaceBetween: 40,
    loop: true,
    loopedSlides: 5,
    navigation: {
      nextEl: '.btn-next',
      prevEl: '.btn-prev'
    }
  };
  var thumbOptions = {
    spaceBetween: 16,
    // centeredSlides: true,
    slidesPerView: 1,
    touchRatio: 0.2,
    slideToClickedSlide: true,
    loop: true,
    loopedSlides: 5,
    centeredSlides: true,
    breakpoints: {
      320: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 5,
        spaceBetween: 16
      }
    }
  };
  var thumbSlider = new Swiper(thumbsSelector, thumbOptions);
  var imageSlider = new Swiper(sliderSelector, slidesOptions);

  if (document.querySelector('.gallery__slider')) {
    imageSlider.controller.control = thumbSlider;
    thumbSlider.controller.control = imageSlider;
  }

  $('.gallery__slider .swiper-wrapper').lightGallery({
    selector: '.swiper-slide:not(.swiper-slide-duplicate) a',
    share: false,
    actualSize: false,
    autoplayControls: false,
    download: false,
    fullScreen: false,
    zoom: false,
    thumbWidth: 130,
    thumbContHeight: 110
  });
}; // Similar Propertie Carousel
////////////////////////////


var similarProductCarousele = function similarProductCarousele() {
  var $owl = $('.js-similar-carousel');
  var owlSettings = {
    responsive: {
      0: {
        items: 1,
        margin: 30
      },
      767: {
        items: 2,
        margin: 20
      }
    }
  };

  function initialize() {
    if (window.innerWidth <= 992) {
      $owl.addClass('owl-carousel').owlCarousel(owlSettings);
    } else {
      $owl.trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
      $owl.find('.owl-stage-outer').children().unwrap();
    }
  }

  var id;
  $(window).resize(function () {
    clearTimeout(id);
    id = setTimeout(initialize, 500);
  });
  $('.similar-carousel .btn-prev').click(function () {
    $owl.trigger('prev.owl.carousel');
  });
  $('.similar-carousel .btn-next').click(function () {
    $owl.trigger('next.owl.carousel');
  });
  initialize();
}; // Managers Carousel
////////////////////////////


var managersCarousele = function managersCarousele() {
  var $owl = $('.js-managers-carousele');
  var owlSettings = {
    responsive: {
      0: {
        items: 1,
        margin: 30
      },
      767: {
        items: 2,
        margin: 40
      }
    }
  };

  function initialize() {
    if (window.innerWidth <= 992) {
      $owl.addClass('owl-carousel').owlCarousel(owlSettings);
    } else {
      $owl.trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
      $owl.find('.owl-stage-outer').children().unwrap();
    }
  }

  var id;
  $(window).resize(function () {
    clearTimeout(id);
    id = setTimeout(initialize, 500);
  });
  $('.property__managers .btn-prev').click(function () {
    $owl.trigger('prev.owl.carousel');
  });
  $('.property__managers .btn-next').click(function () {
    $owl.trigger('next.owl.carousel');
  });
  initialize();
}; // Google Map
/////////////////////////////////////


var googleMap = function googleMap() {
  function initMap() {
    var popupContent = '<p class="marker_content">Турция, Алания, Махмутлар. <br>Пр. Барбаросса,<br> CEBECI 8, офис 6.</p>',
      image = {
        url: 'assets/img/theme/icons/map-marker.svg' // size: new google.maps.Size(49, 65),
        // origin: new google.maps.Point(-3, 0),
        // anchor: new google.maps.Point(-40, 140)

      },
      coordinates = {
        lat: parseFloat($('.map-holder').attr('data-lat')),
        lng: parseFloat($('.map-holder').attr('data-lng'))
      },
      map = new google.maps.Map(document.querySelector('.map-holder'), {
        center: coordinates,
        zoom: 16,
        // disableDefaultUI: true,
        styles: [{
          featureType: 'poi',
          elementType: 'geometry.fill',
          stylers: [{
            color: '#C5E3BF'
          }]
        }, {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [{
            lightness: 100
          }, {
            visibility: 'simplified'
          }]
        }, {
          featureType: 'road',
          elementType: 'geometry.fill',
          stylers: [{
            color: '#D1D1B8'
          }]
        }, {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{
            visibility: 'on'
          }, {
            color: '#C6E2FF'
          }]
        }]
      }),
      marker = new google.maps.Marker({
        position: coordinates,
        map: map,
        icon: image,
        animation: google.maps.Animation.DROP
      }),
      infowindow = new google.maps.InfoWindow({
        content: popupContent
      });
    marker.addListener('click', function () {
      infowindow.open(map, marker);
    });
  }
  /*
   *  Убрать Проверку if !!!!
   */


  if (document.querySelector('.map-holder')) {
    initMap();
  }
}; // Similar Propertie Carousel
////////////////////////////


var relatedPostCarousel = function relatedPostCarousel() {
  var $owl = $('.js-relatedpost-carousel');
  var owlSettings = {
    responsive: {
      0: {
        items: 1,
        margin: 30
      },
      767: {
        items: 2,
        margin: 20
      }
    }
  };

  function initialize() {
    if (window.innerWidth <= 992) {
      $owl.addClass('owl-carousel').owlCarousel(owlSettings);
    } else {
      $owl.trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
      $owl.find('.owl-stage-outer').children().unwrap();
    }
  }

  var id;
  $(window).resize(function () {
    clearTimeout(id);
    id = setTimeout(initialize, 500);
  });
  $('.blog-posts .btn-prev').click(function () {
    $owl.trigger('prev.owl.carousel');
  });
  $('.blog-posts .btn-next').click(function () {
    $owl.trigger('next.owl.carousel');
  });
  initialize();
}; // Question Page JS
////////////////////////////


var questionCarouseleReadmore = function questionCarouseleReadmore() {
  $('.btn-readmore').on('click', function () {
    $('.q-carousele__item').removeClass('active');
    $(this).parent().addClass('active');
  });
};

var questionTabChange = function questionTabChange() {
  $('.btn-readmore').on('click', function () {
    var tabindex;
    tabindex = $(this).attr('data-key');

    $('.question__content-item')
        .removeClass('active');

    $('#'+tabindex).addClass('active')
  });
};

var questionTabCarousele = function questionTabCarousele() {
  var $owl = $('.q-carousele__group');
  $owl.addClass('owl-carousel').owlCarousel({
    items: 1
  });
  $('.q-carousele__controls .btn-prev').click(function () {
    $owl.trigger('prev.owl.carousel');
  });
  $('.q-carousele__controls .btn-next').click(function () {
    $owl.trigger('next.owl.carousel');
  });
};

var questionReadmoreAnchor = function questionReadmoreAnchor() {
  if (mobileAndTabletcheck()) {
    $('.btn-readmore').click(function () {
      $('html, body').animate({
        scrollTop: $("#a_content").offset().top - 60
      }, 600);
    });
  }
};

var showHideCarouseleControl = function showHideCarouseleControl() {
  var slidesBlock = document.querySelectorAll('.q-carousele__list');
  var controlBtn = document.querySelector('.q-carousele__controls');

  if (slidesBlock.length <= 1) {
    controlBtn.style.display = "none";
  }

  console.log(slidesBlock);
};
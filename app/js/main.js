$(".slider_banner, .content_third_slider, .slider4").slick({
  dots: true,
  infinity: true,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
});
//slider adaptive fifth block
function initSlickSlider() {
  $(".fifth_images_in").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      }
    ]
  });
}
function destroySlickSlider() {
  if ($(".fifth_images_in").hasClass("slick-initialized")) {
    $(".fifth_images_in").slick("unslick");
  }
}
$(document).ready(function() {
  if (window.innerWidth <= 1700) {
    initSlickSlider();
  }
});
$(window).resize(function() {
  if (window.innerWidth <= 1700) {
    initSlickSlider();
  } else {
    destroySlickSlider();
  }
});

//icon click
var heartIcons = document.getElementsByClassName('heartIcon');
var likesNumbers = document.getElementsByClassName('number');
for (var i = 0; i < heartIcons.length; i++) {
  heartIcons[i].addEventListener('click', function() {
    this.classList.toggle('fa-solid');
    var index = Array.prototype.indexOf.call(heartIcons, this);
    if (this.classList.contains('fa-solid')) {
      likesNumbers[index].innerText = parseInt(likesNumbers[index].innerText) + 1;
    } else {
      likesNumbers[index].innerText = parseInt(likesNumbers[index].innerText) - 1;
    }
  });
}

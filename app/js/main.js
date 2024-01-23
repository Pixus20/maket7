$(".slider_banner, .content_third_slider, .slider4").slick({
  dots: true,
  infinity: true,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
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

import "./styles/app.scss"
// function component() {
//     let element = document.createElement('div');
//     element.innerHTML = "<p>Hello webpack</p>";
//     return element;
// }
//
// document.body.appendChild(component());

$(document).ready(function () {
    $('.main__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 4000,
        dots: true,
        adaptiveHeight:false,
        arrows:false
    });

  $('a[data-slide]').click(function(e) {
    e.preventDefault();
    console.log('clicked');
    const slideno = $(this).data('slide');
    console.log('slideno', slideno);
    $('.main__slider').slick('slickGoTo', slideno - 1);
  });


});


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
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        adaptiveHeight:true,
        arrows:false
    });
});
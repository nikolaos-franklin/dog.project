$(function(){

  $('.user-nav__btn').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active');
  });
 
  $('.reviews__slider').slick({
   dots: false,
   slidesToShow: 1,
   slidesToScroll: 1,
   arrows: true,
   vertical: true,
   infinite: false,
    prevArrow: '<button type="button" class="reviews__slider-arrow--top"><svg width="17" height="27" viewBox="0 0 17 27" fill="#292929" xmlns="http://www.w3.org/2000/svg"><path d="M8.38889 25.6113L8.38889 2.00022" stroke="black" stroke-width="2.3" stroke-linecap="round"stroke-linejoin="round"/><path d="M1.77778 8.61133L8.38889 2.00022L15 8.61133" stroke="black" stroke-width="2.3"stroke-linecap="round" stroke-linejoin="round" /></svg></button>',
    nextArrow: '<button type="button" class="reviews__slider-arrow--down"><svg width="14" height="24" viewBox="0 0 14 24" fill="#292929" xmlns="http://www.w3.org/2000/svg"><g><path d="M7.00043 1.47949L7.00043 22.9088" stroke="black" stroke-width="2" stroke-linecap="round"stroke-linejoin="round" /><path d="M13.0004 16.9086L7.00022 22.9088L1 16.9086" stroke="black" stroke-width="2"stroke-linecap="round" stroke-linejoin="round"/></g></svg></button>',
 })
});
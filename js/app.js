$('.stroca2_items').slick({
    slidesToShow: 6,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 4000,
  });

  $('.stroca2_items_2').slick({
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 4000,
  });

  $('.stroca2_items_3').slick({
    slidesToShow: 1,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 4000,
  });
  document.querySelector('.slick-prev').classList.add('stroca2_items_Previous');
  document.querySelector('.slick-next').classList.add('stroca2_items_Next');

let menu_buttom = document.querySelector('#menu');
let side_bar = document.querySelector('.nav');
let list1 = document.querySelector('.list1');
let list2 = document.querySelector('.list2');
let list3 = document.querySelector('.list3');
function opmen_menu(){
    list1.classList.toggle('list_top');
    list2.classList.toggle('list_center');
    list3.classList.toggle('list_right');
    side_bar.classList.toggle('nav-active');
}
menu_buttom.addEventListener('click', opmen_menu);
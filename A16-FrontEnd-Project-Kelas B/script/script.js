const button = document.getElementsByClassName('button')[0];
const headerRight = document.getElementsByClassName('header-right')[0];
const header = document.getElementsByTagName('header')[0];

button.addEventListener('click',() => {
  headerRight.classList.toggle('menu');
  header.classList.toggle('menu');
});

$(window).on("scroll", function () {
    if ($(window).scrollTop() > 50) {
      $("header").addClass("active");
    } else {
      $("header").removeClass("active");
    }
  });

// animasi pada digital talent
$(window).scroll(function () {

  var wScroll = $(this).scrollTop();

  // p
  if (wScroll > $('.digitalent').offset().top - 350) {
    $('.pKiri').addClass('animated fadeInLeft');
    $('.pKanan').addClass('animated fadeInRight');
  }
});

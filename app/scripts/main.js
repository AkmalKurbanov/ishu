

$(document).ready(function () {





  // drop down menu
  $('.arrowTrigger-js').on('click', function () {
    $('.dropMnu-js').slideToggle();
  });
  // drop down menu end



  // modal windows
  $('.registration-js').on('click', function () {
    $('.registration').fadeIn();
  });
  $('#registration-tab').on('click', function () {
    $('.registration__modalWindow').css('flex-direction', 'row-reverse');
    $('.closeBtn').addClass('closeBtnLeft');
  });
  $('#signIn-tab').on('click', function () {
    $('.registration__modalWindow').css('flex-direction', 'row');
    $('.closeBtn').removeClass('closeBtnLeft');
  });
  $('.registration-js').on('click', function () {
    $('#autorization').css('display', 'flex');
  });
  $('.closeBtn').on('click', function () {
    $('.blurEffect').hide();
  });



  // modal windows end


  // hamburger
  $('.hamburger').click(function () {
    $(this).toggleClass('openClose');
    $('.mnu-js').toggleClass('mobileMnu-js');
    $('.hamburger__line').toggleClass('lineBg');
  });

  $('.mnu-js').click(function () {
    $('.hamburger').removeClass('openClose');
    $('.hamburger__line').removeClass('lineBg');
  });

  $(document).mouseup(function (e) {
    var div = $('.hamburger');
    if (!div.is(e.target) &&
      div.has(e.target).length === 0) {
      div.removeClass('openClose');
    }
  });

  // hamburger end

  // mmenu
  $('.header__mnuFirstLvl').clone().appendTo('.mmenu-nav');
  $('.autorization').clone().appendTo('navbar');
  var $menu = $('.mmenu-nav').mmenu({
    navbar: {
      title: 'IshuInfo',
    },
    extensions: ['fx-menu-slide', 'fx-listitems-slide', 'border-full', 'pagedim-black', 'position-right'],
    offCanvas: {

    },
    counters: true,
  });

  var $icon = $('.hamburger');
  var API = $menu.data('mmenu');

  $icon.on('click', function () {
    API.open();
  });

  // mmenu





  // rating
  $(
    function () {
      $('li').on('click', function () {
        var selectedCssClass = 'selected';
        var $this = $(this);
        $this.siblings('.' + selectedCssClass).removeClass(selectedCssClass);
        $this
          .addClass(selectedCssClass)
          .parent().addClass('vote-cast');
      });
    }
  );
  // rating end


  // service slider 
  var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    direction: 'vertical',

    breakpoints: {
      767: {
        direction: 'horizontal',
      },
      575: {
        direction: 'horizontal',
        slidesPerView: 2,
      },
    }
  });
  var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    thumbs: {
      swiper: galleryThumbs
    }
  });









  var swiper = new Swiper('.serviceSlider-js', {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    loopFillGroupWithBlank: true,
    breakpoints: {
      767: {
        slidesPerView: 3,
      },
      575: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });








  // service slider end

  // favorite
  $('.favorites').on('click', function () {
    $(this).toggleClass('addTofavorites');
  });
  // favoriteend


});

$(document).ready(function(){
	$('.carousel__inner').slick(
		{
			speed: 800,
			adaptiveHeight: true,
			prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
			nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
			responsive: [
				{
				  breakpoint: 992,
				  settings: {
					arrows: false,
					adaptiveHeight: true
				  }
				},
			  ]
		  }
	);

	$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog__item-content').eq(i).toggleClass('catalog__item-content_active');
                $('.catalog__item-list').eq(i).toggleClass('catalog__item-list_active');
            })
        });
    };

    toggleSlide('.catalog__link');
    toggleSlide('.catalog__link_back');

	//Modal

	$('[data-modal=consultation]').on('click', function () {
		$('.overlay, #consultation').fadeIn();
	});

	$('.modal__close').on('click', function () {
		$('.overlay, #consultation, #order, #thanks').fadeOut();
	})


	$('.btn_catalog').each(function (i) {
		$(this).on('click', function () {
			$('#order .modal__desc').text($('.catalog__subtitle').eq(i).text());
			$('.overlay, #order').fadeIn();
		})
	})


	function validateForms(form) {
		$(form).validate({
			rules: {
			  name: "required",
			  phone: "required",
			  email: {
				required: true,
				email: true
			  }
			},
			messages: {
			  name: "Пожалуйста, введите ваше имя",
			  phone: "Пожалуйста, введите ваш номер телефона",
			  email: {
				required: "Пожалуйста, введите вашу почту",
				email: "Неправильная почта!!!"
			  }
			}
		  });
	}
	
	validateForms("#consultation form");
	validateForms("#order form");
	validateForms("#consultation-form");
  });


/*Открываем главную функцию jQuery*/
$(function () {

/*Реализация модального окна"*/

 	$('.btn-modal').click(function (e) {
        e.preventDefault();
        $('#exampleModal').arcticmodal();
    });



/*Реализация плавной прокрутки от кнопки "Подробнее"*/
	$("#trust").on("click","a", function (event) {
 //отменяем стандартную обработку нажатия по ссылке
   event.preventDefault();

     //забираем идентификатор блока с атрибута href

        var id  = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь

            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс

        $('body,html').animate({scrollTop: top}, 1500);
    });


/*Реализация прелоадера"*/

    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');
    

/*Реализация гамбургера"*/

	$('.hamburger').click(function () {
		$('.menu-collaps').toggleClass('d-none order');
		$('.menu').toggleClass('menu-opened');
	})

/*Реализация слайдера"*/

 	 $('.slider').slick({
 	 	dots: true,
 	 	prevArrow:'<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
  	  	nextArrow:'<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
 	 });

/*Реализация паралакса"*/
if ($(window).width() > 960)
    { 
		// Кешируем объект окна
			$window = $(window);
		                
		   $('.header-main').each(function(){
		     var $bgobj = $(this); // Назначаем объект
		                    
		      $(window).scroll(function() {
		                    
				// Прокручиваем фон со скоростью var.
				// Значение yPos отрицательное, так как прокручивание осуществляется вверх!
				var yPos = ($window.scrollTop() / $bgobj.data('speed')); 
				
				// Размещаем все вместе в конечной точке
				var coords = '50% '+ yPos + 'px';

				// Смещаем фон
				$bgobj.css({ backgroundPosition: coords });
				
			}); 

		 });	
    }

/*закрываем главную функцию jQuery*/
});



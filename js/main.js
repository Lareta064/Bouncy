$(document).ready(function() {

	//плавная прокрутка
    $("nav.header__navigation a, a[rel='m_PageScroll2id'],a[href='#top'], a.PageScroll2id, a.mouse_scroll").mPageScroll2id({
     highlightSelector:"nav a"
    });
	
	var toggles = document.querySelectorAll(".cmn-toggle-switch");
	//скрипт иконки-гамбургер
	(function() {
		"use strict";
		var toggles = document.querySelectorAll(".cmn-toggle-switch");
			for (var i = toggles.length - 1; i >= 0; i--) {
				var toggle = toggles[i];
				toggleHandler(toggle);
		};

		function toggleHandler(toggle) {
			toggle.addEventListener( "click", function(e) {
				e.preventDefault();
			(this.classList.contains("active") === true) ? this.classList.remove("active") : this.classList.add("active");
			});
			
		}
	})();

	/*carousels*/
	$('#team-carousel').owlCarousel({
		items:1,
		//loop: true,
		dots: true,
		//autoplay: true,
 			smartSpeed:1000,
 			autoplayTimeout:2000,
	});

	/*reviews carousel*/
	$('#reviews-carousel').owlCarousel({
		items:1,
		//loop: true,
		dots: true,
		//autoplay: true,
 			smartSpeed:1000,
 			autoplayTimeout:2000,
 			
	});
	

	/*добавляем класс responsiveдля меню*/
	$("#navigation__button").click(myFunction); 

		function myFunction() {
			var x = document.getElementById("navigation");
		
			if(x.className === "header__navigation") {
					x.className += " responsive";
				}  else{
					x.className = "header__navigation";
		}
	}
	/*добавляем класс responsiveдля меню*/

	/*скрываем открытое меню при увеличении экрана*/
	$(window).resize(function(){
		    var w = $(window).width();
		    var topnav = $("#navigation");

		    if(w > 768) { //не забудь поменять условие на правильное
		    	//меняем значение аттрибута class элемента topnav
		        topnav.attr("class","header__navigation"); 
		        
		    }
		});
	/*//скрываем открытое меню при увеличении экрана*/

	/*показываем скрытый текст в блоке heLlo*/
	$('#btnLink').on('click', function(e){
		e.preventDefault;
		if($('#btnLink').hasClass('btnHide')){
			$('p.text-hidden').hide(1000);
			$(this).text('Read more').removeClass('btnHide');
		} else
			 {
			$('p.text-hidden').show(1000);
			$(this).text('Hide text').addClass('btnHide');
			};
	})
	/*//показываем скрытый текст в блоке heLlo*/

	

	// MixItUp - фильтрация работ в портфолио
	$('#filter__block').mixItUp();

		
	var filterMenu = $('.portfolio-filter__menu li')
	var filterMenuItem = $('li.filter__menu-item')

	/*присвоить класс актив по клику на пункт меню*/
	filterMenuItem.on('click', function(){
			$(this).addClass('filter-active');
			$(this).siblings('.filter-active').removeClass('filter-active');

			filterMenuItem.each(function(index) {
				if ( $(this).hasClass('filter-active') ) {
					$(this).children('.bottom-line').css('display','block');
				}else{
					$(this).children('.bottom-line').css('display','none');
				}
				
			});
	});

	/*подчеркивание активного пункта меню*/	
	filterMenuItem.each(function(index) {
		if ( $(this).hasClass('filter-active') ) {
				$(this).children('.bottom-line').css('display','block');
			};
	});
	/*//подчеркивание активного пункта меню*/	

	/*показать скрытый текст в слайдере News*/	
		$('#readMore').on('click', function(){
			if($(this).hasClass('hideText')) {
				$('#news-text-continue').hide(800);
				$(this).removeClass('hideText');
				$(this).text('+ Read More');
			} else {
			$('#news-text-continue').show(800);
			$(this).addClass('hideText');
			$(this).text('-Hidden Text');
		}
	});
		/*карточки с прайсом:  поднимаем и опускаем заголовок*/
		
		var cardHead = $('h3.card-title') //заголовок карточки
		
		var bottomHead = $('h3.card-title-bottom')// строка Let's внизу карточки
		var cardList = $('ul.card-service-list')// список услуг в карточке

			//события по клику по заголовку карточки 
			cardHead.on('click', function(){
				
			$(this).siblings('.card-price-value').css('display', 'none');
			$(this).siblings('ul.card-service-list').css('display', 'block');
			$(this).removeClass('card-title').addClass('card-title-bottom');
			
			$(this).text('');
		});
			//события по клику по строке Let's
			bottomHead.on('click', function(){
			$(this).siblings('.card-price-value').css('display', 'block');
			$(this).siblings('ul.card-service-list').css('display', 'none');
				
				$('#popup-window').show(600);
				$('.overlay').show();
			
		});

			cardList.on('click', function(){
				var titleText = $(this).siblings('h3').attr('data-name');
				console.log(titleText);
				$(this).siblings('.card-price-value').css('display', 'block');
				$(this).css('display', 'none');
				$(this).siblings('.card-title-bottom').removeClass('card-title-bottom').addClass('card-title');
				$(this).siblings('.card-title').text(titleText);
			});


	
});



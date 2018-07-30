$(document).ready(function() {
	
	var elements = $(".accordeon").children('.accordeon__item')
	/*при загрузке страницы у картинки с классом .rising убираем затемнение*/
	elements.each(function() {
			if($(this).hasClass('rising')){
				$(this).find('.accordeon__item-overlay').css('display', 'none');
			}else {
				$(this).find('.accordeon__item-overlay').css('display', 'block');
			};
		});


	/*присваиваем класс .rising при наведении на картинку*/
	elements.on('mouseenter', function(){
		$(this).addClass('rising').removeClass('minimize');		
		$(this).siblings('.rising').removeClass('rising').addClass('minimize');
		/*убираем затемнение у элемента с классом  .rising */
		elements.each(function() {
			if($(this).hasClass('rising')){
				$(this).find('.accordeon__item-overlay').css('display', 'none');
			}else {
				$(this).find('.accordeon__item-overlay').css('display', 'block');
			};
		});

	});
	
})
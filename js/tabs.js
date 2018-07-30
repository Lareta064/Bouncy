$(document).ready(function() {
	/*myTabs*/
	/*horizontal tabs*/
	var pill = $("[data-pill]")
	var tabs = $("#tabsContent").find(".tabs_block")

	pill.on('click', function(){
		var name = $(this).attr('data-pill');
		/*меняем заливку активной иконке*/
		$(this).addClass('active-toggle');
		$(this).siblings('.active-toggle').removeClass('active-toggle');
		/*отображаем блок, соответствующий активной иконке*/
		tabs.each(function( index ) {
			if($(this).attr('data-name') == name && pill.hasClass('active-toggle')){
				
				$(this).addClass('tabs_block-visible');
				$(this).siblings('.tabs_block-visible').removeClass("tabs_block-visible");
				
			}
		});
	});
	/*end horizontal tabs*/

	/*vertical tabs*/
	var pillVertical = $('.tabs_toggle-item')
	var tabsVertical = $(".vertical-tabs__block").children(".tabs__content")

	pillVertical.on('click', function(){
	var name = $(this).attr('data-pill');
		$(this).addClass('active-toggle');
		$(this).siblings('.active-toggle').removeClass('active-toggle');
		

		tabsVertical.each(function( index ) {
			if($(this).attr('data-name') == name && pillVertical.hasClass('active-toggle')){
				
				$(this).addClass('tabs_content-visible');
				$(this).siblings('.tabs_content-visible').removeClass("tabs_content-visible");
				
			}
		});
	 });

	
	/*end vertical tabs*/
	/*end myTabs*/

})
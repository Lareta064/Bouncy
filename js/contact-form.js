$(document).ready(function() {
	/*показываем форму связи и задний фон*/
	$('.btnOpenForm').on('click', function(){
		$('#popup-window').show(600);
		$('.overlay').show();
	});
	/*закрываем форму по клику по крестику*/
	$('p.form-close').on('click', function(){
		$('#popup-window').hide(600);
		$('.overlay').hide();
	});

	/*закрываем форму по клику по заднему фону*/
	$('.overlay').on('click', function(){
		$('#popup-window').hide(600);
		$(this).hide();
	});


	// jQuery Validate JS
  $("#contact-form").validate({
   rules: {
      name: { required: true },
      email: { required: true, email: true },
      // skype:  { required: true },
    },
    messages: {
      required: "Whoops! Not filled"
  	},

    submitHandler: function(form) {
      ajaxFormSubmit();
    }

  })

  // Функция AJAX запрса на сервер
  function ajaxFormSubmit(){
    var string = $("#contact-form").serialize(); // Соханяем данные введенные в форму в строку. 

    // Формируем ajax запрос
    $.ajax({
      type: "POST", // Тип запроса - POST
      url: "php/mail.php", // Куда отправляем запрос
      data: string, // Какие даные отправляем, в данном случае отправляем переменную string
      
      // Функция если все прошло успешно
      success: function(html){
        $("#contact-form").slideUp(800);
       $('#answer').html(html);
        
        setTimeout(function() {
          $("#popup-window").slideUp(800);
          $('#answer').hide();
              }, 2000);//закрываем окно благодарности
         
        setTimeout(function() {$('.overlay').hide();}, 2000);
      }
    });

    // Чтобы по Submit больше ничего не выполнялось - делаем возврат false чтобы прервать цепчку срабатывания остальных функций
    return false; 
  };

});
var validationRules = {
    rules: {
      email: { required: true }
    },

    message: { 
      email:{ required: "Stop!"} 
    }
  };

// jQuery Validate JS
  $("#mini-form").validate(validationRules);
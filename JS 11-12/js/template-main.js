$(function() {
	var html = $('#test').html();
	var data = {
		fio: 'Грушкевич Олександр',
		photo: 'img/foto.jpg',
		info: 'Студент',
		reason: [
			'Люблю бачити результат від своєї роботи',
			'Хочу розвиватись',
			'Накошу бабла, как зайцы трын траву',
		],
		phone: '+380931032455',
		vkontakte: 'https://vk.com/id163337786',
		feadback: 'Все в житті відбувається не випадково'
	};

	var content = tmpl(html, data);

	$('body').append(content);

});

$(function() {
	var data = {
		header: 'Тест',
		questions: [{
            title: 'Питання 1',
            radioname: 'one',
            id: ['1','2','3'],
            answers:['Варіант відповіді 1','Варіант відповіді 2','Варіант відповіді 3'],
            correct: 1
            },
            {
            title: 'Питання 2',
            radioname: 'two',
            id: ['1','2','3'],
            answers:['Варіант відповіді 1','Варіант відповіді 2','Варіант відповіді 3'],
            correct: 2
            },
            {
            title: 'Питання 3',
            radioname: 'three',
            id: ['1','2','3'],
            answers:['Варіант відповіді 1','Варіант відповіді 2','Варіант відповіді 3'],
            correct: 3
        }],
		submit: 'Перевірити'
	};

	localStorage.setItem('questionary', JSON.stringify(data));
	var objData = JSON.parse(localStorage.getItem('questionary'));

	var html = $('#test').html();
	var content = tmpl(html, objData);

	$('.wrapper').append(content);


    function showModal(e) {
        e.preventDefault();

        var $modal = $('<div class="modal"></div>');
        var $result = 0;
        var $answer = $('input:checked');
        var $correct = [];

        for (var i = 0; i<objData.questions.length; i++) {
                $correct[i] = objData.questions[i].correct;
            if ($($answer[i]).attr('id') == $correct[i]) {
                $result += 1;
                $modal.append('<p class="bg-success">Відповідь на питання № ' + (i+1) + ' - <b>вірно</b></p>');
            } else {
                $modal.append('<p class="bg-danger">Відповідь на питання № ' + (i+1) + ' - <b>не вірно</b></p>');
            }
        }

        $modal.append('<p class="result">Вірних відповідей: ' + $result + '</p>');

        if ($result == objData.questions.length) {
            $modal.append('<h4>Ви пройшли тест!</h4>');
        } else {
            $modal.append('<h4>Ви не пройшли тест</h4>');
        }

        $modal.append('<button class="btn btn-info">Пройти ще раз</button>');
        $('body').append($modal);

        $('button').one('click', function (e) {
            e.preventDefault();
            $modal.detach();
            $('input').attr('checked', false);
        })
    }

    $('button').on('click', showModal);

    return this;

});

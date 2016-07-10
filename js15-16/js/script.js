$(function () {
    var API_KEY = '2694108-82b78d019d259a0c5f0ac4c39';

    $('.btn').on('click', search);

    $('.search').keypress(function () {
        if (event.keyCode == 13) {
            search;
        } else return;
    });

    function search(e) {
        e.preventDefault();
        $('.result img').remove();
        var $searchKey = $('.search').val();
        $.ajax({
            url: 'https://pixabay.com/api/?key=' + API_KEY + '&q='+ $searchKey + '&image_type=photo',
            dataType: 'jsonp',
            success: function (data) {
               var $results = data.hits;
               for (var i=0; i < $results.length; i++) {
                    $('.result').append('<img src="' + $results[i].previewURL + '">');
               }
           },
           error: function(){
            alert('Error request')
            }
        });
        $('.search').val('');
    }

    // OOP task
function Human(name, age, state, height, weight) {
    this.name = name;
    this.age = age;
    this.state = state;
    this.height = height;
    this.weight = weight;
}

var human = new Human('Alex', 29, 'male', 181, 81);
console.log(human);
console.log('--------------------------------');

function Worker(name, age, state, height, weight, company, salary){
    Human.apply(this, arguments);
    this.company = company;
    this.salary = salary;
    this.work = function(){
        console.log(this.name + ' works');
    }
}
Worker.prototype = human;

var newWorker = new Worker('Yurii', 22, 'male', 183, 87, 'Google', 10000);
console.log(newWorker);
newWorker.work();
console.log('--------------------------------');

function Student(name, age, state, height, weight, university, award){
    Human.apply(this, arguments);
    this.university = university;
    this.award = award;
    this.watchSeries = function(){
        console.log(this.name + ' watches TV series');
    }
}
Student.prototype = human;

var newStudent = new Student('Yana', 26, 'feemale', 183, 87, 'Harvard', 5000);
console.log(newStudent);
newStudent.watchSeries();

});




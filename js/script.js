/*
Задание а урок №1

1)Создать переменную numberOfFilms и в нее поместить ответ от пользователя на вопрос:'Сколько фильмов Вы уже посмотрели?'

2)Создать обьект personalMovieDB и в него поместить такие свойства:
-count - сюда передавать ответ на первый вопрос
-movies - в это свойство поместить пустой обьект
-actors - тоже поместить пустой обьект
-genres - сюда поместить пустой массив
-privat - в это свойство поместить boolean значение false

3)Задайте пользователю по два раза вопросы:
- 'Один из последних просмотренных фильмов?'
- 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в обьект movies в формате:
   movies:{
		'logan': '8.1'
	}
	Проверить что бы все работало в консоли без ошибок
	*/
"use strict";

let numberOfFilms;

function start(){
	numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
	}
}

start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

/* const a = prompt('Один из последних просмотренных фильмов?', ''),
		b = prompt('На сколько оцените его?', ''),
		c = prompt('Один из последних просмотренных фильмов?', ''),
		d = prompt('На сколько оцените его?', ''); */

/* personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB); */



/* Задание на урок №2:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

//1)

function rememberMyFilms() {
	for(let i = 0; i < 2; i++) {
		const a = prompt('Один из последних просмотренных фильмов?', ''),
				b = prompt('На сколько оцените его?', '');
	
		//2)
		if(a != null && b != null && a != '' && b != '' && a.length < 50){
			personalMovieDB.movies[a] = b;
			console.log('Yes');
		} else {
			i--;
			console.log('Error');
		}
	}
}
rememberMyFilms();

//3)
function detectPersonalLevel() {
	if(personalMovieDB.count < 10){
		console.log("Просмотрено довольно мало фильмов");
	} else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
		console.log("Вы классический зритель");
	}else if(personalMovieDB.count >= 30){
		console.log("Вы киноман");
	}else{
		console.log("Произошла ошибка");
	}
}
detectPersonalLevel(); 


//2)

/* Задание на урок №3

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/
//1)
function showDB(hidden) {
	if (!hidden) {	
	console.log(personalMovieDB);
	}
}

showDB(personalMovieDB.privat);

//3)

function writeYourGenres() {
	for(let i = 1; i <= 3; i++){
		const genre = prompt(`Ваш любимый жанр под номером ${i}`);
		personalMovieDB.genres[i - 1] = genre;
	}
}
writeYourGenres();
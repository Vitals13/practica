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

	/* Задание на урок №2:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/



/* Задание на урок №3

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres*/



/* Задание на урок №4

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/
"use strict";



const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start: function(){
		personalMovieDB.count = +prompt('Сколько фильмов Вы уже посмотрели?', '');
	
		while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
			personalMovieDB.count = +prompt('Сколько фильмов Вы уже посмотрели?', '');
		}
	},
	rememberMyFilms: function() {
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
	},
	detectPersonalLevel: function() {
		if(personalMovieDB.count < 10){
			console.log("Просмотрено довольно мало фильмов");
		} else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
			console.log("Вы классический зритель");
		}else if(personalMovieDB.count >= 30){
			console.log("Вы киноман");
		}else{
			console.log("Произошла ошибка");
		}
	},
	showDB: function(hidden) {
		if (!hidden) {	
		console.log(personalMovieDB);
		}
	},
	toggleVisibleMyDB: function (){
		if(personalMovieDB.privat){
			personalMovieDB.privat = false;
		}else{
			personalMovieDB.privat = true;
		}
	},
	writeYourGenres: function() {
		for(let i = 1; i <= 2; i++){

			let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();
			if(genres === '' || genres == null) {
				console.log('Вы ввели не коректные данные или не ввели вовсе!');
				i--;
			}else{
				personalMovieDB.genres = genres.split(', ');
				personalMovieDB.genres = genres.sort();
			}
		}
		personalMovieDB.genres.forEach((item, i) => {
			console.log(`Любимый жанр ${i + 1} - это ${item}`);
		});
	}
};


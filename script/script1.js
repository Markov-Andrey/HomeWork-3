//Task 1
function task1CycleFor () {
	for (let i = 1; i <= 50; i++) {
		if (i < 50) {
			document.write (`${i}, `)
		}
		if (i == 50) {
			document.write (`${i}. Расчет окончен! =)`)
		}
	};
};

function task1CycleWhile () {
	i = 35;
	while (i >= 8) {
		if (i > 8) {
			document.write (`${i}, `)
		}
		if (i == 8) {
			document.write (`${i}. Расчет окончен! =)`)
		}
	i--
	};
};

//Task 2
function task2CycleWhile () {
	let arrayQuotes = [
	`//Пока вы "прокручиваете" цикл, почитайте цитаты программистов:`,
	`//640 Кб должно хватить для любых задач. 
	©Bill Gates`,
	`//Программирование — это разбиение чего-то большого и 
	невозможного на что-то маленькое и вполне реальное. 
	©Jazzwant`,
	`//Работает? Не трогай. ©Любой программист`,
	`//Если вы хотите, чтобы код было легко и быстро писать — 
	делайте его удобным для чтения. 
	©Robert C. Martin`,
	`//Отладка кода — это как охота. Охота на баги. 
	©Amit Kalantri`,
	`//Основная проблема программистов состоит в том, 
	что их ошибки невозможно предугадать.
	©Seymour Cray`,
	`//Лень — естественное состояние программиста, 
	после которого он рождает хороший алгоритм.
	©Народное творчество`,
	`//Спасибо, что уделили внимание, цикл уже завершен и 
	можно переходить к следующему заданию`,
	]
	i = 89;
	while (i >= 11) {
		if ((i != 89) && (i != 80)) {
			document.write (`${i} <br>`)
		}
		if (i == 89) {
			document.write (`${i} ${arrayQuotes[0]} <br>`)
		}
		if (i == 80) {
			document.write (`${i} ${arrayQuotes[1]} <br>`)
		}
		if (i == 70) {
			document.write (`${i} ${arrayQuotes[2]} <br>`)
		}
		if (i == 60) {
			document.write (`${i} ${arrayQuotes[3]} <br>`)
		}
		if (i == 50) {
			document.write (`${i} ${arrayQuotes[4]} <br>`)
		}
		if (i == 40) {
			document.write (`${i} ${arrayQuotes[5]} <br>`)
		}
		if (i == 30) {
			document.write (`${i} ${arrayQuotes[6]} <br>`)
		}
		if (i == 20) {
			document.write (`${i} ${arrayQuotes[7]} <br>`)
		}
		if (i == 11) {
			document.write (`${i} ${arrayQuotes[8]} <br>`)
		}
		i--
	};
};

//Task 3
function task3Sum () {
	let sum = 0;
	i = 0;
	while (i <= 100) {
		sum = sum + i;
		i++
	};
	document.write (`Сумма чисел от 0 до 100 равна ${sum}, легко!`);
};

//Task 4
function task4Sum () {
	for (i = 1; i <= 5; i++) {	
		sum = 0;
		for (let z = 1; z <= i; z++){
			sum = sum + z;
		};
		document.write (`Сумма чисел в числе ${i} равна ${sum}<br>`);
	};
	document.write (`Готово, продолжим`);
};

//Task 5
function task5EvenNumber (){
	document.write (`<table><tr><td>Цикл "For"</td>`)
    for (i = 8; i <= 56; i++) {
		if (i % 2 == 0){
			document.write (`<td>${i}</td>`);
        };
    };
	document.write (`</tr><tr><td>Цикл "While"</td>`)
    i = 8;
    while (i <= 56) {
		if (i % 2 == 0){
			document.write (`<td>${i}</td>`);
		};
		i++
    };
	document.write (`</tr></table>`)
};

//Task 6
function task6MultiplicationTable (){
	i = 2,	x = 2;
	document.write (`Таблица умножения<table><tr>`)
    while (x <= 10) {
    	while (i <= 10) {
    		document.write (`<td>${i} * ${x} = ${i*x}</td>`);
    		i++;
    	};
		document.write (`</tr><tr>`)
    	i = 2;
		x++
    };
	document.write (`</tr></table>`)
};

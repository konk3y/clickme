const button = document.querySelector('.glowing-btn');   

button.addEventListener('click', function() {                 //добавляет обработчик событий на клик для элемента с классом "button". Когда пользователь кликает на элементе, выполняется функция внутри

function random(number) {
    return Math.ceil(Math.random() * 100);
}

let firstname = prompt('Привет! Давай поиграем, но сначала, как тебя зовут?');

while (firstname == '' || firstname == null) {
    firstname = prompt ('Ошибка, имя не введено, пожалуйста, укажите ваше имя.');
    
}

alert(firstname +',' + ' вот правила игры: я загадал число, тебе нужно  угадать. Диапозон чисел от 0 до 100. У тебя 5 попыток, если проиграешь, попробуй еще раз.');

let number = random();
let guess = prompt('Какое число я загадал?');
let guessCounter = 1;

while (guess != number) {
    guessCounter = guessCounter + 1;
    if (guess > number) {
       guess = prompt('Много. Попробуй еще раз.')
       
    }
    else if (guess < number) {
       guess = prompt('Мало. Попробуй еще раз.');
       
    }

    if (guessCounter == 6) {
        alert('Вы потратили все попытки и програли.');
        return;
    }
}

alert('Поздравляем! Это число ' + number + ' Тебе понадобилось ' + guessCounter + ' попыток');

});


// Переключатель цветов
// Есть массив цветов в hex - формате и кнопки Start и Stop.

{/* < button type = "button" data - action="start" > Start</button >
    <button type="button" data-action="stop">Stop</button> */}

const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];
// Напиши скрипт, который после нажатия кнопки Start, раз в секунду меняет 
// цвет фона body на случайное значение из массива используя инлайн - стиль.
// При нажатии на кнопку Stop, изменение цвета фона должно останавливаться.

// Учти, на кнопку Start можно нажать бесконечное количество раз.
// Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.

// Для генерации случайного числа(индекс элемента массива цветов), 
// используй функцию randomIntegerFromInterval.

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

refs = {
    body: document.querySelector('body'),
    startBtn: document.querySelector('button[data-action="start"]'),
    stopBtn: document.querySelector('button[data-action="stop"]')
};

let timerId = null;

refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);



function onStartBtnClick() {
    timerId = setInterval(() => {
        const color = colors[randomIntegerFromInterval(0, colors.length - 1)];
        bgColorChange(color);
    }, 1000);

    refs.startBtn.disabled = true;
}

function onStopBtnClick() {
    clearInterval(timerId, 1000);
    refs.startBtn.disabled = false;
}

// Функция изменения цвета на случайное значение из массива

function bgColorChange(color) {
    refs.body.style.backgroundColor = color;
}




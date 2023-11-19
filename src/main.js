let display = document.querySelector('.display');
let buttons = document.querySelector('.buttons');

buttons.addEventListener('click', function (event) {
    if (event.target.tagName == 'BUTTON') {
        let buttonValue = event.target.textContent;

        if (buttonValue == '=') {
            try {
                display.value = eval(display.value).toString();
            } catch (error) {
                display.value = 'Error';
            }
        } else if (buttonValue == 'AC') {
            display.value = '';
        } else if (buttonValue == 'DEL') {
            display.value = display.value.slice(0, -1);
        } else {
            display.value += buttonValue;
        }
    }
});

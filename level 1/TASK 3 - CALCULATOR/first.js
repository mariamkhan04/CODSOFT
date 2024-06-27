let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue  = '0';
for (item of buttons) {
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;
        // console.log('Button text is: ',buttonText);
        if (buttonText == 'x'){
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        } else if (buttonText == '÷'){
            buttonText = '/';
            screenValue += buttonText;
            screen.value = screenValue;
        }else if (buttonText == '^'){
            buttonText = '**';
            screenValue += buttonText;
            screen.value = screenValue;
        } else if(buttonText == 'AC'){
            screenValue = '0';
            screen.value = screenValue;
        } else if(buttonText == '='){
            screenValue = eval(screen.value);
            screen.value = screenValue;
        } else {
            if (screenValue === '0') {
                screenValue = buttonText;
            } else {
                screenValue += buttonText;
            }
            screen.value = screenValue;
        }
    })
}
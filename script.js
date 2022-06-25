
// parseInt -- for integers
// prompt to ask users to input their value

const firstFigure = parseInt(prompt ('Enter first number: '));
const operator = prompt ('Enter operator ( either +, -, * or / ): ');
const secondFigure = parseInt(prompt ('Enter the second number: '));


let result;

if ( operator == '+'){
    result = firstFigure + secondFigure;
}

else if ( operator == '-'){
    result = firstFigure - secondFigure;
}

else if ( operator == '*'){
    result = firstFigure * secondFigure;
}

else if ( operator == '/'){
    result = firstFigure / secondFigure;
}

// alert the answer
alert( firstFigure + operator + secondFigure + "=" + result);
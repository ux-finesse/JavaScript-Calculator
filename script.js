const number1 = parseInt(prompt ('Enter first number: '));
const operator = prompt ('Enter operator ( either +, -, * or / ): ');
const number2 = parseInt(prompt ('Enter the second number: '));

var result;

if ( operator == '+'){
    result = number1 + number2;
}

else if ( operator == '-'){
    result = number1 - number2;
}

else if ( operator == '*'){
    result = number1 * number2;
}

else if ( operator == '/'){
    result = number1 / number2;
}

alert( number1 + operator + number2 + "=" + result);
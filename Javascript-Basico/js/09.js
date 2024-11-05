//Funcion Expression JS - GUIA es el 14 - 15


//Function Declaration (Se puede llamar incluso antes de declararse)
function sumFunctionDeclaration(number1 = 0, number2 = 0){ //Se usa mucho en React
    console.log(number1 + number2)
}


//Function Expression (No se puede llamar antes, es una variable)
const sumFunctionExpression = function(number1 = 0, number2 = 0){
    console.log(number1 + number2)
}

//Arrow Function (No se puede llamar antes, es una variable)
const sumArrowFunction = (number1 = 0, number2 = 0) =>{
    console.log(number1+number2)
} //Si es una linea se pueden eliminar los corchetes

const sumArrowFunctionLine = (number1 = 0, number2 = 0) => console.log(number1+number2)




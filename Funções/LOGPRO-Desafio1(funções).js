let num1 = Number(prompt("Escolha o primeiro n�mero:"))
let num2 = Number(prompt("Escolha o segundo n�mero:"))

function soma(){
let resultado = num1 + num2
return resultado
}

function subtracao(){
let resultado = num1 - num2
return resultado
}

function divisao(){
let resultado = num1 / num2
return resultado
}

function multiplicacao(){
let resultado = num1 * num2
return resultado
}

let escolha = prompt("Qual operador voc� deseja:\n\nsoma \nsubtracao \ndivisao \nmultiplicacao\n\n")

if (escolha == "soma"){
console.log("O resultado �: " ,soma())
}

else if (escolha == "subtracao"){
console.log("O resultado �: " ,subtracao())
}

else if (escolha == "divisao"){
console.log("O resultado �: " ,divisao())
}

else if (escolha == "multiplicacao"){
console.log("O resultado �: " ,multiplicacao())
}



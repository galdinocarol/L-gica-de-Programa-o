let num1 = Number(prompt("Escolha o primeiro número:"))
let num2 = Number(prompt("Escolha o segundo número:"))

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

let escolha = prompt("Qual operador você deseja:\n\nsoma \nsubtracao \ndivisao \nmultiplicacao\n\n")

if (escolha == "soma"){
console.log("O resultado é: " ,soma())
}

else if (escolha == "subtracao"){
console.log("O resultado é: " ,subtracao())
}

else if (escolha == "divisao"){
console.log("O resultado é: " ,divisao())
}

else if (escolha == "multiplicacao"){
console.log("O resultado é: " ,multiplicacao())
}



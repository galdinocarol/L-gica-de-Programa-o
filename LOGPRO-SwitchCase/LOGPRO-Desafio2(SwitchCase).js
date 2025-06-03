let respostacorreta = 0 
let respostaincorreta = 0

console.log("Vamos iniciar nosso quiz: \n")

//Pergunta1
let pergunta1 = prompt("1- Em que ano o Corinthians foi fundado?\n \n A -1910 \n B -1912 \n C -1914 \n D -1916 \n \nDigite sua resposta: ")
switch(pergunta1) {
case "A":
console.log("\nResposta correta, parabéns!\n ");
respostacorreta ++
break;
default:
console.log("\nAlternativa incorreta! A alternativa correta seria letra A.\n")
 respostaincorreta ++
 break;
}

//Pergunta2
let pergunta2 = prompt("2- Qual é o estádio próprio do Corinthians, inaugurado em 2014? \n \n A - Morumbi \n B - Pacaembu \n C - Neo Química Arena \n D - Allianz Parque \n \nDigite sua resposta: ")
switch(pergunta2) {
case "C":
console.log("\nResposta correta, parabéns!\n ");
respostacorreta ++
break;
default:
console.log("\nAlternativa incorreta! A alternativa correta seria letra C.\n")
respostaincorreta ++
}

//Pergunta3
let pergunta3 = prompt("3 - Qual jogador é o maior artilheiro da história do Corinthians? \n \n A - Sócrates \n B - Rivelino \n C - Cláudio \n D - Marcelinho Carioca \n \nDigite sua resposta: ")
switch(pergunta3) {
case "C":
console.log("\nResposta correta, parabéns!\n ");
respostacorreta ++
break;
default:
console.log("\nAlternativa incorreta! A alternativa correta seria letra C.\n")
respostaincorreta ++
}

//Pergunta4
let pergunta4 = prompt("4 - Quantas vezes o Corinthians foi campeão brasileiro? \n \n A - 5 \n B - 6 \n C - 7 \n D - 8 \n \nDigite sua resposta: ")
switch(pergunta4) {
case "C":
console.log("\nResposta correta, parabéns!\n ");
respostacorreta ++
break;
default:
console.log("\nAlternativa incorreta! A alternativa correta seria letra C.\n")
respostaincorreta ++
}

//Pergunta5
let pergunta5 = prompt("5 - Qual foi o primeiro título internacional do Corinthians? \n \n A - Copa Libertadores (2000) \n B - Mundial de Clubes (2000) \n C - Recopa Sul-Americana (2013) \n D - Copa Sul-Americana (2012) \n \nDigite sua resposta: ")
switch(pergunta5) {
case "B":
console.log("\nResposta correta, parabéns!\n ");
respostacorreta ++
break;
default:
console.log("\n Alternativa incorreta! A alternativa correta seria letra B.\n")
respostaincorreta ++
}

//Pergunta6
let pergunta6 = prompt("6 - Qual desses jogadores NÃO jogou no Corinthians? \n \n A - Ronaldo Fenômeno \n B - Roberto Carlos \n B - Roberto Carlos \n C - Zico \n D - Romário \n \nDigite sua resposta: ")
switch(pergunta6) {
case "C":
console.log("\nResposta correta, parabéns!\n ");
respostacorreta ++
break;
default:
console.log("\n Alternativa incorreta! A alternativa correta seria letra C.\n")
respostaincorreta ++
}

//Pergunta7
let pergunta7 = prompt("7 - Qual foi o técnico do Corinthians no título da Libertadores de 2012? \n \n A - Tite \n B - Mano Menezes \n C - Vanderlei Luxemburgo \n D - Augusto Melo \n \nDigite sua resposta: ")
switch(pergunta7) {
case "A":
console.log("\nResposta correta, parabéns!\n ");
respostacorreta ++
break;
default:
console.log("\n Alternativa incorreta! A alternativa correta seria letra A.\n")
respostaincorreta ++
}

//Perguta8
let pergunta8 = prompt("8 - O que foi a Democracia Corinthiana nos anos 1980? \n \n A - Movimento liderado por jogadores como Sócrates e Casagrande \n B - Um esquema tático revolucionário \n C - Uma torcida organizada \n D - Um projeto de estádio \n \nDigite sua resposta: ")
switch(pergunta8) {
case "A":
console.log("\nResposta correta, parabéns!\n ");
respostacorreta ++
break;
default:
console.log("\n Alternativa incorreta! A alternativa correta seria letra A.\n")
respostaincorreta ++
}

//Pergunta9
let pergunta9 = prompt("9 - Contra qual time o Corinthians ganhou o Mundial de Clubes em 2012? \n \n A - Barcelona \n B - Chelsea \n C - Bayern de Munique \n D - Real Madrid \n \nDigite sua resposta: ")
switch(pergunta9) {
case "B":
console.log("\nResposta correta, parabéns!\n ");
respostacorreta ++
break;
default:
console.log("\n Alternativa incorreta! A alternativa correta seria letra B.\n")
respostaincorreta ++
}

//Pergunta10
let pergunta10 = prompt("10 - Quem marcou o gol da vitória do Corinthians no Mundial de Clubes 2012 contra o Chelsea? \n \n A - Paolo Guerrero \n B - Emerson Sheik \n C - Danilo \n D - Romarinho \n \nDigite sua resposta: ")
switch(pergunta10) {
case "A":
console.log("\nResposta correta, parabéns!\n ");
respostacorreta ++
break;
default:
console.log("\n Alternativa incorreta! A alternativa correta seria letra A.\n")
respostaincorreta ++
}
//Exibir Resultado
console.log("Encerramos nosso quiz, vamos exibir seus resultados: ")
console.log("\nResumo Final")
console.log("Respostas Corretas: " + respostacorreta)
console.log("Respostas Incorretas: " + respostaincorreta)



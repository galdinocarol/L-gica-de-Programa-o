let respostacorreta = 0
let respostaincorreta = 0

//Pergunta1 
console.log("Em que ano o Corinthians foi fundado? ")
console.log("A - 1910")
console.log("B - 1912")
console.log("C - 1914")
console.log("D - 1916")
let pergunta1 = prompt("Digite a alternativa correta: ")
if(pergunta1 == "A"|| pergunta1 == "1910"){
    console.log("Alternativa correta!")
    respostacorreta ++
}
else{
    console.log("Alternativa errada! - A resposta correta seria A- 1910")
    respostaincorreta ++
}
//Pergunta2
console.log("\n Qual é o estádio próprio do Corinthians, inaugurado em 2014? ")
console.log("A - Morumbi")
console.log("B - Pacaembu")
console.log("C - Neo Química Arena")
console.log("D - Allianz Parque")
let pergunta2 = prompt("Digite a alternativa correta: ")
if(pergunta2 == "C"|| pergunta2 == "Neo Química Arena"){
    console.log("\n Alternatina correta!")
    respostacorreta ++
}
else{
    console.log("\n Alternativa errada! - A resposta correta seria C - Neo química arena")
    respostaincorreta ++
}
//Pergunta3
console.log("\n Qual jogador é o maior artilheiro da história do Corinthians? ")
console.log("A - Sócrates")
console.log("B - Rivelino")
console.log("C - Cláudio")
console.log("D - Marcelinho Carioca")
let pergunta3 = prompt("Digite a alternativa correta: ")
if(pergunta3 == "C"|| pergunta3 == "Cláudio"){
    console.log("\n Alternatina correta!")
    respostacorreta ++
}
else{
    console.log("\n Alternativa errada! - A resposta correta seria C - Cláudio com 306 gols pelo corinthians")
    respostaincorreta ++
} 
//Pergunta4
console.log("\n Quantas vezes o Corinthians foi campeão brasileiro? ")
console.log("A - 5")
console.log("B - 6")
console.log("C - 7")
console.log("D - 8")
let pergunta4 = prompt("Digite a alternativa correta: ")
if(pergunta4 == "C"|| pergunta4 == "7"){
    console.log("\n Alternatina correta!")
    respostacorreta ++
}
else{
    console.log("\n Alternativa errada! A resposta correta seria C- 7")
    respostaincorreta ++
} 
//Pergunta5
console.log("\n Qual foi o primeiro título internacional do Corinthians? ")
console.log("A - Copa Libertadores (2000)")
console.log("B - Mundial de Clubes (2000)")
console.log("C - Recopa Sul-Americana (2013)")
console.log("D - Copa Sul-Americana (2012)")
let pergunta5 = prompt("Digite a alternativa correta: ")
if(pergunta5 == "B"|| pergunta5 == "Mundial de Clubes (2000)"){
    console.log("\n Alternatina correta!")
    respostacorreta ++
}
else{
    console.log("\n Alternativa errada! - A resposta correta seria B- Mundial de Clubes (2000)")
    respostaincorreta ++
} 

//Pergunta6
console.log("\n Qual desses jogadores NÃO jogou no Corinthians? ")
console.log("A - Ronaldo Fenômeno")
console.log("B - Roberto Carlos")
console.log("C - Zico")
console.log("D - Romário")
let pergunta6 = prompt("Digite a alternativa correta: ")
if(pergunta6 == "C"|| pergunta6 == "Zico"){
    console.log("\n Alternatina correta!")
    respostacorreta ++
}
else{
    console.log("\n Alternativa errada! A resposta correta seria C- Zico")
    respostaincorreta ++
}

//Pergunta7
console.log("\n Qual foi o técnico do Corinthians no título da Libertadores de 2012? ")
console.log("A - Tite")
console.log("B - Mano Menezes")
console.log("C - Vanderlei Luxemburgo")
console.log("D - Augusto Melo")
let pergunta7 = prompt("Digite a alternativa correta: ")
if(pergunta7 == "A"|| pergunta7 == "Tite"){
    console.log("\n Alternatina correta!")
    respostacorreta ++
}
else{
    console.log("\n Alternativa errada! A resposta correta seria A- Tite")
    respostaincorreta ++
} 

//Pergunta8
console.log("\n O que foi a Democracia Corinthiana nos anos 1980? ")
console.log("A - Movimento liderado por jogadores como Sócrates e Casagrande")
console.log("B - Um esquema tático revolucionário")
console.log("C - Uma torcida organizada")
console.log("D - Um projeto de estádio")
let pergunta8 = prompt("Digite a alternativa correta: ")
if(pergunta8 == "A"|| pergunta8 == "Movimento liderado por jogadores como Sócrates e Casagrande"){
    console.log("\n Alternatina correta!")
    respostacorreta ++
}
else{
    console.log("\n Alternativa errada! A resposta correta seria A- Movimento liderado por Sócrates e Casagrande")
    respostaincorreta ++
} 

//Pergunta9
console.log("\n Contra qual time o Corinthians ganhou o Mundial de Clubes em 2012? ")
console.log("A - Barcelona")
console.log("B - Chelsea")
console.log("C - Bayern de Munique")
console.log("D - Real Madrid")
let pergunta9 = prompt("Digite a alternativa correta: ")
if(pergunta9 == "B"|| pergunta9 == "Chelsea"){
    console.log("\n Alternatina correta!")
    respostacorreta ++
}
else{
    console.log("\n Alternativa errada! A Resposta correta seria B- Chealse")
    respostaincorreta ++
} 

//Pergunta10
console.log("\n Quem marcou o gol da vitória do Corinthians no Mundial de Clubes 2012 contra o Chelsea? ")
console.log("A - Paolo Guerrero")
console.log("B - Emerson Sheik")
console.log("C - Danilo")
console.log("D - Romarinho")
let pergunta10 = prompt("Digite a alternativa correta: ")
if(pergunta10 == "A"|| pergunta10 == "Paolo Guerrero"){
    console.log("\n Alternatina correta!")
    respostacorreta ++
}
else{
    console.log("\n Alternativa errada! A Resposta correta seria A- Paolo Guerrero")
    respostaincorreta ++
} 
//Exibir Resultado
console.log("\n Resumo Final")
console.log("Respostas Corretas: " + respostacorreta)
console.log("Respostas Incorretas: " + respostaincorreta)

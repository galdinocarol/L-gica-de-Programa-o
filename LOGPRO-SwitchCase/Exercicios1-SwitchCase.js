SWITCH CASE - DESAFIOS:

Idioma

let idioma = prompt("Escolha um desses idioma: \n 1- Português \n 2- Inglês \n 3- Espanhol \n 4- Francês \n 5- Japonês \n\n")

switch(idioma){
case "Português":
console.log("\nOlá, bom dia!");
break;

case "Inglês":
console.log("\nHello, good morning!");
break;
    
case "Espanhol":
console.log("\nHola, buenos dias!");
break;

case "Francês":
console.log("\nBonjour!")
break;

case "Japonês":
console.log("\n????!")
break;

default:
console.log("\nNão identificamos esse idioma!")
}

Dia da semana

let dia = Number(prompt("Escolha um número de 1 a 7:\n\n"))

switch(dia){
case 1:
console.log("\nDomingo");
break;

case 2:
console.log("\nSegunda");
break;

case 3:
console.log("\nTerça");
break;

case 4:
console.log("\nQuarta");
break;

case 5:
console.log("\nQuinta");
break;

case 6:
console.log("\nSexta");
break;

case 7:
console.log("\nSábado");
break;
}

Transporte

let num = Number(prompt("Que tipo de meio de transporte você utiliza,de acordo com a numeração à seguir: \n1- Carro \n2- Bicicleta\n3-Ônibus \n4- Moto \n5- Helicóptero \n\n"))

switch(num){
case 1:
console.log("\nCarro");
break;

case 2:
console.log("\nBicicleta");
break;

case 3:
console.log("\nÔnibus");
break;

case 4:
console.log("\nMoto");
break;

case 5:
console.log("\nHelicóptero");
break;
}


Nível de urgência

let num = Number(prompt("Qual o seu nível de urgência: \n 1- Baixo \n 2- Médio \n 3- Alto \n \n"))

switch(num){
case 1:
console.log("\nNível de urgência baixo.");
break;

case 2:
console.log("\nNível de urgência médio.");
break;

case 3:
console.log("\nNível de urgência alto.");
break;
}


LUA

console.log("Descubra a fase da lua de acordo com o número respectivo ao mês:");
console.log("1 - Janeiro");
console.log("2 - Fevereiro");
console.log("3 - Março");
console.log("4 - Abril");
console.log("5 - Maio");
console.log("6 - Junho");
console.log("7 - Julho");
console.log("8 - Agosto");
console.log("9 - Setembro");
console.log("10 - Outubro");
console.log("11 - Novembro");
console.log("12 - Dezembro");

let mes = prompt("\nDigite o número do mês (1 a 12): ");

switch (mes) {
    case "1":
    case "5":
    case "9":
        console.log("\nFase da lua: Lua Nova");
        break;
    case "2":
    case "6":
    case "10":
        console.log("\nFase da lua: Quarto Crescente");
        break;
    case "3":
    case "7":
    case "11":
        console.log("\nFase da lua: Lua Cheia");
        break;
    case "4":
    case "8":
    case "12":
        console.log("\nFase da lua: Quarto Minguante");
        break;
    default:
        console.log("\nMês inválido. Digite um número entre 1 e 12.");


TIPO DE VEÍCULO

let carro = Number(prompt("Qual o tipo do seu veículo: \n 1- Compacto \n 2- SUV \n 3- Caminhão \n 4- Picape \n 5- Doblô \n 6- Sedã \n 7- Furgão \n 8- Minivan \n 9- Esportivo \n 10- Caminhonete\n\n"))

switch (carro){
case 1:
console.log("\nSeu veículo é compacto, que legal!");
break;

case 2:
console.log("\nSeu veículo é um SUV, que legal!");
break;

case 3:
console.log("\nSeu veículo é um Caminhão, que legal!");
break;

case 4:
console.log("\nSeu veículo é uma Picape, que legal!");
break;

case 5:
console.log("\nSeu veículo é Doblô, que legal!");
break;

case 6:
console.log("\nSeu veículo é um Sedã, que legal!");
break;

case 7:
console.log("\nSeu veículo é um Furgão, que legal!");
break;

case 8:
console.log("\nSeu veículo é uma Minivan, que legal!");
break;

case 9:
console.log("\nSeu veículo é um Esportivo, que legal!");
break;

case 10:
console.log("\nSeu veículo é Caminhonete, que legal!");
break;

default:
console.log("\nNão encontramos a categoria do seu veículo.")
}


Estacionamento

let tempo = prompt("Quantas horas foram permanecidas no local? ")
switch (tempo) {
    case "1" :
    case "2":
    case "3" :
        console.log("R$ 5,00")
        break;
    case "4":
    case "5" :
        console.log("R$ 10,00")
    case "6" :
    case "7" :
        console.log("R$ 15,00")
        break;
    case "8" :
        console.log("R$ 20,00")
        break;
    default:
    console.log("O valor excedeu as horas e será cobrado R$40,00 do valor da diária")
}





NÍVEL JOGO

let escolha = Number(prompt("Qual o nível que você deseja escolher:\n 1-NÍVEL FÁCIL\n 2-NÍVEL MÉDIO\n 3-NÍVEL DIFÍCIL\n\n"))

switch (escolha){
case 1:
console.log("Você escolheu o nível Fácil.")
break;

case 2:
console.log("Você escolheu o nível Médio.")
break;

case 3: 
console.log("Você escolheu o  nível Difícil.")
break;

default:
console.log("Não temos esse nível, porque não tenta escolher os níveis listados acima.")
}


ACADEMIA


let academia = prompt("Olá, seja muito bem-vindo a nossa academia.\n\nNós oferecemos diferentes tipos de serviços. Venha conhecer:\nAula de yoga \nMusculação \nPersonal trainer \nZumba \nOutro\n\nQual desses você tem interesse? ")
switch (academia){
    
case "Aula de yoga":
console.log("\nÓtima escolha, vamos te fornecer mais informações sobre nosso programa de yoga.")
break;

case "Musculação":
console.log("\nÓtima escolha, vamos te fornecer mais informações sobre nosso programa de musculação.")
break;

case "Personal trainer":
console.log("\nÓtima escolha, vamos te fornecer mais informações sobre nosso programa de personal trainer.")
break;

case "Zumba":
console.log("\nÓtima escolha, vamos te fornecer mais informações sobre nosso programa de zumba.")
break;

case "Outro":
console.log("\nPara saber mais sobre outros serviços oferecidos por nós faça login ou crie sua conta.")
break;
}


INGRESSO

let ingresso = Number(prompt("Bem-vindo ao nosso sistema de ingresso.\nCategorias disponíveis:\n\n 1- ESTUDANTE (R$ 15,00) \n 2 - MEIA-ENTRADA (R$ 10,00) \n 3 - ENTRADA (R$ 20,00)\n"))

switch (ingresso){
case 1:
console.log("Você escolheu o ingresso de estudante que custa R$ 15,00. Qual seria a forma de pagamento?")
break;

case 2:
console.log("Você escolheu o ingresso de meia entrada que custa R$ 10.00. Qual seria a forma de pagamento?")
break;

case 3:
console.log("Você escolheu o ingresso de entrada que custa R$ 20.00. Qual seria a forma de pagamento?")
}



NIVEL DE DIFICULDADE
let idade = prompt("Digite sua idade: ")
idade = Number(idade)


switch (true){
    case (idade >= 0 && idade <= 12):
        console.log("Nível de dificuldade: Iniciante");
        break;
       
    case (idade >= 13 && idade <= 17):
        console.log("Nível de dificuldade: Leve");
        break;
       
    case (idade >= 18 && idade <= 49):
        console.log("Nível de dificuldade: Moderado");
        break;
       
    case (idade >= 50):
        console.log("Nível de dificuldade: Adaptado");
        break;
    default:
        console.log("Idade inválida.");
}


MUSICA
let genero = prompt("Digite um gênero musical (rock, jazz, samba, música clássica, pop): ")
switch (genero){
    case "rock":
        console.log("Instrumento típico: Guitarra elétrica");
        break;
    case "jazz":
        console.log("Instrumento típico: Saxofone");
        break;
    case "samba":
        console.log("Instrumento típico: Pandeiro");
        break;
    case "música clássica":
        console.log("Instrumento típico: Violino");
        break;
    case "pop":
        console.log("Instrumento típico: Teclado");
        break;
    default:
        console.log("Gênero musical não reconhecido. Tente outro.");
}


FRONT-END


let area = prompt("Área (front-end, back-end, mobile): ")
switch (area){
    case "front end":
        console.log("Cursos: HTML, CSS, JavaScript, React");
        break;
    case "back end":
        console.log("Cursos: Node.js, Banco de Dados, API REST");
        break;
    case "mobile":
        console.log("Cursos: Flutter, React Native, Kotlin");
        break;
    default:
        console.log("Área inválida.");
}
ATLETA


let idade = prompt("Digite a idade do atleta:")
idade = Number(idade)


switch (true){
    case (idade >= 0 && idade <= 12):
        console.log("Nível de habilidade: Iniciante");
        break;
       
    case (idade >= 13 && idade <= 17):
        console.log("Nível de habilidade: Júnior");
        break;
       
    case (idade >= 18 && idade <= 35):
        console.log("Nível de habilidade: Pleno");
        break;
       
    case (idade >= 36 && idade <= 50):
        console.log("Nível de habilidade: Sênior");
        break;
       
    case (idade > 50):
        console.log("Nível de habilidade: Master");
        break;
    default:
        console.log("Idade inválida.");
}


MATEMATICA
console.log("Pitagoras")
console.log("Geometria")
console.log("Divisão")
let mat = prompt("Selecione um tema matemático e descubra o nível de dificuldade: ")


switch (mat){
    case "Pitagoras":
        console.log("Médio");
        break;
         
         case "Geometria":
             console.log("Dificil");
             break;
             
             case "Divisão":
                 console.log("Fácil");
                 break;
                 
                 default:
                 console.log("Opção inválida");     
}

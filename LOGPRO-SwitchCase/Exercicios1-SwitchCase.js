SWITCH CASE - DESAFIOS:

Idioma

let idioma = prompt("Escolha um desses idioma: \n 1- Portugu�s \n 2- Ingl�s \n 3- Espanhol \n 4- Franc�s \n 5- Japon�s \n\n")

switch(idioma){
case "Portugu�s":
console.log("\nOl�, bom dia!");
break;

case "Ingl�s":
console.log("\nHello, good morning!");
break;
    
case "Espanhol":
console.log("\nHola, buenos dias!");
break;

case "Franc�s":
console.log("\nBonjour!")
break;

case "Japon�s":
console.log("\n????!")
break;

default:
console.log("\nN�o identificamos esse idioma!")
}

Dia da semana

let dia = Number(prompt("Escolha um n�mero de 1 a 7:\n\n"))

switch(dia){
case 1:
console.log("\nDomingo");
break;

case 2:
console.log("\nSegunda");
break;

case 3:
console.log("\nTer�a");
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
console.log("\nS�bado");
break;
}

Transporte

let num = Number(prompt("Que tipo de meio de transporte voc� utiliza,de acordo com a numera��o � seguir: \n1- Carro \n2- Bicicleta\n3-�nibus \n4- Moto \n5- Helic�ptero \n\n"))

switch(num){
case 1:
console.log("\nCarro");
break;

case 2:
console.log("\nBicicleta");
break;

case 3:
console.log("\n�nibus");
break;

case 4:
console.log("\nMoto");
break;

case 5:
console.log("\nHelic�ptero");
break;
}


N�vel de urg�ncia

let num = Number(prompt("Qual o seu n�vel de urg�ncia: \n 1- Baixo \n 2- M�dio \n 3- Alto \n \n"))

switch(num){
case 1:
console.log("\nN�vel de urg�ncia baixo.");
break;

case 2:
console.log("\nN�vel de urg�ncia m�dio.");
break;

case 3:
console.log("\nN�vel de urg�ncia alto.");
break;
}


LUA

console.log("Descubra a fase da lua de acordo com o n�mero respectivo ao m�s:");
console.log("1 - Janeiro");
console.log("2 - Fevereiro");
console.log("3 - Mar�o");
console.log("4 - Abril");
console.log("5 - Maio");
console.log("6 - Junho");
console.log("7 - Julho");
console.log("8 - Agosto");
console.log("9 - Setembro");
console.log("10 - Outubro");
console.log("11 - Novembro");
console.log("12 - Dezembro");

let mes = prompt("\nDigite o n�mero do m�s (1 a 12): ");

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
        console.log("\nM�s inv�lido. Digite um n�mero entre 1 e 12.");


TIPO DE VE�CULO

let carro = Number(prompt("Qual o tipo do seu ve�culo: \n 1- Compacto \n 2- SUV \n 3- Caminh�o \n 4- Picape \n 5- Dobl� \n 6- Sed� \n 7- Furg�o \n 8- Minivan \n 9- Esportivo \n 10- Caminhonete\n\n"))

switch (carro){
case 1:
console.log("\nSeu ve�culo � compacto, que legal!");
break;

case 2:
console.log("\nSeu ve�culo � um SUV, que legal!");
break;

case 3:
console.log("\nSeu ve�culo � um Caminh�o, que legal!");
break;

case 4:
console.log("\nSeu ve�culo � uma Picape, que legal!");
break;

case 5:
console.log("\nSeu ve�culo � Dobl�, que legal!");
break;

case 6:
console.log("\nSeu ve�culo � um Sed�, que legal!");
break;

case 7:
console.log("\nSeu ve�culo � um Furg�o, que legal!");
break;

case 8:
console.log("\nSeu ve�culo � uma Minivan, que legal!");
break;

case 9:
console.log("\nSeu ve�culo � um Esportivo, que legal!");
break;

case 10:
console.log("\nSeu ve�culo � Caminhonete, que legal!");
break;

default:
console.log("\nN�o encontramos a categoria do seu ve�culo.")
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
    console.log("O valor excedeu as horas e ser� cobrado R$40,00 do valor da di�ria")
}





N�VEL JOGO

let escolha = Number(prompt("Qual o n�vel que voc� deseja escolher:\n 1-N�VEL F�CIL\n 2-N�VEL M�DIO\n 3-N�VEL DIF�CIL\n\n"))

switch (escolha){
case 1:
console.log("Voc� escolheu o n�vel F�cil.")
break;

case 2:
console.log("Voc� escolheu o n�vel M�dio.")
break;

case 3: 
console.log("Voc� escolheu o  n�vel Dif�cil.")
break;

default:
console.log("N�o temos esse n�vel, porque n�o tenta escolher os n�veis listados acima.")
}


ACADEMIA


let academia = prompt("Ol�, seja muito bem-vindo a nossa academia.\n\nN�s oferecemos diferentes tipos de servi�os. Venha conhecer:\nAula de yoga \nMuscula��o \nPersonal trainer \nZumba \nOutro\n\nQual desses voc� tem interesse? ")
switch (academia){
    
case "Aula de yoga":
console.log("\n�tima escolha, vamos te fornecer mais informa��es sobre nosso programa de yoga.")
break;

case "Muscula��o":
console.log("\n�tima escolha, vamos te fornecer mais informa��es sobre nosso programa de muscula��o.")
break;

case "Personal trainer":
console.log("\n�tima escolha, vamos te fornecer mais informa��es sobre nosso programa de personal trainer.")
break;

case "Zumba":
console.log("\n�tima escolha, vamos te fornecer mais informa��es sobre nosso programa de zumba.")
break;

case "Outro":
console.log("\nPara saber mais sobre outros servi�os oferecidos por n�s fa�a login ou crie sua conta.")
break;
}


INGRESSO

let ingresso = Number(prompt("Bem-vindo ao nosso sistema de ingresso.\nCategorias dispon�veis:\n\n 1- ESTUDANTE (R$ 15,00) \n 2 - MEIA-ENTRADA (R$ 10,00) \n 3 - ENTRADA (R$ 20,00)\n"))

switch (ingresso){
case 1:
console.log("Voc� escolheu o ingresso de estudante que custa R$ 15,00. Qual seria a forma de pagamento?")
break;

case 2:
console.log("Voc� escolheu o ingresso de meia entrada que custa R$ 10.00. Qual seria a forma de pagamento?")
break;

case 3:
console.log("Voc� escolheu o ingresso de entrada que custa R$ 20.00. Qual seria a forma de pagamento?")
}



NIVEL DE DIFICULDADE
let idade = prompt("Digite sua idade: ")
idade = Number(idade)


switch (true){
    case (idade >= 0 && idade <= 12):
        console.log("N�vel de dificuldade: Iniciante");
        break;
       
    case (idade >= 13 && idade <= 17):
        console.log("N�vel de dificuldade: Leve");
        break;
       
    case (idade >= 18 && idade <= 49):
        console.log("N�vel de dificuldade: Moderado");
        break;
       
    case (idade >= 50):
        console.log("N�vel de dificuldade: Adaptado");
        break;
    default:
        console.log("Idade inv�lida.");
}


MUSICA
let genero = prompt("Digite um g�nero musical (rock, jazz, samba, m�sica cl�ssica, pop): ")
switch (genero){
    case "rock":
        console.log("Instrumento t�pico: Guitarra el�trica");
        break;
    case "jazz":
        console.log("Instrumento t�pico: Saxofone");
        break;
    case "samba":
        console.log("Instrumento t�pico: Pandeiro");
        break;
    case "m�sica cl�ssica":
        console.log("Instrumento t�pico: Violino");
        break;
    case "pop":
        console.log("Instrumento t�pico: Teclado");
        break;
    default:
        console.log("G�nero musical n�o reconhecido. Tente outro.");
}


FRONT-END


let area = prompt("�rea (front-end, back-end, mobile): ")
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
        console.log("�rea inv�lida.");
}
ATLETA


let idade = prompt("Digite a idade do atleta:")
idade = Number(idade)


switch (true){
    case (idade >= 0 && idade <= 12):
        console.log("N�vel de habilidade: Iniciante");
        break;
       
    case (idade >= 13 && idade <= 17):
        console.log("N�vel de habilidade: J�nior");
        break;
       
    case (idade >= 18 && idade <= 35):
        console.log("N�vel de habilidade: Pleno");
        break;
       
    case (idade >= 36 && idade <= 50):
        console.log("N�vel de habilidade: S�nior");
        break;
       
    case (idade > 50):
        console.log("N�vel de habilidade: Master");
        break;
    default:
        console.log("Idade inv�lida.");
}


MATEMATICA
console.log("Pitagoras")
console.log("Geometria")
console.log("Divis�o")
let mat = prompt("Selecione um tema matem�tico e descubra o n�vel de dificuldade: ")


switch (mat){
    case "Pitagoras":
        console.log("M�dio");
        break;
         
         case "Geometria":
             console.log("Dificil");
             break;
             
             case "Divis�o":
                 console.log("F�cil");
                 break;
                 
                 default:
                 console.log("Op��o inv�lida");     
}

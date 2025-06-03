let escolha = Number(prompt("Escolha um dos terminais de comando abaixo: \n\n1-Terminal Linux \n2- Prompt no Windows (CMD)\n\n"))
switch (escolha){
case 1:
console.log("O Terminal Linux � uma interface de linha de comando que permite interagir com o sistema operacional atrav�s de comandos de texto, em vez de uma interface gr�fica. � uma ferramenta poderosa para executar tarefas, gerenciar arquivos, configurar o sistema e mais, sem a necessidade de usar o mouse")

let = comando =prompt("\nVamos conhecer os comandos b�sicos do Linux:\n\nLs \nClear \nCD \nCD.. \nMkdir \nEcho \nCat \nMv \nMv+(nome antigo e nome atual)\n\nDigite qual voc� gostaria de conhecer:")

if(comando == "Ls"){
console.log("\nEste comando lista o que est� dentro do diret�rio atual.\nUse-o dessa forma 'ls'.\n")
break;
}
else if(comando == "Clear"){
console.log("\nEste comando limpa a tela sem excluir o que j� foi feito.\nUse-o dessa forma 'clear'.\n")
break;
}
else if(comando == "CD"){
console.log("\nEste comando entra no diret�rio ou arquivo.\nExemplo de como usa-lo 'cd Documents'.\n")
break;
}
else if(comando == "CD.."){
console.log("\nEste comando volta ao diretorio anterior.\nUse-o dessa forma 'cd ..'.\n")
break;
}
else if(comando == "Mkdir"){
console.log("\nEste comando cria um diret�rio.\nExemplo de como usa-lo 'mkdir Projetos ou mkdir Pasta1 Pasta2 Pasta3'.\n")
break;
}
else if(comando == "Echo"){
console.log("\nEste comando cria um arquivo.\nExemplo de como usa-lo 'echo ''Ol�, Linux!'' ou echo ''Conte�do do arquivo'' > arquivo.txt''.\n")
break;
}
else if(comando == "Cat"){
console.log("\nEste comando exibe o tem que dentro do arquivo\n.Exemplo de como usa-lo 'cat arquivo.txt ou cat arquivo1.txt arquivo2.txt > arquivo_completo.txt'.\n")
break;
}
else if(comando == "Mv"){
console.log("\nEste comando move o arquivo.\nExemplo de como usa-lo 'mv arquivo.txt /caminho/da/pasta/'.\n")
break;
}
else if(comando == "Mv+(nome antigo e nome atual)"){
console.log("\nEste comando renomeia o arquivo ou diret�rio.\nExemplo de como usa-lo 'mv nome_antigo.txt nome_novo.txt'.\n")
break;
}
case 2:
console.log("\nO prompt cmd refere-se � interface de linha de comando do Windows, um programa que permite ao utilizador executar comandos e tarefas atrav�s de texto. � uma ferramenta essencial para tarefas administrativas e de solu��o de problemas,sendo mais potente do que a interface gr�fica.")

let comando1 = prompt("\nVamos conhecer os comandos b�sicos do Prompt cmd:\n\nDir \nCd \nMkdir \nType \nCopy \nMove \nRmdir \nEcho \nCls \nRen\n\nDigite qual voc� gostaria de conhecer:")
switch (comando1){
case "Dir":
console.log("\nEste comando lista arquivos e pastas no diret�rio atual.\nUse-o dessa forma 'dir'.\n")
break;

case "Cd":
console.log("\nEste comando muda de diret�rio.\nExemplo de como usa-lo 'cd Documentos'.\n")
break;

case "Mkdir":
console.log("\nEste comando cria uma pasta ou diret�rio.\nExemplo de como usa-lo 'mkdir ''Meus Arquivo'' ou mkdir Projetos'.\n")
break;

case "Type":
console.log("\nEste comando exibe o conte�do de um arquivo.\nExemplo de como usa-lo 'type arquivo.txt'.\n")
break;

case "Copy":
console.log("\nEste comando copia arquivos.\nExemplo de como usa-lo 'copy original.txt copia.txt'.\n")
break;

case "Move":
console.log("\nEste comando move/renomeia arquivos.\nExemplo de como usa-lo 'move arquivo.txt C:\destino\ ou move nome_antigo.txt nome_novo.txt'.\n")
break;

case "Rmdir":
console.log("\nEste comando remove uma pasta vazia.\nExemplo de como usa-lo 'rmdir PastaVazia'.\n")
break;

case "Echo":
console.log("\nEste comando exibe mensagens ou cria arquivos.\nExemplo de como usa-lo 'echo ''Ol�, CMD!'' > saudacao.txt ou echo ''Novo texto'' >> arquivo.txt'.\n")
break;

case "Cls":
console.log("\nEste comando limpa a tela do CMD.\nUse-o dessa forma 'cls'.\n")
break;

case "Ren":
console.log("\nEste comando renomeia arquivos.\nExemplo de como usa-lo 'ren antigo.txt novo.txt ou ren PastaAntiga PastaNova'.\n")
break;
}
}


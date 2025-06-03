let escolha = Number(prompt("Escolha um dos terminais de comando abaixo: \n\n1-Terminal Linux \n2- Prompt no Windows (CMD)\n\n"))
switch (escolha){
case 1:
console.log("O Terminal Linux é uma interface de linha de comando que permite interagir com o sistema operacional através de comandos de texto, em vez de uma interface gráfica. É uma ferramenta poderosa para executar tarefas, gerenciar arquivos, configurar o sistema e mais, sem a necessidade de usar o mouse")

let = comando =prompt("\nVamos conhecer os comandos básicos do Linux:\n\nLs \nClear \nCD \nCD.. \nMkdir \nEcho \nCat \nMv \nMv+(nome antigo e nome atual)\n\nDigite qual você gostaria de conhecer:")

if(comando == "Ls"){
console.log("\nEste comando lista o que está dentro do diretório atual.\nUse-o dessa forma 'ls'.\n")
break;
}
else if(comando == "Clear"){
console.log("\nEste comando limpa a tela sem excluir o que já foi feito.\nUse-o dessa forma 'clear'.\n")
break;
}
else if(comando == "CD"){
console.log("\nEste comando entra no diretório ou arquivo.\nExemplo de como usa-lo 'cd Documents'.\n")
break;
}
else if(comando == "CD.."){
console.log("\nEste comando volta ao diretorio anterior.\nUse-o dessa forma 'cd ..'.\n")
break;
}
else if(comando == "Mkdir"){
console.log("\nEste comando cria um diretório.\nExemplo de como usa-lo 'mkdir Projetos ou mkdir Pasta1 Pasta2 Pasta3'.\n")
break;
}
else if(comando == "Echo"){
console.log("\nEste comando cria um arquivo.\nExemplo de como usa-lo 'echo ''Olá, Linux!'' ou echo ''Conteúdo do arquivo'' > arquivo.txt''.\n")
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
console.log("\nEste comando renomeia o arquivo ou diretório.\nExemplo de como usa-lo 'mv nome_antigo.txt nome_novo.txt'.\n")
break;
}
case 2:
console.log("\nO prompt cmd refere-se à interface de linha de comando do Windows, um programa que permite ao utilizador executar comandos e tarefas através de texto. É uma ferramenta essencial para tarefas administrativas e de solução de problemas,sendo mais potente do que a interface gráfica.")

let comando1 = prompt("\nVamos conhecer os comandos básicos do Prompt cmd:\n\nDir \nCd \nMkdir \nType \nCopy \nMove \nRmdir \nEcho \nCls \nRen\n\nDigite qual você gostaria de conhecer:")
switch (comando1){
case "Dir":
console.log("\nEste comando lista arquivos e pastas no diretório atual.\nUse-o dessa forma 'dir'.\n")
break;

case "Cd":
console.log("\nEste comando muda de diretório.\nExemplo de como usa-lo 'cd Documentos'.\n")
break;

case "Mkdir":
console.log("\nEste comando cria uma pasta ou diretório.\nExemplo de como usa-lo 'mkdir ''Meus Arquivo'' ou mkdir Projetos'.\n")
break;

case "Type":
console.log("\nEste comando exibe o conteúdo de um arquivo.\nExemplo de como usa-lo 'type arquivo.txt'.\n")
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
console.log("\nEste comando exibe mensagens ou cria arquivos.\nExemplo de como usa-lo 'echo ''Olá, CMD!'' > saudacao.txt ou echo ''Novo texto'' >> arquivo.txt'.\n")
break;

case "Cls":
console.log("\nEste comando limpa a tela do CMD.\nUse-o dessa forma 'cls'.\n")
break;

case "Ren":
console.log("\nEste comando renomeia arquivos.\nExemplo de como usa-lo 'ren antigo.txt novo.txt ou ren PastaAntiga PastaNova'.\n")
break;
}
}


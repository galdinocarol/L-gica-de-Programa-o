PRIMEIRO
// Declara��o de vari�veis
let categoria; // Vari�vel para armazenar a categoria et�ria
let idade = 27; // Vari�vel que armazena a idade (pode ser alterada)
const nome = &quot;Fernanda&quot;; // Constante com o nome (n�o pode ser alterado)

// Exibe o nome no console
console.log(&quot;Nome:&quot; + nome); // Mostra &quot;Nome: Fernanda&quot;

// Bloco de condicionais para determinar a categoria et�ria
if (idade &gt;= 60) {
// Se idade for 60 ou mais
categoria = &quot;idosa&quot;;
}
else if (idade &gt; 18 &amp;&amp; idade &lt; 60) {
// Se idade entre 19 e 59 anos
categoria = &quot;adulta&quot;;
}
else if (idade &gt;= 12 &amp;&amp; idade &lt;= 18) {
// Se idade entre 12 e 18 anos
categoria = &quot;adolescente&quot;;
}
else if (idade &lt; 12) {
// Se idade menor que 12 anos
categoria = &quot;crian�a&quot;;
}

// Exibe os resultados finais
console.log(&quot;Idade Final: &quot; + idade); // Mostra a idade informada
console.log(&quot;Categoria:&quot; + categoria); // Mostra a categoria determinada

SEGUNDO

// Define a idade para verifica��o (18 neste caso)
idade = 18;

// Verifica as condi��es para vota��o
if (idade &gt;= 16 &amp;&amp; idade &lt; 18) {
// Se a pessoa tem entre 16 e 17 anos
console.log(&quot;Voto facultativo.&quot;); // Pode votar se quiser
}
else if (idade &gt;= 18) {
// Se tem 18 anos ou mais (ATEN��O: esta condi��o captura TODOS acima de 18, inclusive
idosos!)
console.log(&quot;Voto obrigat�rio.&quot;); // Deve votar obrigatoriamente
}
else if (idade &gt;= 70) {
// Se tem 70 anos ou mais (NUNCA ser� executado por causa da condi��o anterior!)
console.log(&quot;Voto facultativo.&quot;); // Problema: nunca alcan�ar� este c�digo
}
else {
// Para todos os outros casos (menores de 16 anos)
console.log(&quot;N�o vota.&quot;) // N�o pode votar
}

TERCEIRO

// Define a vari�vel &#39;numero&#39; com valor 0 (pode ser alterado para testar outros casos)
let numero = 0;

// Estrutura condicional para verificar o valor do n�mero

if (numero &gt; 0) {
// Se o n�mero for maior que 0 (positivo)
console.log(&quot;Positive&quot;); // Imprime &quot;Positive&quot;
}
else if (numero &lt; 0) {
// Se o n�mero for menor que 0 (negativo)
console.log(&quot;Negative&quot;); // Imprime &quot;Negative&quot;
}
else {
// Se nenhuma das condi��es acima for verdadeira (ou seja, n�mero igual a 0)
console.log(&quot;Zero&quot;); // Imprime &quot;Zero&quot;
}

QUARTO

// Define o tipo de combust�vel (pode ser alterado para testar diferentes casos)
let combustivel = &quot;Diesel&quot;;

// Estrutura condicional para verificar o tipo de combust�vel
if (combustivel == &quot;Gasolina&quot;) {
// Se o combust�vel for Gasolina
console.log(&quot;Voc� escolheu Gasolina&quot;); // Observe o acerto no &quot;Voc�&quot; (tinha um acento
errado no original)
}
else if (combustivel == &quot;�lcool&quot;) {
// Se o combust�vel for �lcool
console.log(&quot;Voc� escolheu �lcool&quot;); // Corrigi de &quot;�lcol&quot; para &quot;�lcool&quot; (ortografia padr�o)
}
else if (combustivel == &quot;Diesel&quot;) {
// Se o combust�vel for Diesel
console.log(&quot;Voc� escolheu Diesel&quot;);

}
else {
// Para qualquer outro valor que n�o seja Gasolina, �lcool ou Diesel
console.log(&quot;Op��o inv�lida&quot;); // Mensagem para valores n�o reconhecidos
}

QUINTO

// Define a velocidade do ve�culo (em km/h) - valor pode ser alterado para testes
let velocidade = 30;

// Verifica��o dos n�veis de velocidade com condicionais
if (velocidade &lt;= 60) {
// Se velocidade for menor ou igual a 60 km/h
console.log(&quot;Dentro do limite&quot;); // Velocidade considerada segura
}
else if (velocidade &lt;= 80) {
// Se velocidade entre 61 e 80 km/h (executa apenas se a primeira condi��o for falsa)
console.log(&quot;Aten��o&quot;); // Aproximando do limite de velocidade
}
else {
// Se nenhuma das anteriores for verdadeira (velocidade acima de 80 km/h)
console.log(&quot;Multado&quot;); // Velocidade acima do permitido - multa aplicada
}

PRIMEIRO
// Declaração de variáveis
let categoria; // Variável para armazenar a categoria etária
let idade = 27; // Variável que armazena a idade (pode ser alterada)
const nome = &quot;Fernanda&quot;; // Constante com o nome (não pode ser alterado)

// Exibe o nome no console
console.log(&quot;Nome:&quot; + nome); // Mostra &quot;Nome: Fernanda&quot;

// Bloco de condicionais para determinar a categoria etária
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
categoria = &quot;criança&quot;;
}

// Exibe os resultados finais
console.log(&quot;Idade Final: &quot; + idade); // Mostra a idade informada
console.log(&quot;Categoria:&quot; + categoria); // Mostra a categoria determinada

SEGUNDO

// Define a idade para verificação (18 neste caso)
idade = 18;

// Verifica as condições para votação
if (idade &gt;= 16 &amp;&amp; idade &lt; 18) {
// Se a pessoa tem entre 16 e 17 anos
console.log(&quot;Voto facultativo.&quot;); // Pode votar se quiser
}
else if (idade &gt;= 18) {
// Se tem 18 anos ou mais (ATENÇÃO: esta condição captura TODOS acima de 18, inclusive
idosos!)
console.log(&quot;Voto obrigatório.&quot;); // Deve votar obrigatoriamente
}
else if (idade &gt;= 70) {
// Se tem 70 anos ou mais (NUNCA será executado por causa da condição anterior!)
console.log(&quot;Voto facultativo.&quot;); // Problema: nunca alcançará este código
}
else {
// Para todos os outros casos (menores de 16 anos)
console.log(&quot;Não vota.&quot;) // Não pode votar
}

TERCEIRO

// Define a variável &#39;numero&#39; com valor 0 (pode ser alterado para testar outros casos)
let numero = 0;

// Estrutura condicional para verificar o valor do número

if (numero &gt; 0) {
// Se o número for maior que 0 (positivo)
console.log(&quot;Positive&quot;); // Imprime &quot;Positive&quot;
}
else if (numero &lt; 0) {
// Se o número for menor que 0 (negativo)
console.log(&quot;Negative&quot;); // Imprime &quot;Negative&quot;
}
else {
// Se nenhuma das condições acima for verdadeira (ou seja, número igual a 0)
console.log(&quot;Zero&quot;); // Imprime &quot;Zero&quot;
}

QUARTO

// Define o tipo de combustível (pode ser alterado para testar diferentes casos)
let combustivel = &quot;Diesel&quot;;

// Estrutura condicional para verificar o tipo de combustível
if (combustivel == &quot;Gasolina&quot;) {
// Se o combustível for Gasolina
console.log(&quot;Você escolheu Gasolina&quot;); // Observe o acerto no &quot;Você&quot; (tinha um acento
errado no original)
}
else if (combustivel == &quot;Álcool&quot;) {
// Se o combustível for Álcool
console.log(&quot;Você escolheu Álcool&quot;); // Corrigi de &quot;Álcol&quot; para &quot;Álcool&quot; (ortografia padrão)
}
else if (combustivel == &quot;Diesel&quot;) {
// Se o combustível for Diesel
console.log(&quot;Você escolheu Diesel&quot;);

}
else {
// Para qualquer outro valor que não seja Gasolina, Álcool ou Diesel
console.log(&quot;Opção inválida&quot;); // Mensagem para valores não reconhecidos
}

QUINTO

// Define a velocidade do veículo (em km/h) - valor pode ser alterado para testes
let velocidade = 30;

// Verificação dos níveis de velocidade com condicionais
if (velocidade &lt;= 60) {
// Se velocidade for menor ou igual a 60 km/h
console.log(&quot;Dentro do limite&quot;); // Velocidade considerada segura
}
else if (velocidade &lt;= 80) {
// Se velocidade entre 61 e 80 km/h (executa apenas se a primeira condição for falsa)
console.log(&quot;Atenção&quot;); // Aproximando do limite de velocidade
}
else {
// Se nenhuma das anteriores for verdadeira (velocidade acima de 80 km/h)
console.log(&quot;Multado&quot;); // Velocidade acima do permitido - multa aplicada
}

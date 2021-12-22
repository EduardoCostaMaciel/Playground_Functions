# Boas vindas ao repositório do Projeto Playground Functions!

Para instalação do projeto, você deverá seguir as instruções a seguir. Fique atento a cada passo, e se tiver qualquer dúvida, envie por <a href="mailto:costaeduardomaciel@gmail.com"><img alt="Email" src="https://img.shields.io/badge/Email-costaeduardomaciel@gmail.com-blue?style=flat-square&logo=gmail"></a>
<br>
#VQV 🚀

Aqui você vai encontrar algumas funções de objetivos específicos, como por, exemplo;

 - Que cálcula a área de um triângulo.
 - Que cálcula a quantidade de pontos no futebol.
 - Que cálcula a repetição do maior número.
 - Que codifiqua e decodifiqua um frase.
 - Que retorna um número de telefone, respeitando parênteses, traços e espaços.

# Habilidades Desenvolvidas

- Escrever códigos em JavaScript que usam variáveis e tipos primitivos;
- Utilizar conceitos da linguagem como a tipagem dinâmica e operadores lógicos/aritméticos/de atribuição no seu código;
- Criar códigos que usam estruturas condicionais.
- Manipular arrays (listas);
- Quebrar grandes problemas em pequenos;
- Utilizar a lógica de programação na resolução de problemas.
- Manipular objetos;
- Utilizar funções para organizar e estruturar o código;

# Sumário

- [Habilidades](#habilidades)
- [Entregáveis](#entregáveis)
  - [O que deverá ser desenvolvido](#o-que-deverá-ser-desenvolvido)
  - [Data de Entrega](#data-de-entrega)
- [Instruções para entregar seu projeto](#instruções-para-entregar-seu-projeto)
  - [Antes de começar a desenvolver](#antes-de-começar-a-desenvolver)
  - [Durante o desenvolvimento](#durante-o-desenvolvimento)
- [Como desenvolver](#como-desenvolver)
  - [Linter](#linter)
- [Requisitos do projeto](#requisitos-do-projeto)

    `Requisitos obrigatórios:`
    - [1 - Função compareTrue](#1---função-compareTrue)
    - [2 - Crie uma função que calcule a área do triângulo](#2---crie-uma-função-que-calcule-a-área-do-triângulo)
    - [3 - Crie uma função que divida a frase](#3---crie-uma-função-que-divida-a-frase)
    - [4 - Crie uma função que use concatenação de strings](#4---crie-uma-função-que-use-concatenação-de-strings)
    - [5 - Crie uma função que calcule a quantidade de pontos no futebol](#5---crie-uma-função-que-calcule-a-quantidade-de-pontos-no-futebol)
    - [6 - Crie uma função que calcule a repetição do maior número](#6---crie-uma-função-que-calcule-a-repetição-do-maior-número)
    - [7 - Crie uma função de Caça ao rato](#7---crie-uma-função--de-caça-ao-rato)
    - [8 - Crie uma função FizzBuzz](#8---crie-uma-função-fizzbuzz)
    - [9 - Crie uma função que Codifique e Decodifique](#9---crie-uma-função-que-codifique-e-decodifique)
    - [10 - Crie uma função de Lista de tecnologias](#10---crie-uma-função-de-lista-de-tecnologias)

    `Requisitos bônus:`
    - [11 - Crie uma função de Número de telefone](#11---crie-uma-função-de-número-de-telefone)
    - [12 - Crie uma função de Condição de existência de um triângulo](#12---crie-uma-função-de-condição-de-existência-de-um-triângulo)
    - [13 - Crie uma função de Bem vindo ao Bar da Trybe!](#13---crie-uma-função-de-bem-vindo-ao-bar-da-trybe)
- [Depois de terminar o desenvolvimento](#depois-de-terminar-o-desenvolvimento)
- [Revisando um pull request](#revisando-um-pull-request)
- [Avisos Finais](#avisos-finais)


## ⚠️ É importante que os arquivos não tenham o nome alterado! ⚠️

<!-- Para entregar o seu projeto você deverá criar um _Pull Request_ neste repositório. -->

Todas as funções estão declaradas nos arquivos `challenges.js` e `challenges2.js`. Contudo **Não altere o nome das funções que já existem**.

# Instruções para instalção do projeto

1. Clone o repositório
  * `git clone git@github.com:EduardoCostaMaciel/Playground_Functions.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd Playground_Functions`

2. Instale as dependências e inicialize o projeto
  * Instale as dependências:
    * npm install

3. Crie uma branch a partir da branch `master`
  * Verifique que você está na branch `master`
    * Exemplo: `git branch`
  * Se não estiver, mude para a branch `master`
    * Exemplo: `git checkout master`
  * Agora, crie uma branch onde você vai guardar os `commits` do seu projeto
    * Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-projeto`
    * Exemplo: `git checkout -b joaozinho-project-playground-functions`

4. Adicione as mudanças ao _stage_ do Git e faça um `commit`
  * Verifique que as mudanças ainda não estão no _stage_
    * Exemplo: `git status` (devem aparecer listados os novos arquivos em vermelho)
  * Adicione o novo arquivo ao _stage_ do Git
      * Exemplo:
        * `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
        * `git status` (devem aparecer listados os arquivos em verde)
  * Faça o `commit` inicial
      * Exemplo:
        * `git commit -m 'iniciando o projeto. VAMOS COM TUDO :rocket:'` (fazendo o primeiro commit)
        * `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

5. Adicione a sua branch com o novo `commit` ao repositório remoto
  * Usando o exemplo anterior: `git push -u origin joaozinho-project-playground-functions`

6. Crie um novo `Pull Request` _(PR)_
  * Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/EduardoCostaMaciel/Playground_Functions/pulls)
  * Clique no botão verde _"New pull request"_
  * Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
  * Clique no botão verde _"Create pull request"_
  * Adicione uma descrição para o _Pull Request_, um título que o identifique, e clique no botão verde _"Create pull request"_. Crie da seguinte forma: `[JOAOZINHO] Projeto Playground Functions`
  * **Não se preocupe em preencher mais nada por enquanto!**
  * Volte até a [página de _Pull Requests_ do repositório](https://github.com/EduardoCostaMaciel/Playground_Functions/pulls) e confira que o seu _Pull Request_ está criado
---
### 👀 Observações importantes:

* Para verificar se cada função foi criada corretamente você pode instalar a extensão `code runner` no _VSCode_.

---

### 1 - Função `compareTrue(valueBooleanOne, valueBooleanTwo)`.

Recebe dois valores:

- Retorna `true` se ambos os valores são verdadeiros;
- Retorna `false` se um ou ambos os parâmetros forem falsos.

### 2 - Função `calcArea(base, height)`.
`"cálcula a área de um triângulo"`. 

Recabe dois valores:
- Base (chamado `base`) de um triângulo.
- Altura (chamado `height`) de um triângulo.
- Retorna o cálculo da sua área.

### 3 - Função `splitSentence(string)`.
`"divide a frase"`.

Recebe uma string:
- Retorna uma array de strings separadas por cada espaço na string original.

Exemplo:
- Retorna `['go', 'Trybe']` quando o parâmentro na função splitSentence seja `"go Trybe"`.

### 4 - Função `concatName(arrayStrings)`.
`"concatenação de strings"`.

Recebe um array de strings:
- Retorna uma string com o formato `'ÚLTIMO ITEM, PRIMEIRO ITEM'`, independente do tamanho da array.

Exemplo:
- Retorna a string `'Paolillo, Lucas'` quando o parâmetro passado na funcão concatName seja `['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']`

### 5 - Função `footballPoints(wins, ties)`.
`"calcule a quantidade de pontos no futebol"`.

Recebe o número de vitórias (esse parâmetro se chamar `wins`) e o número de empates (esse parâmetro se chamar `ties`)
- Retorna a quantidade de pontos que o time marcou em um campeonato.

Considerando que cada `vitória vale 3` pontos e cada `empate vale 1` ponto.

Exemplo:
- Retorna `50` pontos quando o time tenha `14 vitórias` e `8 empates`

### 6 - Função `highestCount(arrayRip)`.
`"calcule a repetição do maior número"`.

Receber uma array de números:
- Retorna a quantidade de vezes que o maior deles se repete.

Exemplo:
- Retorna `2` quando o parâmetro passado na funcão highestCount seja `[9, 1, 2, 3, 9, 5, 7]`

### 7 - Função `catAndMouse(mouse, cat1, cat2)`.
`"Caça ao rato"`.

Recebe a posição de `mouse`, `cat1` e `cat2`(**nessa ordem**).
- Calcula as distâncias entre o rato e os gatos
- Retorna qual dos felinos irá alcançar o rato primeiro (sendo aquele que estará mais perto).

Exemplo:
Caso o gato `cat2` esteja a 2 unidades de distância do rato, e `cat1` esteja a 3 unidades,
- Retorna `"cat2"`.

Caso os gatos estejam na mesma distância do rato, 
- Retorna a string `"os gatos trombam e o rato foge"`.

### 8 - Função `FizzBuzz(arrayNumbers)`.

Recebe um array de números:
- Para cada número do Array que seja divisível apenas por 3, apresente uma string `"fizz"`;
- Para cada número do Array que seja divisível apenas por 5, apresente uma string `"buzz"`;
- Caso o número seja divisível por 3 e 5, retorne a string `"fizzBuzz"`;
- Caso o número não possa ser dividido por 3 nem por 5, retorne a string `"bug!"`;

Exemplo:
- Retorna um array de strings `['bug!', 'fizzBuzz', 'bug!', 'fizz', 'fizzBuzz']` quando é passado os parâmetros `[2, 15, 7, 9, 45]`

### 9 - Funções `encode(codifique)` e `decode(decodifique)`.

Recebe uma string como parâmetro:

- Função encode(codifique):

Deverá trocar todas as vogais minúsculas por números, de acordo com o formato a seguir
- `a -> 1 \ e -> 2 \ i -> 3 \ o -> 4 \ u -> 5`

Exemplo:
- Retorna `"h3 th2r2!"`, caso o parâmetro seja `"hi there!"`.

- Função decode(decodifique):
Deverá trocar todos os números por vogais minúsculas, de acordo com o formato a seguir
- `1 -> a \ 2 -> e \ 3 -> i \ 4 -> o \ 5 -> u`

Exemplo:
- Retorna `"hi there!"`, caso o parâmetro seja `"h3 th2r2!"`.

### 10 - Função `techList(tech, name)`.

Recebe dois parâmentros:
- Primeiro(tech), um array de nomes de tecnologias
- Segundo(name), uma string nome de uma pessoa.

Para cada tecnologia no array, crie um objeto com a seguinte estrutura:

- `{ tech: "NomeTech", name: name }`

Estes objetos devem ser inseridos em uma nova lista em `ordem crescente` a partir do campo `tech` no objeto.

Exemplo:
- Entrada:
  - Parâmentro(tech) => `["React", "Jest", "HTML", "CSS", "JavaScript"]`.
  - Parâmentro(name) => `"Lucas"`.

- Saída:

  - `[
      { tech: "CSS", name: "Lucas" },
      { tech: "HTML", name: "Lucas" },
      { tech: "JavaScript", name: "Lucas" },
      { tech: "Jest", name: "Lucas" },
      { tech: "React", name: "Lucas" }
    ]`


Caso o array venha vazio sua função deve retornar `'Vazio!'`.

### 11 - Função generatePhoneNumber(arrayNumbers).

Recebe um array com 11 números:
- Retorna um número de telefone, respeitando parênteses, traços e espaços.

Exemplo:
- Caso o parâmetro da função seja => `[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]`;
  - Retorna `(12) 34567-8901`.

- Se o tamanho do array for diferente de 11;
  - Retorna `"Array com tamanho incorreto."`.

- Caso algum dos números do array seja menor que 0, maior que 9 ou se repita 3 vezes ou mais;
  - Retorna a string `"não é possível gerar um número de telefone com esses valores"`.

### 12 - Função `triangleCheck(lineA, lineB, lineC)`
`"Condição de existência de um triângulo"`.

Recebe três parâmetros:
- Retorna se é possível formar um triângulo com os valores apresentados de cada linha

Considerações para existência de um triângulo:

- É necessário que a medida de qualquer um dos lados seja menor que a soma das medidas dos outros dois e maior que o valor absoluto da diferença entre essas medidas.

Exemplo:
- Retorne `false` quando a medida de qualquer um dos lados seja maior que a soma das medidas dos outros dois

- Retorne `false` quando a medida de qualquer um dos lados seja menor que o valor absoluto da diferença entre essas medidas

- Retorne true quando a medida de qualquer um dos lados seja menor que a soma das medidas dos outros dois e maior que o valor absoluto da diferença entre essas medidas

### 13 - Função `hydrate(string)`.

A cada bebida deve-se beber um copo de água para que não se tenha ressaca.

Recebe uma string:
- Retorna a sugestão de quantos copos de água você deve beber.
Exemplos:
- String recebida:
  `"1 cerveja"`
- String retornada:
  `"1 copo de água"`

- String recebida:
  `"1 cachaça, 5 cervejas e 1 copo de vinho"`
- String retornada:
  `"7 copos de água"`

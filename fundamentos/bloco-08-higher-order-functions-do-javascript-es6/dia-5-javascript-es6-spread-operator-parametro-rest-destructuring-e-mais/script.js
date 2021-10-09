// 1) Dado o código abaixo, complete-o de forma que seja impressa a área dos 3 retângulos. O código deve retornar em sequência 2 , 15 e 54.

const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

rectangles.forEach((rectangle) => {
  rectangleArea() // altere a chamada da funcao rectangleArea
  console.log(rectangle[0] * rectangle[1]);
});

rectangles.forEach((rectangle) => {
  rectangleArea() // altere a chamada da funcao rectangleArea
  console.log(rectangle[0] * rectangle[1]);
});

// 2) Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.



// 3) Escreva a função personLikes , que dado um objeto de parâmetro que representa uma pessoa, retorna todos os gostos daquela pessoa, conforme mostrado abaixo:



// 4) Escreva uma função filterPeople que, dada uma lista de pessoas, retorna todas as pessoas australianas que nasceram no século 20:



// 5) Escreva a função swap , que dado um array de 3 elementos, retorna um novo array com o primeiro e terceiro elementos trocados. Detalhe: você precisa fazer essa função gastando 1 linha só:



// 6) Suponha que você esteja lidando com carros e, da forma como o problema lhe foi entregue, cada carro é modelado como um array. Porém, essa modelagem está baixo nível. Cria uma função toObject que, dada uma lista, retorna um objeto representando o carro:



// 7) Escreva uma função shipLength que, dado um objeto representando um navio, retorna o comprimento dele, mostrando também a devida unidade de comprimento:



// 8) Escreva uma função greet que, dado o nome de uma pessoa, retorna uma mensagem de cumprimento:
// Desafio 1
function compareTrue(valueBooleanOne, valueBooleanTwo) {
  if (valueBooleanOne && valueBooleanTwo) return true;
  return false;
}

// Desafio 2 area_do_triângulo
function calcArea(base, height) {
  let area = 0;
  area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let stringDividida = string.split(' ');
  return stringDividida;
}

// Desafio 4
function concatName(arrayStrings) {
  return `${arrayStrings[arrayStrings.length - 1]}, ${arrayStrings[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6 - Crie uma função que calcule a repetição do maior número
function highestCount(arrayRip) {
  let maiorValor = Math.max(...arrayRip);
  let repeticao = 0;
  repeticao = arrayRip.reduce((total, curr) => {
    if (curr === maiorValor) {
      total += 1;
    }
    return total;
  }, 0);
  return repeticao;
}

// Desafio 7 - calcule as distâncias entre o rato e os gatos
function catAndMouse(mouse, cat1, cat2) {
  let gato1 = Math.abs(mouse - cat1);
  let gato2 = Math.abs(mouse - cat2);
  if (gato1 < gato2) {
    return 'cat1';
  }
  if (gato2 < gato1) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8 divisível ou multiplos
function fizzBuzz(returnDeArray) {
  let fizzBuzzArray = [];
  returnDeArray.forEach((element) => {
    if (element % 3 === 0 && element % 5 === 0) {
      fizzBuzzArray.push('fizzBuzz');
    } else if (element % 3 === 0) {
      fizzBuzzArray.push('fizz');
    } else if (element % 5 === 0) {
      fizzBuzzArray.push('buzz');
    } else {
      fizzBuzzArray.push('bug!');
    }
  });
  return fizzBuzzArray;
}

// Desafio 9
function encodeAssistant(codifique) {
  let vowelsCodifique = [...codifique];
  let codeFique = [];
  vowelsCodifique.forEach((element) => {
    if (element === 'a') {
      codeFique.push(1);
    } else if (element === 'e') {
      codeFique.push(2);
    } else if (element === 'i') {
      codeFique.push(3);
    } else {
      codeFique.push(element);
    }
  });
  return codeFique.join('');
}

function encode(codifique) {
  let result = encodeAssistant(codifique);
  let vowelsCodifique = [...result];
  let codeFique = [];
  vowelsCodifique.forEach((element) => {
    if (element === 'o') {
      codeFique.push(4);
    } else if (element === 'u') {
      codeFique.push(5);
    } else {
      codeFique.push(element);
    }
  });
  return codeFique.join('');
}

function decodeAssistant(decodifique) {
  let numberDeCodifique = [...decodifique];
  let decodeFique = [];
  numberDeCodifique.forEach((element) => {
    if (element === '1') {
      decodeFique.push('a');
    } else if (element === '2') {
      decodeFique.push('e');
    } else if (element === '3') {
      decodeFique.push('i');
    } else {
      decodeFique.push(element);
    }
  });
  return decodeFique.join('');
}

function decode(decodifique) {
  let result = decodeAssistant(decodifique);
  let numberDeCodifique = [...result];
  let decodeFique = [];
  numberDeCodifique.forEach((element) => {
    if (element === '4') {
      decodeFique.push('o');
    } else if (element === '5') {
      decodeFique.push('u');
    } else {
      decodeFique.push(element);
    }
  });
  return decodeFique.join('');
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};

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
function encode(codifique) {
  let vogaisCodifique = codifique.split('');
  for (let index in vogaisCodifique) {
    if (vogaisCodifique[index] === 'a') {
      vogaisCodifique[index] = 1;
    }
    if (vogaisCodifique[index] === 'e') {
      vogaisCodifique[index] = 2;
    }
    if (vogaisCodifique[index] === 'i') {
      vogaisCodifique[index] = 3;
    }
    if (vogaisCodifique[index] === 'o') {
      vogaisCodifique[index] = 4;
    }
    if (vogaisCodifique[index] === 'u') {
      vogaisCodifique[index] = 5;
    }
  }
  return vogaisCodifique.join('');
}

function decode(decodifique) {
  let numerosDecofique = decodifique.split('');
  for (let index in numerosDecofique) {
    if (numerosDecofique[index] === '1') {
      numerosDecofique[index] = 'a';
    }
    if (numerosDecofique[index] === '2') {
      numerosDecofique[index] = 'e';
    }
    if (numerosDecofique[index] === '3') {
      numerosDecofique[index] = 'i';
    }
    if (numerosDecofique[index] === '4') {
      numerosDecofique[index] = 'o';
    }
    if (numerosDecofique[index] === '5') {
      numerosDecofique[index] = 'u';
    }
  }
  return numerosDecofique.join('');
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

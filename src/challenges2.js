// Desafio 10
function techList(tech, name) {
  let arrayOrdering = tech.sort();
  let listDeTech = [];
  arrayOrdering.forEach((element) => {
    listDeTech.push({ tech: element, name });
  });
  return listDeTech;
}

// Desafio 11
function validPhone(arrayNumbers) {
  if (arrayNumbers.length !== 11) return 'Array com tamanho incorreto.';
  for (const number of arrayNumbers) {
    if (arrayNumbers.filter((elem) => elem === number).length >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return false;
}

function generatePhoneNumber(arrayNumbers) {
  if (validPhone(arrayNumbers)) return validPhone(arrayNumbers);
  arrayNumbers.forEach((elem) => {
    if (elem < 0 || elem > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  });
  let strPhone = arrayNumbers.join('');
  return `(${strPhone.slice(0, 2)}) ${strPhone.slice(2, 7)}-${strPhone.slice(7, 11)}`;
}

// Desafio 12
function triangleCheckReturnBooleano(lineA, lineB, lineC) {
  if (lineA && lineB && lineC) return true;
  return false;
}

function triangleCheck(lineA, lineB, lineC) {
  let verifyLineA = lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC);
  let verifyLineB = lineB < (lineA + lineC) && lineB > Math.abs(lineA - lineC);
  let verifyLineC = lineC < (lineA + lineB) && lineC > Math.abs(lineA - lineB);

  return triangleCheckReturnBooleano(verifyLineA, verifyLineB, verifyLineC);
}

// Desafio 13
function hydrate(str) {
  let reg = /\d+/g;
  let result = str.match(reg);
  let sumNumbers = 0;
  sumNumbers = result.reduce((total, curr) => {
    total += Number(curr);
    return total;
  }, 0);
  if (sumNumbers > 1) return `${sumNumbers} copos de água`;
  return `${sumNumbers} copo de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};

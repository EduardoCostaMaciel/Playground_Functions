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
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};

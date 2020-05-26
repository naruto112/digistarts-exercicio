const n = [15, 16, 15, 20, 18, 18, 22, 5, 5, 9, 9];

const lerNum = (n = "") => {
  let array = [];
  n.forEach((element) => {
    let consulta = array.indexOf(element);
    if (consulta === -1) {
      array.push(element);
    }
  });

  const k = array.sort((val1, val2) => {
    return val1 - val2;
  });

  return k;
};

console.log(lerNum(n));

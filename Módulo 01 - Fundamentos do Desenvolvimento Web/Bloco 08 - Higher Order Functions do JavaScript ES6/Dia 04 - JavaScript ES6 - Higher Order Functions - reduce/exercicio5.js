const names = ['Aanemarie', 'Adervandes', 'Akifusa', 'Abegildo', 'Adicellia', 'Aladonata', 'Abeladerco', 'Adieidy', 'Alarucha'];

function containsA() {
  const regex = /[aA]/g;
  let result = 0;
  const a = names.map((name) => name.match(regex));
  a.forEach((x) => (result += x.length));
  return result;
}

console.log(containsA());

const anguloA = 60;
const anguloB = 80;
const anguloC = 40;

const ehTriangulo = anguloA + anguloB + anguloC;

if (ehTriangulo === 180) {
  console.log('true');
} else if (ehTriangulo < 180 || ehTriangulo > 180) {
  console.log('false');
} else if (
  typeof anguloA !== Number ||
  typeof anguloB !== Number ||
  typeof anguloC !== Number
) {
  console.log('erro');
}

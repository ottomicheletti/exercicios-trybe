const pecaDoXadrez = 'rei';

switch (true) {
  case pecaDoXadrez === 'peao' || pecaDoXadrez === 'Peao':
    console.log('Peão => uma casa pra frente ou duas diagonais para matar');
    break;
  case pecaDoXadrez === 'torre' || pecaDoXadrez === 'Torre':
    console.log(
      'Torre => sempre em linha reta, quantas casas quiser - pode ser na vertical ou na horizontal, nunca diagonal'
    );
    break;
  case pecaDoXadrez === 'bispo' || pecaDoXadrez === 'Bispo':
    console.log(
      'Bispo => parecido com a torre, mas sempre na diagonal, nunca horizontal ou vertical'
    );
    break;
  case pecaDoXadrez === 'cavalo' || pecaDoXadrez === 'Cavalo':
    console.log(
      'Cavalo => se move em padrões de L, 3 casas para frente e 2 para o lado'
    );
    break;
  case pecaDoXadrez === 'rainha' || pecaDoXadrez === 'Rainha':
    console.log(
      'Rainha => é o coringa do xadrez, se movimenta pra qualquer lado o quanto quiser'
    );
    break;
  case pecaDoXadrez === 'rei' || pecaDoXadrez === 'Rei':
    console.log(
      'Rei => é o que menos se movimenta, pode se mover para qualquer lado, desde que seja 1 casa'
    );
    break;
  default:
    console.log('Peça inválida');
    break;
}

/* Parte I - Game Actions Simulator
Nestes exercícios você irá implementar HOFs que simulam um turno de batalha em um jogo. Você irá criar funções que calculam dano, atualizam status, e ao final, retornam os resultados da rodada.
Para os próximos exercícios copie o código abaixo. */

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: () => {
    if (mage.mana > 15) {
      return Math.floor(mage.intelligence + Math.floor(Math.random() * mage.intelligence + 1));
    } else {
      return 'Não possui mana suficiente';
    }
  },
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: () => {
    return Math.floor(warrior.strength + Math.floor(Math.random() * warrior.strength + 1));
  },
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: () => {
    return Math.floor(Math.random() * (dragon.strength - 14) + 15);
  },
};

const battleMembers = { mage, warrior, dragon };

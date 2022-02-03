const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  test('1 - Verifica se, ao executar getSavedCartItems, o método localStorage.getItem é chamado.', () => {
    getSavedCartItems()
    expect(localStorage.getItem).toHaveBeenCalled();
  });

  test('2 - Verifica se, ao executar getSavedCartItems, o método localStorage.getItem é chamado com o "cartItems" como parâmetro.', () => {
    getSavedCartItems()
    expect(localStorage.getItem).toHaveBeenCalledWith('cartItems');
  });
});

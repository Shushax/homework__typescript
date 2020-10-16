import Cart from '../service/Cart';

let cart = new Cart();
  cart.add({
    id: 10001,
    name: 'Peter Pan',
    price: 500
  });
  cart.add({
    id: 10002,
    name: 'Adventure',
    price: 250
  });

test('sumPrices', () => {
  const received = cart.sumPrices();
  const expected = 750;

  expect(received).toBe(expected);
});

test('sumPricesWithBonus', () => {
  const received = cart.sumPricesWithBonus(20);
  const expected = 600;

  expect(received).toBe(expected);
});

test('delete', () => {
  cart.deleteItem(10001);
  const received = cart._items;
  const expected = [{
    id: 10002,
    name: 'Adventure',
    price: 250
  }];
  expect(received).toEqual(expected);
});

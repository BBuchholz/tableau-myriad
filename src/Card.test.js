import Card from './Card';

let cardInstance;

beforeEach(() => {
  cardInstance = Card('2D');
});

test('should have at least one test', () => {
  expect(true).toBe(true);
});


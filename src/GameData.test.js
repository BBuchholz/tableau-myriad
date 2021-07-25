import GameData from './GameData';

let gameDataInstance;

beforeEach(() => {
  gameDataInstance = GameData();
});

test('should have at least one test', () => {
  expect(true).toBe(true);
});

test('should have a score value starting at zero', () => {
  expect(gameDataInstance.score).toBeDefined();
  expect(gameDataInstance.score).toBe(0);
});

test('should have a draw stack that starts empty', () => {
  expect(gameDataInstance.drawStack).toBeDefined();
  expect(gameDataInstance.drawStack.length).toBe(0);
});

test('should have a discard stack that starts empty', () => {
  expect(gameDataInstance.discardStack).toBeDefined();
  expect(gameDataInstance.discardStack.length).toBe(0);
});

test('should have a one stack that starts empty', () => {
  expect(gameDataInstance.oneStack).toBeDefined();
  expect(gameDataInstance.oneStack.length).toBe(0);
});

test('should have a two stack that starts empty', () => {
  expect(gameDataInstance.twoStack).toBeDefined();
  expect(gameDataInstance.twoStack.length).toBe(0);
});

test('should have a three stack that starts empty', () => {
  expect(gameDataInstance.threeStack).toBeDefined();
  expect(gameDataInstance.threeStack.length).toBe(0);
});

test('should have a four stack that starts empty', () => {
  expect(gameDataInstance.fourStack).toBeDefined();
  expect(gameDataInstance.fourStack.length).toBe(0);
});

test('should have an idempotent deck load function', () => {
  
  expect(gameDataInstance.drawStack.length).toBe(0);
  
  gameDataInstance.ensureDeckIsLoaded();
  expect(gameDataInstance.drawStack.length).toBeGreaterThan(0);
  
  const originalDeckSize = gameDataInstance.drawStack.length;
  
  // should be idempotent, so we will verifiy size after calling again
  gameDataInstance.ensureDeckIsLoaded();
  expect(gameDataInstance.drawStack.length).toBe(originalDeckSize);
})
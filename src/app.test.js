const isSolved = require('./app');

/* in game */ 
test('0  0  0 \n    0  0  0 \n    0  0  0   expected -1.\n', () => {
  expect(isSolved([[0,0,0],[0,0,0],[0,0,0]])).toBe(-1);
});

test('1  2  1 \n    0  2  0 \n    0  1  0   expected -1.\n', () => {
  expect(isSolved([[1,2,1],[0,2,0],[0,1,0]])).toBe(-1);
});

/* winner X  - rows*/
test('1  1  1 \n    2  1  2 \n    0  2  0   expected 1. \n', () => {
  expect(isSolved([[1,1,1],[2,1,2],[0,2,0]])).toBe(1);
});

test('2  1  2 \n    1  1  1 \n    0  2  0   expected 1. \n', () => {
  expect(isSolved([[2,1,2],[1,1,1],[0,2,0]])).toBe(1);
});

test('2  0  2 \n    0  2  1 \n    1  1  1   expected 1. \n', () => {
  expect(isSolved([[2,0,2],[0,2,1],[1,1,1]])).toBe(1);
});

/* winner X - coluns */
test('1  0  2 \n    1  2  0 \n    1  2  1   expected 1. \n', () => {
  expect(isSolved([[1,0,2],[1,2,0],[1,2,1]])).toBe(1);
});

test('1  1  0 \n    2  1  0 \n    2  1  2   expected 1. \n', () => {
  expect(isSolved([[1,1,0],[2,1,0],[2,1,2]])).toBe(1);
});

test('0  0  1 \n    0  2  1 \n    0  2  1   expected 1. \n', () => {
  expect(isSolved([[0,0,1],[0,2,1],[0,2,1]])).toBe(1);
});

/* winner X - diagonals */
test('1  0  2 \n    1  1  2 \n    2  0  1   expected 1. \n', () => {
  expect(isSolved([[1,0,2],[1,1,2],[2,0,1]])).toBe(1);
});

test('1  0  1 \n    2  1  2 \n    2  0  1   expected 1. \n', () => {
  expect(isSolved([[1,0,1],[2,1,2],[2,0,1]])).toBe(1);
});



/* winner O  - rows */
test('2  2  2 \n    0  1  1 \n    1  0  0   expected 2. \n', () => {
  expect(isSolved([[2,2,2],[0,1,1],[1,0,0]])).toBe(2);
});

test('2  1  1 \n    2  2  2 \n    1  0  1   expected 2. \n', () => {
  expect(isSolved([[2,1,1],[2,2,2],[1,0,1]])).toBe(2);
});

test('1  0  0 \n    1  1  0 \n    2  2  2   expected 2. \n', () => {
  expect(isSolved([[1,1,0],[0,1,1],[2,2,2]])).toBe(2);
});

/* winner O - coluns */ 
test('2  0  1 \n    2  1  1 \n    2  1  2   expected 2. \n', () => {
  expect(isSolved([[2,0,1],[2,1,1],[2,1,2]])).toBe(2);
});

test('1  2  1 \n    0  2  1 \n    0  2  0   expected 2. \n', () => {
  expect(isSolved([[1,2,1],[0,2,1],[0,2,0]])).toBe(2);
});

test('1  0  2 \n    0  1  2 \n    1  0  2   expected 2. \n', () => {
  expect(isSolved([[1,0,2],[0,1,2],[1,0,2]])).toBe(2);
});

/* winner O - diagonals */ 
test('2  1  0 \n    0  2  1 \n    1  0  2   expected 2. \n', () => {
  expect(isSolved([[2,1,0],[0,2,1],[1,0,2]])).toBe(2);
});

test('1  1  2 \n    0  2  1 \n    2  0  0   expected 2. \n', () => {
  expect(isSolved([[1,1,2],[0,2,1],[2,0,0]])).toBe(2);
});

/* draw */
test('1  2  1 \n    2  2  1 \n    1  1  2   expected 0. \n', () => {
  expect(isSolved([[1,2,1],[2,2,1],[1,1,2]])).toBe(0);
});

test('2  1  2 \n    2  1  1 \n    1  2  2   expected 0.\n', () => {
  expect(isSolved([[2,1,2],[2,1,1],[1,2,2]])).toBe(0);
});

import { UniqueRandomNumber } from '../UniqueRandomNumber';

function compareToArray(urn: UniqueRandomNumber, from: number, to: number) {
  const length = to - from + 1;

  // Sorted unique number 0...99
  const arr = [...new Array(length).keys()].map((n) => n + from);

  for (let i = 0; i < length; i += 1) {
    const n = urn.get();
    if (n !== undefined) {
      const index = arr.indexOf(n);
      if (index !== -1) {
        arr.splice(index, 1);
      } else {
        fail('Number is not found in check array, but it must be there');
      }
    } else {
      fail('Range has ended earlier than expected');
    }
  }
  expect(arr).toHaveLength(0);
}

it('Can generate unique random numbers', () => {
  const urn = new UniqueRandomNumber(0, 99);
  compareToArray(urn, 0, 99);
});

it('Can generate negative numbers', () => {
  const urn = new UniqueRandomNumber(-10, 10);
  compareToArray(urn, -10, 10);
});

it('Can work with from > to range', () => {
  const urn = new UniqueRandomNumber(10, -10);
  compareToArray(urn, -10, 10);
});

it('Can work with default params', () => {
  const urn = new UniqueRandomNumber();
  compareToArray(urn, 0, 1000);
});

it('Has iterator support', () => {
  const urn = new UniqueRandomNumber(0, 10);

  const check = [...new Array(11).keys()];
  const arr: number[] = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const n of urn) {
    if (n !== undefined) {
      arr.push(n);
    }
  }

  expect(arr.sort((a, b) => a - b)).toEqual(check);
});

it('Can work with big ranges', () => {
  const urn = new UniqueRandomNumber(
    Number.MIN_SAFE_INTEGER,
    Number.MAX_SAFE_INTEGER
  );

  const a = urn.get();
  const b = urn.get();
  const c = urn.get();

  // This check doesn't matter, we call it to be sure that script can handle big range fast
  expect(a !== b && a !== c && b !== c).toBeTruthy();
});

it('Can generate just one number', () => {
  const urn = new UniqueRandomNumber(10, 10);

  expect(urn.get()).toBe(10);
  expect(urn.get()).toBeUndefined();
});

it('Can work with strings', () => {
  const urn = new UniqueRandomNumber(-1, 1);

  expect(['num-1', 'num0', 'num1']).toContain(`num${urn}`);
  expect(['num-1', 'num0', 'num1']).toContain(`num${urn}`);
  expect(['num-1', 'num0', 'num1']).toContain(`num${urn}`);
  expect(`${urn}`).toBe('');
});

# Unique Random Number

### Fast & simple unique random numbers generator

This lib can generate unique numbers for big ranges. It's very simple in usage, just check it out.

## Installation

npm:
```sh
npm install @ts-pro/unique-random-number
```
yarn:
```sh
yarn add @ts-pro/unique-random-number
```

## Usage

Simple example of usage.

```js
import { UniqueRandomNumber } from 'unique-random-number';
const unique = new UniqueRandomNumber(0, 1000000);

console.log(unique.get()); // Will print unique random number in 0 ... 1000000 ( inclusive )
```

What will happen if random numbers reach the end ?
```js
import { UniqueRandomNumber } from 'unique-random-number';
const unique = new UniqueRandomNumber(0, 2);

console.log(unique.get()); // Will print 0 or 1 or 2
console.log(unique.get()); // Will print 0 or 1 or 2
console.log(unique.get()); // Will print 0 or 1 or 2
console.log(unique.get()); // Will print undefined which means that we have riched the end
```

We can work with iterators ( this loop will end when it riches last number, you don't have to write any conditions ):
```js
import { UniqueRandomNumber } from 'unique-random-number';
const unique = new UniqueRandomNumber(0, 100);

for(let n of unique) {
  console.log(n); // Will print numbers between 0 ... 100
}
```

## License

Unique random number is [MIT-licensed](LICENSE) open-source software by [Oleksandr Havrashenko](https://github.com/gavrashenko).

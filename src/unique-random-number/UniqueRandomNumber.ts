export class UniqueRandomNumber {
  private readonly from!: number;

  private readonly to!: number;

  private range!: number[][];

  constructor(from = 0, to = 1000) {
    this.from = from > to ? to : from;
    this.to = to > from ? to : from;
    this.range = [[this.from, this.to]];
  }

  get(): number | undefined {
    if (this.range.length === 0) {
      return undefined;
    }

    const index = Math.trunc(Math.random() * this.range.length);
    const [[from, to]] = this.range.splice(index, 1);
    const randomNumber = Math.trunc(Math.random() * (to - from)) + from;

    if (from !== randomNumber) {
      this.range.push([from, randomNumber - 1]);
    }

    if (to !== randomNumber) {
      this.range.push([randomNumber + 1, to]);
    }

    return randomNumber;
  }

  [Symbol.iterator](): Iterator<number | undefined> {
    return {
      next: () => {
        const value = this.get();

        return {
          value,
          done: value === undefined,
        };
      },
    };
  }
}

export declare class UniqueRandomNumber {
    private readonly from;
    private readonly to;
    private range;
    constructor(from?: number, to?: number);
    get(): number | undefined;
    toString(): string;
    [Symbol.iterator](): Iterator<number | undefined>;
}

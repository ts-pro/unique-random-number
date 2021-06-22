(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['unique-random-number'] = {}));
}(this, (function (exports) { 'use strict';

    class UniqueRandomNumber {
        from;
        to;
        range;
        constructor(from = 0, to = 1000) {
            this.from = from > to ? to : from;
            this.to = to > from ? to : from;
            this.range = [[this.from, this.to]];
        }
        get() {
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
        [Symbol.iterator]() {
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

    exports.UniqueRandomNumber = UniqueRandomNumber;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.umd.js.map

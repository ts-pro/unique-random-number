'use strict';

var _Symbol$iterator;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

Object.defineProperty(exports, '__esModule', {
  value: true
});
_Symbol$iterator = Symbol.iterator;

class UniqueRandomNumber {
  constructor() {
    var from = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var to = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;

    _defineProperty(this, "from", void 0);

    _defineProperty(this, "to", void 0);

    _defineProperty(this, "range", void 0);

    this.from = from > to ? to : from;
    this.to = to > from ? to : from;
    this.range = [[this.from, this.to]];
  }

  get() {
    if (this.range.length === 0) {
      return undefined;
    }

    var index = Math.trunc(Math.random() * this.range.length);
    var [[from, to]] = this.range.splice(index, 1);
    var randomNumber = Math.trunc(Math.random() * (to - from)) + from;

    if (from !== randomNumber) {
      this.range.push([from, randomNumber - 1]);
    }

    if (to !== randomNumber) {
      this.range.push([randomNumber + 1, to]);
    }

    return randomNumber;
  }

  toString() {
    var _this$get$toString, _this$get;

    return (_this$get$toString = (_this$get = this.get()) === null || _this$get === void 0 ? void 0 : _this$get.toString()) !== null && _this$get$toString !== void 0 ? _this$get$toString : '';
  }

  [_Symbol$iterator]() {
    return {
      next: () => {
        var value = this.get();
        return {
          value,
          done: value === undefined
        };
      }
    };
  }

}

exports.UniqueRandomNumber = UniqueRandomNumber;
//# sourceMappingURL=index.cjs.js.map

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
var add = function (numbers) {
    if (!numbers.length) {
        return 0;
    }
    var delimiter = /,|\n/;
    if (numbers.startsWith("//")) {
        var parts = numbers.split(delimiter, 2); // Split into delimiter and the rest
        delimiter = new RegExp(parts[0].slice(2)); // Extract custom delimiter
        numbers = parts[1]; // Rest of the string
    }
    var numbersArrString = numbers.split(delimiter);
    var negativeNumbers = [];
    var numbersArr = numbersArrString.map(function (el) {
        var convertedNumber = parseFloat(el);
        if (convertedNumber < 0) {
            negativeNumbers.push(convertedNumber);
        }
        return convertedNumber;
    });
    if (negativeNumbers.length) {
        var str_1 = "negative numbers not allowed";
        negativeNumbers.forEach(function (el) {
            str_1 += el.toString();
        });
        throw new Error(str_1);
    }
    return numbersArr.reduce(function (x, y) { return x + y; }, 0);
};
exports.add = add;
console.log((0, exports.add)("1\n2,3"));

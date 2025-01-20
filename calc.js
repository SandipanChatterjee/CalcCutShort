function add(numbers) {
    if (!numbers.length) {
        return 0;
    }
    var numbersArrString = numbers.split(",");
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
}
console.log(add("1,-2, -3"));

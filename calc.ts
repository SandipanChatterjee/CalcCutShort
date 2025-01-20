function add(numbers: string): number {
  if (!numbers.length) {
    return 0;
  }

  let delimiter = /,|\n/;

  const numbersArrString = numbers.split(delimiter);
  const negativeNumbers: number[] = [];

  const numbersArr = numbersArrString.map((el) => {
    const convertedNumber = parseFloat(el);
    if (convertedNumber < 0) {
      negativeNumbers.push(convertedNumber);
    }
    return convertedNumber;
  });

  if (negativeNumbers.length) {
    let str = "negative numbers not allowed";
    negativeNumbers.forEach((el) => {
      str += el.toString();
    });

    throw new Error(str);
  }

  return numbersArr.reduce((x, y) => x + y, 0);
}

console.log(add("1\n2, 3"));

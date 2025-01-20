export const add = (numbers: string): number => {
  if (!numbers.length) {
    return 0;
  }

  let delimiter = /,|\n/;

  if (numbers.startsWith("//")) {
    const parts = numbers.split(delimiter, 2); // Split into delimiter and the rest
    delimiter = new RegExp(parts[0].slice(2)); // Extract custom delimiter
    numbers = parts[1]; // Rest of the string
  }

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
};

console.log(add("1\n2,3"));

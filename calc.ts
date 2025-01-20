function add(numbers: string): number {
  if (!numbers.length) {
    return 0;
  }
  const numbersArr = numbers.split(",");
  return numbersArr.reduce((x, y) => x + parseFloat(y), 0);
}

add("1,2,3");

function sumOfTwoNumbers(input) {
  let start = Number(input[0]);
  let end = Number(input[1]);
  let magicNumber = Number(input[2]);
  let count = 0;
  let isFound = false;
  for (let a = start; a <= end; a++) {

    for (let b = start; b <= end; b++) {
      count++;
      if (a + b === magicNumber) {
        console.log(`Combination N:${count} (${a} + ${b} = ${magicNumber})`);
        isFound = true;
        break;
      }
    }
    if (isFound) {
      break;
    }
  }
  if (!isFound) {
    console.log(`${count} combinations - neither equals ${magicNumber}`)
  }
}
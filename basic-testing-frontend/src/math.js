export function add(numbers) {
  let sum = 0;

  // throw new ("Somthing is Wrong");

  for (const number of numbers) {
    sum += +number;
  }
  return sum;
}

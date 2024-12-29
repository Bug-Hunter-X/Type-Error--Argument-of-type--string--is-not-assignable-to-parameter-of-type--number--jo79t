function add(a: number, b: number): number {
  return a + b;
}

let num1 = 5;
let num2 = 10;

let result = add(num1, num2); // Correct usage
console.log(result); // Output: 15

//Alternative solution using type assertion (use with caution!):
let result2 = add(5, parseInt('10' as string));
console.log(result2); //Output: 15
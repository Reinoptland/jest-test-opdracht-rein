function add(num1, num2) {
  //   console.log("INPUT", num1, num2);
  const sum = num1 + num2;
  //   console.log("SUM", sum);
  return sum;
}

test("add() function should return the sum of 2 numbers", () => {
  //   console.log("Hallo dit is een test, echt waar");
  // ARRANGE
  const number1 = 4;
  const number2 = 5;

  // ACT
  const sum = add(number1, number2);

  // ASSERT
  expect(sum).toBe(9); // expect en toBe komen uit jest!
});

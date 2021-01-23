// 2. importeren
const add = require("./index").add;
const findByName = require("./index").findByName;
const multiply = require("./index").multiply;

// const { add, findByName, multiply } = require("./index");

test("multiply() function should return the multiplication of 2 numbers", () => {
  // ARRANGE
  const num1 = 4;
  const num2 = 3;

  // ACT
  const result = multiply(num1, num2);

  // ASSERT
  expect(result).toBe(12);
});

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

test("findByName() returns an object from an array with a specified name", () => {
  // ARRANGE
  const users = [
    { id: 1, name: "Rein" },
    { id: 2, name: "Nova" },
    { id: 3, name: "Mitchel" },
  ];
  const userNameToFind = "Nova";

  // ACT
  const user = findByName(users, userNameToFind);

  // ASSERT
  expect(user).toEqual({ id: 2, name: "Nova" });
});

test("findByName should return null, if the element is not found", () => {
  // ARRANGE
  const users = [
    { id: 1, name: "Rein" },
    { id: 2, name: "Nova" },
    { id: 3, name: "Mitchel" },
  ];
  const userNameToFind = "Kees";
  // ACT
  const user = findByName(users, userNameToFind);

  // ASSERT
  expect(user).toBeNull();
});

function add(num1, num2) {
  //   console.log("INPUT", num1, num2);
  const sum = num1 + num2;
  //   console.log("SUM", sum);
  return sum;
}

function multiply(num1, num2) {
  //   console.log("Wordt ik aangroepen");
  console.log("INPUT:", num1, num2);
  const result = num1 * num2;
  console.log("RESULT:", result);
  return result;
}

function findByName(users, name) {
  //   console.log("INPUT:", users, name);
  // 1. X loop maken
  // 2. X if statement: is de name hetzelfde als de naam uit het object?
  // 3. X zo ja return dat object

  for (let index = 0; index < users.length; index++) {
    const user = users[index];
    // console.log("USER 1 voor 1?", user.name);
    if (user.name === name) {
      //   console.log("GEVONDEN?", user);
      return user;
    }
  }

  return null;
}

// 1. exporteren

module.exports = {
  add: add,
  findByName: findByName,
};

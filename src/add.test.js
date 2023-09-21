const add = require("./add");

test("first test case", () => {
  expect(add(20, 30)).toBe(50);
});

// test("first test case", () => {
//   expect(add(20, 30)).not.toBe(50);
// });

// test("first test case", () => {
//   expect(add(20, 30)).not.toBe(70);
// });

const sum = require("./sum");
const common = require("./common");

beforeEach(() => {
  console.log(common());
});

test("test case", () => {
  expect(sum()).toBe(50);
});

test("test case2", () => {
  expect(sum()).toBe(50);
});

test("test case3", () => {
  expect(sum()).toBe(50);
});

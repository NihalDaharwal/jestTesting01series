const string = require("./string");

// test("string test case", () => {
//   expect(string()).toMatch("hello");
// });

// test("string test case", () => {
//     expect(string()).toMatch("hi");
//   });

// test("string test case", () => {
//     expect(string()).not.toMatch("hi");
//   });

//string as function output
// test("string test case", () => {
//     expect(string("hello")).toMatch("hello");
//   });

//string as variable
test("string test case", () => {
  expect(string).toMatch(/ll/);
});

// test("string test case", () => {
//     expect(string).toMatch(/lla/);
//   });

// test("string test case", () => {
//   expect(string).not.toMatch(/lla/);
// });

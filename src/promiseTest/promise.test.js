const promise = require("./promise");

test("promise test", () => {
  return promise().then((data) => {
    expect(data).toBe("hello");
  });
});


// test("promise test", () => {
//     return promise().then((data) => {
//       expect(data).toBe("hi");
//     });
//   });
  
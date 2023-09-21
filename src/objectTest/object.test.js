const object = require("./object");

test("testing object", () => {
  expect(object()).toEqual({ name: "nihal" });
});

// test("testing object", () => {
//     expect(object()).not.toEqual({ name: "nihal" });
//   });

// test("testing object", () => {
//   expect(object()).not.toEqual({ name: "vishal" });
// });

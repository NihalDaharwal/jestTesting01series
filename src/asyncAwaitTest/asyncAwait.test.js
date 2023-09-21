const asyncAwait = require("./asyncAwait");
const promise = require("./asyncAwait");

test("async await function test", async () => {
  const data = await asyncAwait();
  expect(data).toBe("done");
});

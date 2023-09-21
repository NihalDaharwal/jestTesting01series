const cFunction = require("./cFunction");

test("callback function test", (done) => {
  function callback(data) {
    try {
      expect(data).toBe("hello");
      done();
    } catch (err) {
      done(err);
    }
  }
  cFunction(callback);
});

function cFunction(back) {
  return back("hello");
//   return back("hi"); will fail
}

module.exports = cFunction;

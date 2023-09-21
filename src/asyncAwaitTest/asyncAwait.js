function asyncAwait() {
  return new Promise((resolve, reject) => {
    resolve("done");
  });
}

module.exports = asyncAwait;

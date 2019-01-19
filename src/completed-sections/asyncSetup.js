// To allow async/await
require("babel-polyfill");

function fetchCallback(callback) {
  let result = new Promise(resolve =>
    setTimeout(() => resolve(callback('success')), 500)
  );
}

function fetchResolve() {
  let result = new Promise(resolve =>
    setTimeout(() => resolve('success'), 500)
  );
  return result;
}

function fetchReject() {
  let result = new Promise((resolve, reject) =>
    setTimeout(() => reject('error'), 500)
  );
  return result;
}

module.exports = {
  fetchCallback,
  fetchResolve,
  fetchReject,
};

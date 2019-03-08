// To allow async/await
require("babel-polyfill");

function fetchCallback(callback) {
  return new Promise(resolve =>
    setTimeout(() => resolve(callback('success')), 500)
  );
}

function fetchResolve() {
  return new Promise(resolve =>
    setTimeout(() => resolve('success'), 500)
  );
}

function fetchReject() {
  return new Promise((resolve, reject) =>
    setTimeout(() => reject('error'), 500)
  );
}

module.exports = {
  fetchCallback,
  fetchResolve,
  fetchReject,
};

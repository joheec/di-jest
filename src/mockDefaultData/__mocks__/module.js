// The directory name containing the mocks, __mocks__,
// is case sensitive
const values = {
  key1: 1,
  key2: 2,
};

export default function runModule(key) {
  return new Promise((resolve, reject) => {
    // process is a global object from
    // Node.js core API.
    // `nextTick` defers execution fo function
    // until the next event loop iteration.
    process.nextTick(() => values[key]
      ? resolve({ value: values[key] })
      : reject({
        error: 'Value not found for ' + key,
      }),
    );
  });
}

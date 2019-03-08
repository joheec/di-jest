// Notice this library is not a dependency
// in package.json
const http = require('http');

export default function runModule(key) {
  return new Promise(resolve => {
    http.get({ path: key }, response => {
      let data = '';
      response.on('data', _data => (data += _data));
      response.on('end', () => resolve(data));
    });
  });
}

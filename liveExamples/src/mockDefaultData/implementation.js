// This will be mocked by default
// in the test file
// with data from the __mocks__ directory
import runModule from './module';

export function runImplementation(key) {
  return runModule(key).then(response => response.value);
}

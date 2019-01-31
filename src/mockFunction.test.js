describe('mock specific tests', () => {
  test('mock name', () => {
    const mockFunc = jest.fn().mockName('a mock name');
    expect(mockFunc.getMockName()).toBe('a mock name');
  });
});

// Scenarios to use mock and things to test
describe('Mocking passed in function', () => {
  // Mocking a function gives access to inspect the mock's state
  function forEach(items, callback) {
      for (let index = 0; index < items.length; index++) {
          callback(items[index][0], items[index][1]);
      }
  }
  
  const items = [
    // params for the first execution of the callback
    ['first param', 'second param'],
    // params for the secont execution of the callback
    ['third param', 'fourth param'],
  ];
  
  const formatArg = arg => arg.match(/^.*(?=( param))/)[0];
  
  // Mock the callback parameter of the forEach function
  const mockCallback = jest.fn((x, y) => (
    formatArg(x) + ' and ' + formatArg(y) + ' args'
  ));
  forEach(items, mockCallback);

  test('Number of times mocked function is called.', () => {
      const timesCalled = items.length;
      expect(mockCallback.mock.calls.length).toBeGreaterThan(timesCalled - 1);
      expect(mockCallback).toHaveBeenCalledTimes(2);
  });
  
  test('mocked function was called at least once', () => {
    expect(mockCallback).toBeCalled();
  });

  test('mocked function was called at least once with specific parameters', () => {
    expect(mockCallback).toBeCalledWith('third param', 'fourth param');
    expect(mockCallback).toHaveBeenLastCalledWith('third param', 'fourth param');
    // Is not working as expected
    // expect(mockCallback.mock.calls).toContain(['first param', 'second param']);
  });

  test('the last mock function call was with specific args', () => {
    expect(mockCallback).lastCalledWith('third param', 'fourth param');
    expect(mockCallback.mock.calls[mockCallback.mock.calls.length-1])
      .toEqual(['third param', 'fourth param']);
  });
  
  test('First parameter of the first call to the function', () => {
    // mockCallbacks.mock.calls[call_index][parameter_index]
    expect(mockCallback.mock.calls[0][0]).toBe('first param');
  });
  
  test('First parameter of the second call to the function', () => {
    // mockCallbacks.mock.calls[call_index][parameter_index]
    expect(mockCallback.mock.calls[1][0]).toBe('third param');
  });
  
  test('Returned value of the first call', () => {
    // mockCallbacks.mock.results[call_index].value
    expect(mockCallback.mock.results[0].value).toMatch('first and second args');
  });
});

describe('Mock function instances', () => {
  const mockedFunction = jest.fn();

  // first instantiation of mockedFunction
  const instanceOne = new mockedFunction();

  // second instantiation of mockedFunction (undefined instance)
  const instanceTwo = mockedFunction;
  instanceTwo();

  // third instantiation of mockedFunction 
  const bound = { city: 'Portland' };
  // bound to the constructor of mockedFunction
  const instanceThree = mockedFunction.bind(bound);
  instanceThree();

  // console.log(mockedFunction.mock.instances);
  // >> [ mockConstructor {}, undefined, { city: 'Portland' } ]

  test('Mock function was instantiated three times', () => {
    expect(mockedFunction.mock.instances.length).toBe(3);
  });

  test('Object returned by third instantiation of mockedFunction', () => {
    expect(mockedFunction.mock.instances[2].city).toEqual('Portland');
  });
});

describe('Mocking returned values', () => {
  // const mockedFunction = jest.fn();
  // console.log(mockedFunction())
  // >> undefined
  
  const values = {
    first: 1,
    second: 2,
    rest: 0,
  };

  test('Returned values from mockedFunction', () => {
    const mockedFunction = jest.fn();
    mockedFunction
      .mockReturnValueOnce(values.first)
      .mockReturnValueOnce(values.second)
      .mockReturnValue(values.rest);

    expect(mockedFunction()).toEqual(values.first);
    expect(mockedFunction()).toEqual(values.second);
    expect(mockedFunction()).toEqual(values.rest);
    expect(mockedFunction()).toEqual(values.rest);
  });

  test('mockedFunction used in a functional, continuation-passing style', () => {
    const mocked = jest.fn();
    mocked
      .mockReturnValueOnce(true)
      .mockReturnValueOnce(false);
    const result = ['not filtered', 'filtered'].filter(mocked);
    expect(result).toEqual(['not filtered']);
  });
});

describe('Mocking entire implementation of a function (not just returned value)', () => {
  test('repeated implementations', () => {
    const mockedFunction = jest.fn(cb => cb(true));
    expect(mockedFunction(val => val)).toBeTruthy();
  });

  test('multiple implementations', () => {
    const mockedFunction = jest.fn()
      .mockImplementationOnce(cb => cb(true))
      .mockImplementationOnce(cb => cb(false));

    expect(mockedFunction(val => val)).toBeTruthy();
    expect(mockedFunction(val => val)).toBeFalsy();
    // Only 2 implementations were defined
    expect(mockedFunction()).toBeUndefined();
  });
});

describe('Using mock for method chaining', () => {
  test('with prototypes', () => {
    const Portland = function() {
      this.state = 'Oregon';
    };

    // same thing as function() { return this; }
    Portland.prototype.randomChange = jest.fn().mockReturnThis();

    Portland.prototype.setState = function(state) {
      this.state = state;
      return this;
    };

    const currentCity = new Portland();
    currentCity
      .randomChange()
      .setState('Maine');

    expect(currentCity.state).toMatch('Maine');
  });

  test('with object', () => {
    const Portland = function() {
      const location = {
        // same thing as function() { return this; }
        randomChange: jest.fn().mockReturnThis(),
        state: 'Oregon',
        setState(state) {
          this.state = state;
          return this;
        },
      };
      return location;
    };

    const currentCity = new Portland();
    currentCity
      .randomChange()
      .setState('Maine');

    expect(currentCity.state).toMatch('Maine');
  });
});

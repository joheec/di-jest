## Helping users `di-jest` the Jest library
Executed examples found in the Jest documentation, ready for you to play with, without the hassle of setting it up yourself.
Dig around the topic-based named, test files with in-line notes and documentations. And don't forget to provide suggestions and feedback!

Steps:
1. `git clone git@github.com:joheec/di-jest.git`
2. `cd di-jest`
3. `npm install`
4. `npm test`

The package.json file test script runs `jest --watch`. The watch flag will re-run the files as you edit them. If you'd prefer to manually run test, just remove the --watch flag from

`{
  "scripts": {
    "test": "jest --watch"
  }
}`

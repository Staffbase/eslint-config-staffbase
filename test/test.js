// copied from https://raw.githubusercontent.com/google/eslint-config-google/master/test/test.js

'use strict';

const assert = require('assert');
const { ESLint } = require("eslint");
const conf = require('../');

// The source files to lint.
const repoFiles = [
  'index.js',
  'test/test.js',
];

// Use the rules defined in this repo to test against.
const eslint = new ESLint({
  useEslintrc: false,
  overrideConfig: { env: { node: true, es6: true }, rules: conf.rules }
});

test('Run the linter on the repo files and asserts no errors were found', async () => {
   const lintResults =  await eslint.lintFiles(repoFiles);

   const totalErrorCount = lintResults.reduce((acc, { errorCount }) => {
     return (acc += errorCount), 0;
   });
   const totalWarningCount = lintResults.reduce((acc, { warningCount }) => {
     return (acc += warningCount), 0;
   });

  expect(totalErrorCount).toBe(0);
  expect(totalWarningCount).toBe(0);
  repoFiles.forEach((file, index) => {
    expect(lintResults[index].filePath.endsWith(file)).toBe(true);
  });
});

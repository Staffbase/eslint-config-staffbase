// copied from https://raw.githubusercontent.com/google/eslint-config-google/master/test/test.js

'use strict';

const assert = require('assert');
const eslint = require('eslint');
const conf = require('../');

// The source files to lint.
const repoFiles =         [
  'index.js',
  'test/test.js',
];

// Use the rules defined in this repo to test against.
const eslintOpts = {
  envs: ['node', 'es6'],
  useEslintrc: false,
  rules: conf.rules,
};

test('Run the linter on the repo files and asserts no errors were found', () => {
  const report = new eslint.CLIEngine(eslintOpts).executeOnFiles(repoFiles);

  expect(report.errorCount).toBe(0);
  expect(report.warningCount).toBe(0);
  repoFiles.forEach((file, index) => {
    expect(report.results[index].filePath.endsWith(file)).toBe(true);
  });
});

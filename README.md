# eslint-config-staffbase [![Build Status](https://travis-ci.org/staffbase/eslint-config-staffbase.svg?branch=master)](https://travis-ci.org/Staffbase/eslint-config-staffbase)

> Base ESLint config for Staffbase based on [Google's config](https://github.com/google/eslint-config-google)


## Installation

```
$ npm install --save-dev eslint eslint-config-staffbase
```
or
```
$ yarn add --dev eslint eslint-config-staffbase
```


## Usage

Once the `eslint-config-staffbase` package is installed, you can use it by specifying `staffbase` in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```js
{
  "extends": "staffbase",
  "rules": {
    // Additional, per-project rules...
  }
}
```

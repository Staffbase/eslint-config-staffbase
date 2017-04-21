'use strict';

module.exports = {
  "extends": ["google"],
  "rules": {
    "max-len": [1, 120],
    "padded-blocks": ["error", {"blocks": "never", "classes": "always"}],
    "semi": 2,
  }
};

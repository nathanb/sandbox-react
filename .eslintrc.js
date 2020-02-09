module.exports = {
  "root": true,
  "extends": "eslint:recommended",
  "parser": "babel-eslint",
  "rules": {
    "semi"                    : ["error", "never"],
    "indent"                  : ["error", 2, {"SwitchCase":1, "VariableDeclarator": { "var": 2, "let": 2, "const": 3}}],
    "linebreak-style"         : ["error", "unix"],
    "eqeqeq"                  : ["error", "smart"],
    "brace-style"             : ["error", "1tbs", {"allowSingleLine": true}],
    "camelcase"               : ["error", {"properties": "never"}],
    "no-trailing-spaces"      : "error",
    "no-mixed-spaces-and-tabs": "error",
    "no-tabs"                 : "error",
    "no-console"              : "off",
    "no-fallthrough"          : "off",
    "no-unused-vars"          : ["error", {"vars": "all", "args": "none"}],
    "react/jsx-uses-react"    : "error",
    "react/jsx-uses-vars"     : "error"
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true,
    "mocha": true
  },
  "parserOptions": {
    "sourceType": "module"
    ,"ecmaFeatures": {
      "jsx": true
    }
  },
  "plugins": ["react"],
  "globals": {
    "moment": true
    ,"jbn": true
    ,"async": true
    ,"_": true
    ,"$": true
  },
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "experimentalObjectRestSpread": true
    }
  }
}

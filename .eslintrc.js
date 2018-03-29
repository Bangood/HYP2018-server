module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 6,
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true
          }
    },
    "extends": "eslint:recommended",
    "rules": {
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    },
    "globals": {
        "__dirname": "__dirname",
        "process": "process"
    }
};
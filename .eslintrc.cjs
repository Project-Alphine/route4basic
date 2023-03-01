module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        "semi": "error",
        "quotes": ["error", "single"],
        "indent": ["error", 2],
        "no-unused-vars": "warn",
        "no-undef": "warn",
        "no-console": "warn"
    }
}

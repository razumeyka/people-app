module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true,
    },
    "extends": [
        "airbnb",
        "eslint:recommended",
        "plugin:react/recommended",
		"plugin:jsx-a11y/recommended",
        "prettier"
    ],
    // "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react",
		"jsx-a11y"
    ],
    "rules": {
        "arrow-body-style": ["error", "as-needed"],
        "no-case-declarations": "off",
        "react/display-name": "off",
        "no-plusplus": "off",
        "import/prefer-default-export": "off",
		"no-console": "warn",
        "react/function-component-definition": "off",
        "react/prop-types": "off",
		"react/jsx-filename-extension": [1, { 
            "extensions": [".js", ".jsx"] 
        }],
    },
    "ignorePatterns": ["*config.js"]
};
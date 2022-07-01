module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "no-unused-vars": 0,
        "no-console": 0,
        "no-underscore-dangle": 0,
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "react/react-in-jsx-scope": "off",
        "react/prop-types": "off",
        "react/jsx-props-no-spreading": "off",
        "react/jsx-curly-brace-presence": "off",
        "react/button-has-type": "off",
        "react/function-component-definition": [
            2,
            {
              "namedComponents": "function-declaration"
            }
        ],
        "react/jsx-one-expression-per-line": 0,
        "react/jsx-filename-extension": [2, { "extensions": [".js", ".jsx", ".ts", ".tsx"] }]
    },
    "overrides": [
        {
            "files": ["*.ts", "*.tsx", "*.js"],
            "rules": {
                "no-undef": 0,
                "max-len": 0
            }
        }
    ]
}

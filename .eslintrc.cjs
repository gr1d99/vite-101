module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  plugins: [
    'react'
  ],
  rules: {
    "react/react-in-jsx-scope": 0,
    "indent": ["error", 2]
  },
  settings: {
    "react": {
      "version": "detect"
    }
  }
}

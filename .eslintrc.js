module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  extends: [
    'react-app',
    'plugin:react/recommended',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    describe: 'readonly',
    context:'readonly',
    afterAll: 'readonly',
    before: 'readonly',
    beforeAll: 'readonly',
    beforeEach: 'readonly',
    after: 'readonly',
    afterEach: 'readonly',
    it: 'readonly',
    test: 'readonly',
    expect: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    "react/jsx-one-expression-per-line": "off",
    "import/prefer-default-export": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "react/prop-types": "off",
    "global-require": "off",
    "import/extensions": "off",
    "react/jsx-props-no-spreading": "off",
    "@typescript-eslint/ban-ts-ignore": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "react-hooks/exhaustive-deps": "off",
    "@typescript-eslint/no-namespace": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "prefer-promise-reject-errors": "off",
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "react/jsx-filename-extension": [
      "error", { "extensions": [".ts", ".tsx", ".js", ".jsx"] }
    ],
    "import/no-extraneous-dependencies": "off",
  },
  settings:{
    "import/resolver":{
      typescript: {}
    }
  },
};

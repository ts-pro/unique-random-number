module.exports = {
  env: {
    // Enables es2021 features to be known by eslint
    es2021: true,
    jest: true,
  },
  extends: [
    // Ecmascript rules are here https://www.npmjs.com/package/eslint-config-airbnb
    'airbnb-base',

    // Typescript rule are here https://www.npmjs.com/package/@typescript-eslint/eslint-plugin
    'plugin:@typescript-eslint/recommended',

    // Prettier plugin which enables pretties & prevents some conflicts with eslint rules
    // https://www.npmjs.com/package/eslint-plugin-prettier
    'plugin:prettier/recommended',

    // Provides support of ES6+ imports https://www.npmjs.com/package/eslint-plugin-import
    'plugin:import/recommended',
    // ... and add support for typescript imports
    'plugin:import/typescript',
  ],

  // Parser to be able to parse TS files https://www.npmjs.com/package/@typescript-eslint/parser
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },

  // Settings for support paths from tsconfig ( like @/* ) https://www.npmjs.com/package/eslint-import-resolver-typescript
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },

  // Required option for @typescript-eslint
  plugins: ['@typescript-eslint'],
  rules: {
    // Redefine prettier config to make quotes single
    // https://github.com/prettier/eslint-config-prettier/#example-single-quote-configuration
    quotes: [
      'error',
      'single',
      { avoidEscape: true, allowTemplateLiterals: false },
    ],

    // Make files extensions optional
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],

    // I like using named exports =)
    'import/prefer-default-export': 0,
  },
};

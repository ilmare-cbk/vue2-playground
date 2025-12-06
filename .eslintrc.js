module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true
  },
  extends: [
    'plugin:vue/essential', // Vue 2
    '@vue/typescript/recommended',
    'eslint:recommended',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    // Vue rules
    'vue/no-unused-components': 'warn',
    'vue/no-mutating-props': 'warn',

    // TS rules
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',

    // Prettier formatting 충돌 제거
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'none',
        semi: false,
        singleQuote: true
      }
    ]
  }
}

module.exports = {
  root: true,
  env: {
    es2021: true,
    node: true
  },
  extends: ['eslint:recommended', 'google'],
  rules: {
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    indent: ['error', 2],
    'quote-props': ['error', 'as-needed'],
    'object-curly-spacing': ['error', 'always'],
    'comma-dangle': 'off'
  }
}

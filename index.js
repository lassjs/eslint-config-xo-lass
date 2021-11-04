module.exports = {
  parserOptions: {
    sourceType: 'script'
  },
  rules: {
    'max-len': [
      'error',
      {
        code: 80,
        ignoreUrls: true
      }
    ],
    'capitalized-comments': 'off',
    camelcase: 'off',
    'no-warning-comments': 'off',
    'ava/no-todo-test': 'off',
    'unicorn/catch-error-name': [
      'error',
      {
        name: 'err'
      }
    ],
    'unicorn/import-style': 'off',
    'unicorn/prevent-abbreviations': 'off',
    'import/extensions': 'off',
    'unicorn/prefer-module': 'off'
  }
};

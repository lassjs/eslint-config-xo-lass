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
    ]
  }
};

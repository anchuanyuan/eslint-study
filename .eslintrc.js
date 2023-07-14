module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['eslint:recommended', 'prettier'],
  globals: {
    React: 'readonly',
    ReactDOM: 'readonly'
  },
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    },
    {
      files: ['*.html'],
      plugins: ['html'],
    //   extends: ['standard'],
      rules: {
        quotes: ['error', 'single']
      }
    },
    {
      files: ['*.html'],
      plugins: ['react-html']
    }
    // {
    //   files: ['*.html'],
    //   extends: ['html-jsx'],
    //   rules: {
    //     quotes: ['error', 'single'],
    //   },
    // },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'windows'],
    quotes: ['error', 'single'],
    semi: ['off', 'none']
  }
}

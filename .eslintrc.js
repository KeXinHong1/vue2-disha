module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'quotes':'off',
    'space-before-function-paren':'off',
    'space-before-function-paren':'off',
    'comma-dangle':'off',
    'semi':'off',
    'no-unused-vars':'off',
    'no-undef':'off',
    'vue/multi-word-component-names':'off',
    'no-multiple-empty-lines':'off',
    'no-trailing-spaces':'off',
    'vue/no-parsing-error':'off',
    'spaced-comment':'off',
    'no-tabs':'off',
    'indent':'off'
  }
}

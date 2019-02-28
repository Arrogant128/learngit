module.exports = {
  root: true,
  env: {
    node: true
    // browser: true
  },
  'extends': [
   'plugin:vue/essential',
   'standard'
   ],
  // extends: 'standard',
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'off' : 'off', //error
    "no-multiple-empty-lines": "off",
    // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/script-indent.md
    "vue/script-indent": ["error",2,{"baseIndent": 1}],
    'no-useless-return': 'off',
    'block-spacing': 'off',
    'vue/no-unused-components': 'off',
    'object-curly-spacing': 'off',
    'prefer-promise-reject-errors': 'off',
    'vue/no-side-effects-in-computed-properties':'off',
    'comma-dangle': 'error',
    'vue/require-valid-default-prop': 'off',
    'vue/no-unused-vars': 'off',
    'vue/no-use-v-if-with-v-for': 'off',
    'vue/require-prop-type-constructor': 'off',
    'no-mixed-operators': 'off',
    'vue/no-reserved-keys': 'off',
    'vue/require-v-for-key': 'off',
    'vue/valid-v-for': 'off',
    'vue/valid-v-if':'off',
    'vue/valid-v-model': 'off'
  },
  'overrides': [
    {
      'files': ['*.vue'],
      'rules': {
        'indent': 'off'
      }
    }
  ],
  parserOptions: {
    parser: 'babel-eslint'
  }
}

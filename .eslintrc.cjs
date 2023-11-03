module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  settings: {
    'import/resolver': {
      typescript: true,
      node: true,
    }
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript',
    'plugin:security/recommended',
    'plugin:vitest/recommended',
    'plugin:jsdoc/recommended',
  ],
  plugins: [
    'import',
    '@typescript-eslint',
    'vue',
    'security',
    'vitest',
    'jsdoc',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2021,
  },
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    'import/no-extraneous-dependencies': ['off', { devDependencies: ['**/*.test.js', '**/*.spec.js', '*.{js,ts,cjs}'] }],
    'import/extensions': 'off',
    'no-var': 'error',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'comma-dangle': ['error', 'only-multiline'],
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
  },
};

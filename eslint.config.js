import antfu from '@antfu/eslint-config'

export default antfu(
  {
    typescript: true,
    ignores: ['**/dist', '**/bench/fixtures'],
  },
  {
    files: ['**/__tests__/**'],
    rules: {
      'no-restricted-globals': 'off',
      'antfu/no-import-dist': 'off',
      'ts/no-var-requires': 'off',
      'ts/no-require-imports': 'off',
      'unused-imports/no-unused-vars': 'off',
    },
  },
  {
    rules: {
      'no-console': 'warn',
    },
  },
)

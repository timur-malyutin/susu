export default {
  extends: ['@commitlint/config-conventional'],
  parserPreset: './commitlint-parser.mjs',
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'Feat',
        'Fix',
        'Docs',
        'Style',
        'Refactor',
        'Perf',
        'Test',
        'Chore',
        'Starter',
      ],
    ],
    'type-case': [2, 'always', 'pascal-case'],
    'subject-empty': [2, 'never'],
    'type-empty': [2, 'never'],
    'subject-case': [0, 'always'],
  },
}

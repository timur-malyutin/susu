export default {
  hooks: {
    'pre-commit': 'lint-staged',
    'commit-msg': 'commitlint --edit "$1"',
  },
}

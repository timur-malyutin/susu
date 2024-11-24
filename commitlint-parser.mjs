export default {
  parserOpts: {
    headerPattern: /^\[([A-Z][a-z]+)(?:]\[([A-Z][a-z]+))?] (.+)$/,
    headerCorrespondence: ['type', 'secondType', 'subject'],
  },
}

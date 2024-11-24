export default {
  parserOpts: {
    headerPattern: /^\[(\d+)]\[(\w+)] (.+)$/,
    headerCorrespondence: ['idShort', 'type', 'subject'],
  },
}

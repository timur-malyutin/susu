import removeCommentsRule from './remove-comments.js'
import templateStringQuotesRule from './template-string-quotes.js'

const customRulesPlugin = {
  rules: {
    'remove-comments': removeCommentsRule,
    'template-string-quotes': templateStringQuotesRule,
  },
}

export default customRulesPlugin

const removeCommentsRule = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Removes comments from the code',
      category: 'Stylistic Issues',
      recommended: false,
    },
    fixable: 'code',
    schema: [],
  },
  create(context) {
    const sourceCode = context.getSourceCode()

    return {
      Program() {
        const comments = sourceCode.getAllComments()

        comments.forEach(comment => {
          context.report({
            loc: comment.loc,
            message: 'Delete comment',
            fix(fixer) {
              return fixer.remove(comment)
            },
          })
        })
      },
    }
  },
}

export default removeCommentsRule

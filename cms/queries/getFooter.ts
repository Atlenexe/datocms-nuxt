export default gql
  `query getFooter {
    footer {
      elements {
        content {
          content(markdown: true)
        }
      }
    }
  }`;
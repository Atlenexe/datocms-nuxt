export default gql
    `query getHeader {
        header {
        title
        contact {
          contactType
          contactContent
        }
        categories {
          name
          route
        }
    }
  }`;
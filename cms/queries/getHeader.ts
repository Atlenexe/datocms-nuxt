export default gql
    `query getHeader {
        header {
        id
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
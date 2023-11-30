export default gql
    `query getHeader {
        header {
        title
        contact {
          contactType
          contactContent
          isEmail
        }
        categories {
          name
          route
        }
    }
  }`;
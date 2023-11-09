export default gql
    `query get_header {
        header {
        id
        title
        contact {
          contactType
          contactContent
        }
        tags {
          name
          route
        }
    }
  }`;
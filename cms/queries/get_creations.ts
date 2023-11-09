export default gql
    `query get_creations {
    allCreations(orderBy: _createdAt_DESC) {
      id
      title
      img {
        url
      }
    }
  }`;
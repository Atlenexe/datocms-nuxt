export default gql
    `query get_all_creations {
    allCreations(orderBy: _createdAt_DESC) {
      id
      title
      img {
        url
      }
    }
  }`;
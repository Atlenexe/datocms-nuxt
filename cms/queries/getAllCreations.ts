export default gql
    `query getAllCreations {
    allCreations(orderBy: _createdAt_DESC) {
      id
      title
      img {
        url
      }
    }
  }`;
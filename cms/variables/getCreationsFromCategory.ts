export default gql
    `query getCreationsFromTag($categoryId: ItemId) {
    allCreations(orderBy: _createdAt_DESC, filter: {category: {eq: $categoryId}}) {
      id
      title
      img {
        url
      }
      category {
        name
        route
      }
    }
  }`;
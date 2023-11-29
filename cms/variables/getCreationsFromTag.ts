export default gql
    `query getCreationsFromTag($tagId: ItemId) {
    allCreations(orderBy: _createdAt_DESC, filter: {tag: {eq: $tagId}}) {
      id
      title
      img {
        url
      }
      tag {
        name
        route
      }
    }
  }`;
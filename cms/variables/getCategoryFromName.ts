export default gql
    `query getTagFromName($categoryName: String) {
  category(filter: {route: {eq: $categoryName}}) {
    id
    name
  }
}`;
export default gql
    `query getTagFromName($tagName: String) {
  tag(filter: {route: {eq: $tagName}}) {
    id
    name
  }
}`;
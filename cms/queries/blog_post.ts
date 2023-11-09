export default gql
  `query bloc_post {
  allArticles {
    id
    _status
    _firstPublishedAt
    title
    content(markdown: true)
  }
  _allArticlesMeta {
    count
  }
}`;
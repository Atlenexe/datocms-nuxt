export default gql
  `query getMainPage {
    mainPage {
      title
    }
      
    allCreations(orderBy: _createdAt_DESC) {
      id
      title
      img {
        url
      }
      creationDate
    }
  }`;
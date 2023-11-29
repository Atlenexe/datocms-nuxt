export default gql
  `query getAboutPage {
    aboutPage {
      title
        content(markdown: true)
      }
  }`;
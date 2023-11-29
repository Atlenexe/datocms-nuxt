export default gql
  `query getSeo {
    _site {
      globalSeo {
        siteName
        fallbackSeo {
          description
        }
      }
      locales
    }
  }`;
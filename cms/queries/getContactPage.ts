export default gql
    `query getContactPage {
    contactPage {
      contacts {
        isEmail
        contactContent
        contactType
      }
      content(markdown: true)
    }
  }`;
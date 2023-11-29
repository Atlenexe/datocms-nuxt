export default gql
    `query getContactPage {
    contactPage {
      title
      content(markdown: true)
      contacts {
        isEmail
        contactContent
        contactType
      }
    }
  }`;
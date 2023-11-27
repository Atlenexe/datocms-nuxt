export default gql
    `query get_contact_page {
    contactPage {
      contacts {
        isEmail
        contactContent
        contactType
      }
      content(markdown: true)
    }
  }`;
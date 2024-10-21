import ContactItem from "./ContactItem";

const ContactList = ({ contacts }) => {
  return (
    <>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} {...contact} />
      ))}
    </>
  );
};

export default ContactList;

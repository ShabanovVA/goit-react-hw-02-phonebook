import { ContactItem } from "./ContactItem";

export const ContactList = ({contacts}) => {
      return (
    <ul>
      {contacts.map(contact => {
        const { id, name, number } = contact;
        return (
            <ContactItem
            // id={id}
            name={name}
            number={number}>
            </ContactItem>
        );
      })}
    </ul>
  );
}
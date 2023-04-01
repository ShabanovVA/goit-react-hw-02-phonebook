import { ContactItem } from "./ContactItem";

export const ContactList = ({contacts, onDeleteContact}) => {
      return (
    <ul>
      {contacts.map(contact => {
        const { id, name, number } = contact;
        return (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
            onDeleteContact={onDeleteContact}>
            </ContactItem>
        );
      })}
    </ul>
  );
}
import { ContactItem } from "./ContactItem";

export const ContactList = ({contacts}) => {
      return (
    <ul>
      {contacts.map(contact => {
        const { id, name, number } = contact;
        return (
            <ContactItem
                // key={nanoid()}
            // id={id}
            name={name}
            number={number}>
            </ContactItem>
        );
      })}
    </ul>
  );
}
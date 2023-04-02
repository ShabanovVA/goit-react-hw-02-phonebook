import { ContactItem } from "../ContactItem/ContactItem";
import PropTypes from 'prop-types';

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

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
}
export const ContactList = ({contacts}) => {
      return (
    <ul>
      {contacts.map(contact => {
        const { id, name, number } = contact;
        return (
          <li
            key={id}
            id={id}
            name={name}
            number={number}
          ></li>
        );
      })}
    </ul>
  );
}

export const ContactList = ({ listsContact, onDelete }) => {
  return (
    <ul>
      {listsContact.map(contact => (
        <li key={contact.number}>
          {' '}
          <p>{contact.name}</p> <p>{contact.number}</p>{' '}
          <button type="button" onClick={() =>( onDelete(contact.number))} > Delete</button>{' '}
        </li>
      ))}
    </ul>
  );
};

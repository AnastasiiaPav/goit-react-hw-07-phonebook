import PropTypes from 'prop-types';
import { ContactListItem } from './ContactListItem';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts &&
        contacts.map(({ name, phone, id }) => {
          return (
            <li key={id}>
              <ContactListItem
                name={name}
                number={phone}
                deleteContact={deleteContact}
                id={id}
              />
            </li>
          );
        })}
    </ul>
  );
};


ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      phone: PropTypes.string,
      id: PropTypes.string,
    })
  ),
  onDelete: PropTypes.func,
};

import PropTypes from 'prop-types';
import { ContactListItem } from './ContactListItem';
import { useDispatch } from 'react-redux';
import { deleteThunk } from 'Redux/contactsActions';


export const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();

  const deleteUser = userId => {
    dispatch(deleteThunk(userId));
  };
  return (
    <ul>
      {contacts &&
        contacts.map(({ name, phone, id }) => {
          return (
            <li key={id}>
              <ContactListItem
                name={name}
                number={phone}
                deleteContact={deleteUser}
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

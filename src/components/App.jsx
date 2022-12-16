import { useDispatch, useSelector } from 'react-redux';
import { fetchThunk, AddThunk, deleteThunk } from 'Redux/contactsActions';
import { useEffect } from 'react';
import { Loader } from './Loader';
import { filter } from 'Redux/filterSlise';
import { Form } from './FormApp';
import { ContactList } from './ContactList';
import { Filter } from './Filter';

export const App = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filterVal = useSelector(state => state.filter.value);
  const loading = useSelector(state => state.contacts.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchThunk());
  }, [dispatch]);

  const filterInput = event => {
    dispatch(filter(event.target.value));
  };

  const onFilterSearch = () => {
    const inputSearch = filterVal.toLowerCase();
    if (contacts?.length !== []) {
      const filtContact = contacts.filter(contact =>
        contact.name.toLowerCase().includes(inputSearch)
      );
      return filtContact;
    }
  };

  const deleteUser = userId => {
    dispatch(deleteThunk(userId));
  };

  const dataFormSubmit = ({ ...data }) => {
    const searchName = contacts.map(contact => contact.name);
    const searchNumber = contacts.map(contact => contact.phone);

    if (searchName.includes(data.name)) {
      alert(`${data.name} уже есть в Вашем списке контактов`);
      return;
    }
    if (searchNumber.includes(data.phone)) {
      alert(`В Вашем списке контактов уже есть номер ${data.number}`);
      return;
    }
    dispatch(AddThunk(data));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <Form onSubmit={dataFormSubmit} />
      <h2>Contacts</h2>
      <Filter onChange={filterInput} value={filterVal} />
      {loading ? (
        <Loader />
      ) : (
        <ContactList
          contacts={onFilterSearch()}
          deleteContact={deleteUser}
        />
      )}
    </div>
  );
};

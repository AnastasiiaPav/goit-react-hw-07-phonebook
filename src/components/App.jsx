import { useDispatch, useSelector } from 'react-redux';
import { fetchThunk } from 'Redux/contactsActions';
import { useEffect } from 'react';
import { Loader } from './Loader';
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


  const onFilterSearch = () => {
    const inputSearch = filterVal.toLowerCase();
    if (contacts?.length !== []) {
      const filtContact = contacts.filter(contact =>
        contact.name.toLowerCase().includes(inputSearch)
      );
      return filtContact;
    }
  };



  return (
    <div>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter value={filterVal} />
      {loading ? (
        <Loader />
      ) : (
        <ContactList
          contacts={onFilterSearch()}
        />
      )}
    </div>
  );
};

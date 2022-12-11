import { useState, useEffect } from 'react';
import { Form } from './FormApp';
import { ContactList } from './ContactList';
import { Filter } from './Filter';

export const App = () => {
  const [contacts, setContacts] = useState(()=> {
    const contactStorage = localStorage.getItem('contacts');
    const contactParse = JSON.parse(contactStorage);
    return contactParse || []
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    if (contacts.length === 0) {
      return;
    }
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const filterInput = event => {
    setFilter(event.target.value);
  };

  const onFilterSearch = () => {
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  const deleteUser = userId => {
    setContacts([...contacts.filter(contact => contact.number !== userId)]);
    // this.setState( prevState => ({
    //   contacts: prevState.contacts.filter(contact => contact.number !== userId)
    // }))
  };

  const dataFormSubmit = data => {
    const searchName = contacts.map(contact => contact.name);
    if (searchName.includes(data.name)) {
      alert('Не получится добавить такое имя:(');
    } else {
      setContacts([data, ...contacts]);
    }
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <Form onSubmit={dataFormSubmit} />
      <h2>Contacts</h2>
      <Filter onChange={filterInput} value={filter} />
      <ContactList listsContact={onFilterSearch()} onDelete={deleteUser} />
    </div>
  );
};

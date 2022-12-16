import { Box } from './App.styled';
import propTypes from 'prop-types';
import { useState } from 'react';


export const  Form = ({onSubmit}) => {
  const [ name, setName] = useState('')
  const [ phone, setPhone] = useState('')

const  inputChange = event => {
  switch (event.target.name) {
    case 'name':
      setName(event.target.value);
      break;

    case 'number':
      setPhone(event.target.value);
      break;

    default: break
  }
  };

 const formSubmit = event => {
    event.preventDefault();
   onSubmit({name, phone});
  reset();
  };

 const reset = () => {
   setName('')
   setPhone('')
  };


 
    return (
      <form onSubmit={formSubmit}>
        <Box>
          <label >
            Name:{' '}
            <input
              type="text"
              name="name"
              value={name}
              onChange={inputChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label >
            Number:{' '}
            <input
              type="tel"
              name="number"
              value={phone}
              onChange={inputChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type="submit"> Add contact🆕</button>
        </Box>
      </form>
    );
  }


Form.propTypes = {
  state: propTypes.object,
  name: propTypes.string,
  number: propTypes.number,
  formSubmit: propTypes.func,
  inputChange: propTypes.func,
}
import { Box } from './App.styled';
import { nanoid } from "nanoid";

const { Component } = require('react');


export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  inputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  formSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  nameInputId = nanoid();
  numberInputId = nanoid()

  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <Box>
          <label htmlFor={this.nameInputId}>
            Name:{' '}
            <input
            id={this.nameInputId}
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.inputChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label htmlFor={this.numberInputId}>
            Number:{' '}
            <input
            id={this.numberInputId}
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.inputChange}
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
}

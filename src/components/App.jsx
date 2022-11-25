import { Component } from 'react';
import { Form } from './FormApp';

class Application extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  dataFormSubmit = data => {
    console.log(data);

  };

  render() {
    return <Form onSubmit={this.dataFormSubmit} />;
  }
}

export const App = () => {
  return <Application />;
};

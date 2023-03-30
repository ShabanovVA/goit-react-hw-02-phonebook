import { Component } from "react";
import {Form} from "./Form";
import { ContactList } from "./ContactList";
export class App extends Component {
state = {
  contacts: [],
  name: '',
  number: '',
  }
  
  createContact = data => {
    this.setState(prevState => {
      return { contacts: [...prevState.contacts,data] };
    });
  };

  render() {
    return (
      <>
        <Form onClickSubmit={this.createContact} />
        <h2>Contacts</h2>
        <ContactList contacts={this.state.contacts} />
      </>
    )
  }
}
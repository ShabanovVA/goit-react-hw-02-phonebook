import { Component } from "react";
import {Form} from "./Form";
import { ContactList } from "./ContactList";
import { Filter } from "./Filter";

export class App extends Component {
state = {
  contacts: [],
  filter: '',
  name: '',
  number: '',
  }
  
  createContact = data => {
    this.setState(prevState => {
      return { contacts: [...prevState.contacts,data] };
    });
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  }
  render() {
    const { contacts, filter } = this.state;
    return (
      <>
        <Form onClickSubmit={this.createContact} />
        <Filter valueFilter={filter} onChange={this.changeFilter} />
        <h2>Contacts</h2>
        <ContactList contacts={contacts} />
      </>
    )
  }
}
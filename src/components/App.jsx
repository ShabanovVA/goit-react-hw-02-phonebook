import { Component } from "react";
import {Form} from "./Form";
// import { ContactList } from "./ContactList";
export class App extends Component {
state = {
  contacts: [],
  // name: '',
  // number: ''
  }
  
  createContact = data => {
    console.log(data);
    this.setState(prevState => {
      return { contacts: [data, ...prevState.contacts] };
    });
  };
  // handleChange = (e) => {
  //   const { name, value } = e.currentTarget;
  //   this.setState({ [name]:value })
  // };

  // handleSubmit = (e) => {
  //   e.preventDefault()
    // this.setState((prevState) => ({ contacts: [...prevState.contacts,this.state.name,this.state.number] }))  
    // this.setState({ name: '', number:''});
  // };

  render() {
    return (
      <><Form onClickSubmit={this.createContact} />
      <h2>Contacts</h2>
      <p>{[this.state.contacts]}</p></>
    )
  }
}
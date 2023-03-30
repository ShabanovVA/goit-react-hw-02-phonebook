import { nanoid } from 'nanoid';
import React, { Component }  from 'react';

export class Form extends Component{
    state = {
      name: '',
      number: ''
    }
  
      handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]:value, id:nanoid() })
    };
    
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.onClickSubmit(this.state);
      this.reset();
  };
  
  reset = () => {
    this.setState({ name: '', number:''})

  }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            value={this.state.number}
            onChange={this.handleChange}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>);
    }
}
// import { nanoid } from "nanoid";

// export const ContactList = ({ contacts }) => {
//     return (
//         <ul>Contacts:{contacts.map(contact => {
//             console.log(contact)
//             const {name, number } = contact;
//             return (<li key={nanoid()}>
//                 <p>{name}:{number}</p>
//             </li>)
//         })}</ul>
//     )
// }
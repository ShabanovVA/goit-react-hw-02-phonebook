import { Component } from "react";

export class ContactItem extends Component{
    render() {
        const { id, name, number, onDeleteContact } = this.props;
        return (
            < li key={id}>
                <p>{name}:</p>
                <p>{number}</p>
                <button type="button" onClick={()=>onDeleteContact(id)}>Delete</button>
            </li >);
        
}
}
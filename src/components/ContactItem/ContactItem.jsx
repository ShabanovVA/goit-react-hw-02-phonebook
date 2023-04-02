import { Component } from "react";
import PropTypes from 'prop-types';

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

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};
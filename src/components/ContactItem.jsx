import { nanoid } from "nanoid";
import { Component } from "react";

export class ContactItem extends Component{
    render() {
        return (
            < li key={nanoid()}>
                <p>{this.props.name}:</p>
                <p>{this.props.number}</p>
            </li >);
        
}
}
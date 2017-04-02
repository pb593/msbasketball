import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom'
import {Form, FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';

class NewParticipantPage extends Component {

    constructor (props) {
        super(props);
        this.addNewParticipant = this.addNewParticipant.bind(this);
    }

    addNewParticipant (event) {
        event.preventDefault();
        let loginInput = ReactDOM.findDOMNode(this.nameInput);
        let emailInput = ReactDOM.findDOMNode(this.emailInput);
        this.props.addParticipant(loginInput.value, emailInput.value);
        loginInput.value = '';
        emailInput.value = '';
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addNewParticipant}>
                    <FormGroup controlId="formInlineName">
                        <ControlLabel>Name</ControlLabel>
                        {' '}
                        <FormControl type="text" ref={(input) => { this.nameInput = input; }} />
                    </FormGroup>
                    {' '}
                    <FormGroup controlId="formInlineEmail">
                        <ControlLabel>Email</ControlLabel>
                        {' '}
                        <FormControl type="email" ref={(input) => { this.emailInput = input; }} />
                    </FormGroup>
                    {' '}
                    <Button type="submit">
                        Send
                    </Button>
                </form>
            </div>
        )
    }
}

NewParticipantPage.propTypes = {
    addParticipant: PropTypes.func.isRequired
};

export default NewParticipantPage
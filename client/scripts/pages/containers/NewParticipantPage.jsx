import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { createParticipant } from '../../actions/ParticipantActions';
import NewParticipant from "../components/NewParticipantPage"
import Loading from "../components/LoadingPage"


class NewParticipantPage extends Component {

    constructor (props) {
        super(props);
        this.state = {ready: true};
        this.addNewParticipant = this.addNewParticipant.bind(this);
    }

    addNewParticipant (name, email) {
        this.props.createParticipant(name, email);
    }

    render() {
        return this.state.ready
            ? <NewParticipant
                addParticipant={this.addNewParticipant}
            />
            : <Loading/>;
    }
}


export default connect(
    (state, props) => ({
        participants: state.participants
    }),
    dispatch => ({createParticipant: bindActionCreators(createParticipant, dispatch)})
)(NewParticipantPage)
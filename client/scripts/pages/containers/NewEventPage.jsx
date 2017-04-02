import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { createEvent } from '../../actions/EventActions';
import NewEvent from "../components/NewEventPage"
import Loading from "../components/LoadingPage"


class NewEventPage extends Component {

    constructor (props) {
        super(props);
        this.state = {ready: true};
        this.addNewEvent = this.addNewEvent.bind(this);
    }

    addNewEvent (dateTime) {
        this.props.createEvent(dateTime);
    }

    render() {
        return this.state.ready
            ? <NewEvent
                addEvent={this.addNewEvent}
            />
            : <Loading/>;
    }
}


export default connect(
    (state, props) => ({
        events: state.events
    }),
    dispatch => ({createEvent: bindActionCreators(createEvent, dispatch)})
)(NewEventPage)
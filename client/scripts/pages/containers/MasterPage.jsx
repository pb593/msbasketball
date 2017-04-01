import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { requestEventsTableData } from '../../actions/EventActions';
import EventsTable from "../components/EventsTable"
import Loading from "../components/LoadingPage"


class MasterPage extends Component {

    constructor (props) {
        super(props);
        this.state = {ready: false};
    }

    componentDidMount() {
        this.props.requestTableData().then(() => this.setState({ready: true}));
    }

    componentWillReceiveProps (nextProps) {
        this.events = nextProps.events;
        this.participants = nextProps.participants;
    }

    render() {
        return this.state.ready
            ? <EventsTable
                events={this.events}
                participants={this.participants}
            />
            : <Loading/>
    }
}


export default connect(
    (state, props) => ({
        events: state.events,
        participants: state.participants
    }),
    dispatch => ({requestTableData: bindActionCreators(requestEventsTableData, dispatch)})
)(MasterPage)
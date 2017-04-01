import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Events from "../components/EventsPage"
import Loading from "../components/LoadingPage"
import { listEvents } from '../../actions/EventActions';


const products = [{
    id: 1,
    name: "Product1",
    price: 120
}, {
    id: 2,
    name: "Product2",
    price: 80
}];

class EventsPage extends Component {

    constructor (props) {
        super(props);
        this.state = {ready: false};
    }

    componentDidMount() {
        this.props.listEvents().then(() => this.setState({ready: true}));
    }

    componentWillReceiveProps (nextProps) {
        if (nextProps.events) {
            this.events = nextProps.events;
        }
    }

    render() {
        return this.state.ready
            ? <Events
                events={this.events}
            />
            : <Loading/>
    }
}

export default connect(
    (state, props) => ({events: state.events}),
    dispatch => ({listEvents: bindActionCreators(listEvents, dispatch),})
)(EventsPage)
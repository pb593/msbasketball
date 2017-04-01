import React, { Component, PropTypes } from 'react';

import Events from "../components/EventsPage"

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
        this.state = {ready: true};
    }

    componentDidMount() {
        // this.props.getTaskData(this.taskId).
        // then(() => this.setState({ready: true}));
    }

    componentWillReceiveProps (nextProps) {
        // if (nextProps.task) {
        //     this.task = nextProps.task;
        // }
    }

    render() {
        return this.state.ready
            ? <Events
                products={products}
            />
            : <Temporary/>
    }
}

export default EventsPage;

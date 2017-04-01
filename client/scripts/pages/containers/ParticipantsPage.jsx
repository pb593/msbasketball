import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Participants from "../components/ParticipantsPage"
import Loading from "../components/LoadingPage"
import { listParticipants } from '../../actions/ParticipantActions';


class ParticipantsPage extends Component {

    constructor (props) {
        super(props);
        this.state = {ready: false};
    }

    componentDidMount() {
        this.props.listParticipants().then(() => this.setState({ready: true}));
    }

    componentWillReceiveProps (nextProps) {
        if (nextProps.participants) {
            this.participants = nextProps.participants;
        }
    }

    render() {
        return this.state.ready
            ? <Participants
                participants={this.participants}
            />
            : <Loading/>
    }
}

export default connect(
    (state, props) => ({participants: state.participants}),
    dispatch => ({listParticipants: bindActionCreators(listParticipants, dispatch),})
)(ParticipantsPage)
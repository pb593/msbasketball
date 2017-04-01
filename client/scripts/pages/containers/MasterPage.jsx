import React, { Component, PropTypes } from 'react';

import Participants from "../containers/ParticipantsPage"
import Events from "../containers/EventsPage"


class MasterPage extends Component {
    render() {
        return <div>
            <Participants/>
            <Events/>
        </div>
    }
}

export default MasterPage;
import React, { Component, PropTypes } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';


const EventsTable = ({events, participants}) => {
    // lift up participant ids for O(1) search afterwards
    events = events.map((event) => {
        event.participants = event.signUps.reduce((result, signup) => {
            result[signup.participantId] = signup;
            return result;
        }, {});
        return event
    });

    const resultTable = participants.map(
        (participant) => {
            // fill in participant's signup status for each event
            return events.reduce((result, event) => {
                if (participant.id in event.participants)
                    result[event.datetime] = event.participants[participant.id].status;
                else
                    result[event.datetime] = "Out";
                return result;
            }, {"Participant": participant.name});
        }
    );

    // create "The table" using first column template
    const tableColumns = Object.keys(resultTable[0]).map((key, index) => {
        if (index == 0)
            return <TableHeaderColumn key={index} isKey={true} dataField={key}>{key}</TableHeaderColumn>;
        else
            return <TableHeaderColumn key={index} dataField={key}>{key}</TableHeaderColumn>;
    });
    return (
        <BootstrapTable data={resultTable} striped hover condensed>
            {tableColumns}
        </BootstrapTable>
    )
};


EventsTable.propTypes = {
    events: PropTypes.array.isRequired
};

export default EventsTable
import React, { Component, PropTypes } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';


const EventsTable = ({events, participants}) => {
    const participantCols = [
        <TableHeaderColumn isKey dataField='name'>Name</TableHeaderColumn>,
        <TableHeaderColumn dataField='balance'>Balance</TableHeaderColumn>
    ];
    //fixme: Join events and participants on signup
    const eventCols = events.map((event) => (
        <TableHeaderColumn dataField={"" + event.id}>{event.datetime}</TableHeaderColumn>
    ));
    return (
        <BootstrapTable data={participants} striped hover condensed>
            {participantCols.concat(eventCols)}
        </BootstrapTable>
    )
};


EventsTable.propTypes = {
    events: PropTypes.array.isRequired
};

export default EventsTable
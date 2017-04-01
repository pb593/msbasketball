import React, { Component, PropTypes } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';


const Events = ({events}) => {
    return (
        <BootstrapTable data={events} striped hover>
            <TableHeaderColumn isKey dataField='datetime'>Event time</TableHeaderColumn>
            <TableHeaderColumn dataField='id'>Event Id</TableHeaderColumn>
            <TableHeaderColumn dataField='fullPrice'>Event price</TableHeaderColumn>
        </BootstrapTable>
    )
};


Events.propTypes = {
    events: PropTypes.array.isRequired
};

export default Events
import React, { Component, PropTypes } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';


const Participants = ({participants}) => {
    return (
        <BootstrapTable data={participants} striped hover>
            <TableHeaderColumn isKey dataField='id'>Id</TableHeaderColumn>
            <TableHeaderColumn dataField='name'>Name</TableHeaderColumn>
            <TableHeaderColumn dataField='balance'>Balance</TableHeaderColumn>
        </BootstrapTable>
    )
};


Participants.propTypes = {
    participants: PropTypes.array.isRequired
};

export default Participants
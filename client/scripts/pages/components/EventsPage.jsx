import React, { Component, PropTypes } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';


const Events = ({products}) => {
    return (
        <BootstrapTable data={products} striped hover>
            <TableHeaderColumn isKey dataField='id'>AAAA ID</TableHeaderColumn>
            <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
            <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
        </BootstrapTable>
    )
};


Events.propTypes = {
    products: PropTypes.array.isRequired
};

export default Events
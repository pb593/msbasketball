 import React, { Component, PropTypes } from 'react';
import { Link, IndexLink } from 'react-router'
import { connect } from 'react-redux';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

const products = [{
 id: 1,
 name: "Product1",
 price: 120
}, {
 id: 2,
 name: "Product2",
 price: 80
}];

class MasterPage extends Component {
  render () {
    return (
      <BootstrapTable data={products} striped hover>
        <TableHeaderColumn isKey dataField='id'>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
      </BootstrapTable>
    )
  }
}

export default connect(
  state => ({})
)(MasterPage)

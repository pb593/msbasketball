import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import LayoutPage from '../pages/containers/LayoutPage'


const Routers = () => (
  <Router>
    <Route path="/" component={ LayoutPage }/>
  </Router>
);

export default connect(
    state => ({})
)(Routers);

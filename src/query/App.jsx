import React from 'react';
import {connect} from 'react-redux';

import Nav from '../common/Nav.jsx'
import List from './List.jsx';
import Bottom from "./Bottom";
import './App.css';

function App(props) {
    // const {
    //
    // } = props;

    return (
        <div>
            <Nav />
            <List />
            <Bottom />
        </div>
    )
}

export default connect(
    function mapStateToProps(state) {
        return state;
    },
    function mapDispatchToProps(dispatch) {
        return {dispatch};
    }
)(App);

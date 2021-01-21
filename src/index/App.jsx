import React, {useCallback} from 'react';
import {connect} from 'react-redux';
import './App.css';

import Header from '../common/Header.jsx';
import DepartDate from "./DepartDate";
import HighSpeed from "./HighSpeed";
import Journey from "./Journey";
import Submit from "./Submit";

function App(props) {

    const onBack = useCallback(() => {
        window.history.back();
    }, [])

    return (
        <div>
            <div className="header-wrapper">
                <Header title="火车票" onBack={onBack}/>
            </div>
            <Journey />
            <DepartDate />
            <HighSpeed />
            <Submit />
        </div>
    )
}

export default connect(
    function mapStateToProps(state) {
        return {}
    },
    function mapDispatchToProps(dispatch) {
        return {}
    }
)(App);

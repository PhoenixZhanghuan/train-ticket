import React, {useCallback, useEffect} from 'react';
import {connect} from 'react-redux';
import URI from 'urijs';
import dayjs from 'dayjs';

import './App.css';
import {h0} from '../common/fp';
import useNav from "../common/useNav";
import {
    nextDate,
    prevDate,
    setArriveDate,
    setArriveStation,
    setArriveTimeStr,
    setDepartDate,
    setDepartStation,
    setDepartTimeStr,
    setDurationStr,
    setSearchParsed,
    setTickets,
    setTrainNumber
} from './actions';
import Header from '../common/Header';
import Nav from '../common/Nav';

function App(props) {
    const {
        departDate,
        arriveDate,
        departTimeStr,
        arriveTimeStr,
        departStation,
        arriveStation,
        trainNumber,
        durationStr,
        tickets,
        isScheduleVisible,
        searchParsed,
        dispatch
    } = props;

    const onBack = useCallback(() => {
        window.history.back();
    }, [])

    useEffect(() => {
        const queries = URI.parseQuery(window.location.search);
        const {aStation, dStation, date, trainNumber} = queries;

        dispatch(setDepartStation(dStation));
        dispatch(setArriveStation(aStation));
        dispatch(setTrainNumber(trainNumber));
        dispatch(setDepartDate(h0(dayjs(date).valueOf())));
        dispatch(setSearchParsed(true));
    }, []);

    useEffect(() => {
        document.title = trainNumber;
    }, [trainNumber])

    useEffect(() => {
        if (!searchParsed) {
            return;
        }
        const url = new URI('/rest/ticket')
            .setSearch('date', dayjs(departDate).format('YYYY-MM-DD'))
            .setSearch('trainNumber', trainNumber)
            .toString();

        fetch(url)
            .then(response => response.json())
            .then(result => {
                const {
                    detail,
                    candidates
                } = result;

                const {
                    departTimeStr,
                    arriveTimeStr,
                    arriveDate,
                    durationStr
                } = detail;

                dispatch(setDepartTimeStr(departTimeStr))
                dispatch(setArriveTimeStr(arriveTimeStr))
                dispatch(setArriveDate(arriveDate))
                dispatch(setDurationStr(durationStr))
                dispatch(setTickets(candidates))
            })

    }, [searchParsed, departDate, trainNumber])
    const {isPrevDisabled, isNextDisabled, prev, next} = useNav(
        departDate,
        dispatch,
        prevDate,
        nextDate
    );

    if (!searchParsed) {
        return null;
    }

    return (
        <div className="app">
            <div className="header-wrapper">
                <Header title={trainNumber} onBack={onBack}/>
            </div>
            <div className="nav-wrapper">
                <Nav
                    date={departDate}
                    isPrevDisabled={isPrevDisabled}
                    isNextDisabled={isNextDisabled}
                    prev={prev}
                    next={next}
                />
            </div>
        </div>
    )
}

export default connect(
    function mapStateToProps(state) {
        return state;
    },
    function mapDispatchToProps(dispatch) {
        return {dispatch}
    }
)(App);

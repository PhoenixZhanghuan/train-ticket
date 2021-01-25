import React, {memo} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import leftPad from "left-pad";
import './Schedule.css';

const ScheduleRow = memo(function ScheduleRow(props) {
    const {
        index,
        station,
        arriveTime,
        departTime,
        stay,

        isStartStation,
        isEndStation,
        isDepartStation,
        isArriveStation,
        beforeDepartStation,
        afterArriveStation
    } = props;
    return (
        <li>
            <div className={classnames('icon', {
                'icon-red': isDepartStation || isArriveStation
            })}>
                {
                    isDepartStation
                        ? '出'
                        : isArriveStation
                        ? '到'
                        : leftPad(index, 2, 0)
                }
            </div>
            <div className={classnames('row', {
                grey: beforeDepartStation || afterArriveStation
            })}>
                <span className={classnames('station', {
                    red: isArriveStation || isDepartStation
                })}>
                    {station}
                </span>
                <span className={classnames('arrtime', {
                    red: isArriveStation,
                })}>
                    {
                        isStartStation ? '始发站' : arriveTime
                    }
                </span>
                <span className={classnames('deptime', {
                    red: isDepartStation,
                })}>
                    {
                        isEndStation ? '终到站' : departTime
                    }
                </span>
                <span className="stoptime">
                    {
                        isStartStation || isEndStation ? '-' : stay + '分'
                    }
                </span>
            </div>
        </li>
    )
})

const Schedule = memo(function Schedule(props) {
    const {
        date,
        trainNumber,
        departStation,
        arriveStation
    } = props;
    return (
        <div className="schedule">

        </div>
    )
});

export default Schedule;

Schedule.propTypes = {
    date: PropTypes.number.isRequired,
    trainNumber: PropTypes.string.isRequired,
    departStation: PropTypes.string.isRequired,
    arriveStation: PropTypes.string.isRequired,
};


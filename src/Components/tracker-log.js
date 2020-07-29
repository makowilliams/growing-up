import React from 'react';
import moment from 'moment';
//import { GrowingContext } from '../growing-up-context';

export default class TrackerLog extends React.Component {
    render() {
        return (
            <div className="feed-log-container">
                <div className="icon">{this.props.sleep_type}</div>
                <p className="duration">{this.props.duration}</p>
                <p className="time">
                    {moment(this.props.date).format('h:mma')}
                </p>
            </div>
        );
    }
}

import React from 'react';
import moment from 'moment';

export default class TrackerLog extends React.Component {
    render() {
        return (
            <div className="feed-log-container">
                <div className="icon">
                    {this.props.sleep_type
                        ? this.props.sleep_type
                        : this.props.food_type}
                </div>
                <p className="duration">{this.props.duration}</p>
                <p className="time">
                    {moment(this.props.date).format('h:mma')}
                </p>
                <p className="date">
                    {moment(this.props.date).format('MMM Do')}
                </p>
            </div>
        );
    }
}

import React from 'react';

export default class TimerLog extends React.Component {
    render() {
        return (
            <div className="feed-log-container">
                <div className="icon">L</div>
                <p className="duration">15 Min</p>
                <p className="time">3:58PM</p>
            </div>
        );
    }
}

import React from 'react';

export default class Timer extends React.Component {
    render() {
        return (
            <div className="timer-container">
                <p className="timer">02:35</p>
                <p className="last-feed">Last feed was at 5:00PM</p>
            </div>
        );
    }
}

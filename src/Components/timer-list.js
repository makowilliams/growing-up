import React from 'react';
import TimerLog from './timer-log';

export default class TimerList extends React.Component {
    render() {
        return (
            <div className="feed-list-container">
                <TimerLog />
                <TimerLog />
                <TimerLog />
                <TimerLog />
                <TimerLog />
            </div>
        );
    }
}

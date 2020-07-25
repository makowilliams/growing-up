import React from 'react';
import TrackerLog from './tracker-log';

export default class TrackerList extends React.Component {
    render() {
        return (
            <div className="feed-list-container">
                <TrackerLog />
                <TrackerLog />
                <TrackerLog />
                <TrackerLog />
                <TrackerLog />
            </div>
        );
    }
}

import React from 'react';
import TrackerLog from './tracker-log';
import { GrowingContext } from '../growing-up-context';

export default class TrackerList extends React.Component {
    render() {
        return (
            <GrowingContext.Consumer>
                {(context) => {
                    <ul className="feed-log-container">
                        {context.sleepData.map((item) => {
                            return (
                                <div className="feed-list-container">
                                    <TrackerLog {...item} />
                                </div>
                            );
                        })}
                    </ul>;
                }}
            </GrowingContext.Consumer>
        );
    }
}

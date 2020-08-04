import React from 'react';
import TrackerLog from './tracker-log';
import GrowingContext from '../growing-up-context';
//import TokenService from '../token-service';

export default class TrackerList extends React.Component {
    static contextType = GrowingContext;

    componentDidMount() {
        this.context.getUserInfo().then(() => {
            this.context.getChildInfo().then((currentChildren) => {
                currentChildren.map((child) => {
                    this.context.getSleepData(child.id);
                    this.context.getFeedingData(child.id);
                });
            });
        });
    }

    render() {
        console.log('sleepData', this.context.sleepData);
        const data =
            this.context.type === 'feeding'
                ? this.context.feedingData
                : this.context.sleepData;
        return (
            <ul className="feed-log-container">
                {data.map((item) => {
                    return (
                        <li key={item.id} className="feed-list-container">
                            <TrackerLog {...item} />
                        </li>
                    );
                })}
            </ul>
        );
    }
}

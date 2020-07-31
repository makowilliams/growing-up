import React from 'react';
import TrackerLog from './tracker-log';
import GrowingContext from '../growing-up-context';
import TokenService from '../token-service';

console.log('fixed?');
export default class TrackerList extends React.Component {
    static contextType = GrowingContext;

    componentDidMount() {
        //const id = this.props.params.child_id;

        const currentChild =
            this.context.currentChild !== '' ? this.context.currentChild : 1;

        this.context.getSleepData(currentChild, () => {});

        if (!this.context.user_id) {
            // get user info fetch
            this.context.getUserInfo();
        }
    }

    render() {
        return (
            <ul className="feed-log-container">
                {this.context.sleepData.map((item) => {
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

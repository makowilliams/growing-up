import React from 'react';
import TrackerLog from './tracker-log';
import GrowingContext from '../growing-up-context';
//import TokenService from '../token-service';

console.log('merged')
export default class TrackerList extends React.Component {
    static contextType = GrowingContext;

    render() {
        let displayData = '';
        if (this.props.type === 'feeding') {
            displayData = this.context.feeding;
        } else {
            displayData = this.context.sleeping;
        }
        if(!displayData) {
            return <div>Please add a session</div>
        }
        return (
            <ul className="feed-log-container">
                {displayData.map((item) => {
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

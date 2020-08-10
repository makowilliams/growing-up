import React from 'react';
import TrackerLog from './tracker-log';
import GrowingContext from '../growing-up-context';
//import TokenService from '../token-service';

export default class TrackerList extends React.Component {
    static contextType = GrowingContext;

    render() {
        if (!this.props.type) {
            return <div>getting data</div>;
        }

        let displayData = '';
        if (!displayData) {
            if (this.props.child) {
                if (this.props.type === 'feeding') {
                    displayData = this.context.feeding;
                } else {
                    displayData = this.context.sleeping;
                }
            } else if (this.context.currentChild) {
                if (this.props.type === 'feeding') {
                    displayData = this.context.currentChild.eating;
                } else {
                    displayData = this.context.currentChild.sleeping;
                }
            }
        }

        return (
            <ul className="feed-log-container">
                {!displayData
                    ? ''
                    : displayData.map((item) => {
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

import React from 'react';
import TrackerLog from './tracker-log';
import GrowingContext from '../growing-up-context';

export default class TrackerList extends React.Component {
    static contextType = GrowingContext;

    render() {
        let displayData = '';
        if (!displayData) {
            if (this.props.child) {
                if (this.props.type === 'feeding') {
                    displayData = this.props.child.eating;
                } else {
                    displayData = this.props.child.sleeping;
                }
            } else if (this.context.currentChild) {
                if (this.props.type === 'feeding') {
                    displayData = this.context.currentChild.eating;
                } else {
                    displayData = this.context.currentChild.sleeping;
                }
            } else return <div>Please add a session</div>;
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

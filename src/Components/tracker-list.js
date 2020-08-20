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
            <table className="tracking-table">
                <tr>
                    <th className="table-header" >Sleep Type</th>
                    <th className="table-header">Duration</th>
                    <th className="table-header">Time</th>
                    <th className="table-header">Date</th>
                </tr>
                {!displayData
                    ? ''
                    : displayData.map((item) => {
                          return (
                              <TrackerLog
                                  key={item.id}
                                  className="feed-list-container"
                                  {...item}
                              />
                          );
                      })}
            </table>
        );
    }
}

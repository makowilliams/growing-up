import React from 'react';
import moment from 'moment';
import DeleteSession from './delete-session';

export default class TrackerLog extends React.Component {
    render() {
        return (
            <tr>
                <td className="type">
                    {this.props.sleep_type
                        ? this.props.sleep_type
                        : this.props.food_type}
                </td>
                <td className="duration">{this.props.duration}</td>
                <td className="time">
                    {moment(this.props.date).format('h:mma')}
                </td>
                <td className="date">
                    {moment(this.props.date).format('MMM Do')}
                </td>
            </tr>
            // <DeleteSession session={this.props}/>
        );
    }
}

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
                </div>
                <p className="duration">{this.props.duration}</p>
                <p className="time">
                    {moment(new Date(this.props.date)).format('h:mma')}
                </p>
                <p className="date">
                    {moment(new Date(this.props.date)).format('MMM Do')}
                </p>
                <DeleteSession session={this.props} />
            </div>
//                 </td>
//                 <td className="duration">{this.props.duration}</td>
//                 <td className="time">
//                     {moment(this.props.date).format('h:mma')}
//                 </td>
//                 <td className="date">
//                     {moment(this.props.date).format('MMM Do')}
//                 </td>
//             </tr>
            // <DeleteSession session={this.props}/>
        );
    }
}

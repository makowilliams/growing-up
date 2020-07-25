import React from 'react';
import { Link } from 'react-router-dom';

export default class StopButton extends React.Component {
    render() {
        return (
            <Link to="/tracking/feeding" className="feed-stop long-button">
                Stop Feeding
            </Link>
        );
    }
}

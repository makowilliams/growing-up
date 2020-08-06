import React from 'react';
import { Link } from 'react-router-dom';

export default class StartButton extends React.Component {
    render() {
        return (
            
            <Link to="/tracking/sleeping/active" className="feed-start">
                Start Sleep
            </Link>
        );
    }
}

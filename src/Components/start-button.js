import React from 'react';
import { Link } from 'react-router-dom';

export default class StartButton extends React.Component {
    render() {
        return (
            <>
                {this.props.type === 'feeding' ? (
                    <Link
                        to="/tracking/feeding/active"
                        className="feed-start start-button"
                    >
                        Start Feeding
                    </Link>
                ) : (
                    <Link
                        to="/tracking/sleeping/active"
                        className="feed-start start-button"
                    >
                        Start Sleep
                    </Link>
                )}
            </>
        );
    }
}

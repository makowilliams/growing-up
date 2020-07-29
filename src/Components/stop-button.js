import React from 'react';
import { Link } from 'react-router-dom';

export default class StopButton extends React.Component {
    submitFeeding(e) {
        e.preventDefault();
        console.log('feeding');
    }

    submitSleep(e) {
        e.preventDefault();
        console.log('sleeping');
    }

    render() {
        return (
            <>
                {this.props.type === 'feeding' ? (
                    <Link
                        onClick={this.submitFeeding}
                        to="/tracking/feeding"
                        className="feed-stop long-button"
                    >
                        Submit Feeding
                    </Link>
                ) : (
                    <Link
                        onClick={this.submitSleep}
                        to="/tracking/sleeping"
                        className="feed-stop long-button"
                    >
                        Submit Sleep
                    </Link>
                )}
            </>
        );
    }
}

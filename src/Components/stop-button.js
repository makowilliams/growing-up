import React from 'react';
import { Link } from 'react-router-dom';

export default class StopButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    submitFeeding(e) {
        e.preventDefault();
        let { duration, date, food_type, side_fed } = this.props.context;
        let feedingData = {
            type: this.props.type,
            duration: duration,
            date: date,
            food_type: food_type,
            side_fed: side_fed
        };
        console.log(feedingData);
    }

    submitSleep(e) {
        e.preventDefault();
        let { duration, date, sleep_type, sleep_category } = this.props.context;
        let feedingData = {
            type: this.props.type,
            duration: duration,
            date: date,
            sleep_type: sleep_type,
            sleep_category: sleep_category
        };
        console.log(feedingData);
    }

    render() {
        return (
            <>
                {this.props.type === 'feeding' ? (
                    <Link
                        onClick={this.submitFeeding.bind(this)}
                        to="/tracking/feeding"
                        className="feed-stop long-button"
                    >
                        Submit Feeding
                    </Link>
                ) : (
                    <Link
                        onClick={this.submitSleep.bind(this)}
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

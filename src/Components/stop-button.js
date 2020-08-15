import React from 'react';
import { Link } from 'react-router-dom';
import config from '../config';
import GrowingContext from '../growing-up-context';
import TokenService from '../token-service';

export default class StopButton extends React.Component {
    static contextType = GrowingContext;
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            error_opts: [
                'Please start timer',
                'Please select a feeding type',
                'Please select a sleep type',
                'Please select a feeding length'
            ]
        };
    }

    submitFeeding(e) {
        e.preventDefault();
        this.setState({ error: null });
        let { duration, date, food_type, side_fed } = this.context;
        if (this.context.duration === '') {
            this.setState({ error: this.state.error_opts[0] });
        } else if (!food_type) {
            this.setState({ error: this.state.error_opts[1] });
        } else {
            let sessionData = {
                type: 'eating',
                duration: duration,
                date: date,
                food_type: food_type,
                side_fed: side_fed
            };
            this.postData(sessionData);
        }
    }

    submitSleep(e) {
        e.preventDefault();
        this.setState({ error: null });
        let { duration, date, sleep_type, sleep_category } = this.context;
        if (this.context.duration === '') {
            this.setState({ error: this.state.error_opts[0] });
        } else if (!sleep_type) {
            this.setState({ error: this.state.error_opts[2] });
        } else if (!sleep_category) {
            this.setState({ error: this.state.error_opts[3] });
        } else {
            let sessionData = {
                type: this.context.type,
                duration: duration,
                date: date,
                sleep_type: sleep_type,
                sleep_category: sleep_category
            };
            this.postData(sessionData);
        }
    }

    postData = (data) => {
        let childId = this.context.currentChild.id;
        return fetch(`${config.API_ENDPOINT}/${data.type}/all/${childId}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(data)
        })
            .then((res) => {
                if (!res.ok) {
                    return res.json().then((error) => {
                        throw error;
                    });
                }
                return res.json();
            })
            .then((returnData) => {
                this.context.updateSession(returnData, data.type);
                window.history.back();
            })
            .catch((error) => {
                this.setState({
                    error:
                        'Sorry, the session did not add. Please try again later.'
                });
            });
    };

    render() {
        const { error } = this.state;
        return (
            <>
                {this.context.type === 'feeding' ? (
                    <Link
                        onClick={this.submitFeeding.bind(this)}
                        to="/tracking/feeding"
                        className="feed-stop submit-button"
                    >
                        Submit Feeding
                    </Link>
                ) : (
                    <Link
                        onClick={this.submitSleep.bind(this)}
                        to="/tracking/sleeping"
                        className="feed-stop submit-button"
                    >
                        Submit Sleep
                    </Link>
                )}
                <div role="alert">
                    {error && <p className="error">{error}</p>}
                </div>
            </>
        );
    }
}

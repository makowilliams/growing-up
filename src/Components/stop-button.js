import React from 'react';
import { Link } from 'react-router-dom';
import config  from '../config';
//import TokenService from '../services/token-service';

export default class StopButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null
        };
    }

    submitFeeding(e) {
        e.preventDefault();
        this.setState({ error: null });
        let { duration, date, food_type, side_fed } = this.props.context;
        let feedingData = {
            type: 'eating',
            duration: duration,
            date: date,
            food_type: food_type,
            side_fed: side_fed
        };
        console.log(feedingData);
        this.postData(feedingData);
    }

    submitSleep(e) {
        e.preventDefault();
        this.setState({ error: null });
        let { duration, date, sleep_type, sleep_category } = this.props.context;
        let feedingData = {
            type: this.props.type,
            duration: duration,
            date: date,
            sleep_type: sleep_type,
            sleep_category: sleep_category
        };
        console.log(feedingData);
        this.postData(feedingData);
    }

    postData = (data) => {
        //still need to get childId somehow
        let childId = 1
        return fetch(`${config.API_ENDPOINT}/${data.type}/all/${childId}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1OTYxMzc1NDgsInN1YiI6InRlc3RfdyJ9.SGR7XQl2Y_1gX6ZFzuZYyANAUsblMGyz0cLXNkONhJM'
                //add back in once there is a login function
                //authorization: `bearer ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify(data)
        }).then(res => {
            if (!res.ok) {
                return res.json().then(error => {
                    throw error;
                });
            }
            return res.json();
        })
        .then(returnData => {
            console.log('success', returnData)
            //add data to client - implement the add Session function
            // this.context.addSession();
            // this.props.history.goBack();
        })
        .catch(error => {
            this.setState({ error: 'Sorry, the session did not add. Please try again later.' });
        });
    };

    render() {
        const { error } = this.state;
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
                <div role="alert">{error && <p className="error">{error}</p>}</div>
            </>
        );
    }
}

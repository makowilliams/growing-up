import React from 'react';
import { Link } from 'react-router-dom';
import config  from '../config';
import GrowingContext from '../growing-up-context'
//import TokenService from '../services/token-service';
console.log('fix context')
export default class StopButton extends React.Component {
    static contextType = GrowingContext;
    constructor(props) {
        super(props);
        this.state = {
            error: null
        };
    }

    submitFeeding(e) {
        e.preventDefault();
        this.setState({ error: null });
        let { duration, date, food_type, side_fed } = this.context;
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
        let { duration, date, sleep_type, sleep_category } = this.context;
        let feedingData = {
            type: this.context.type,
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
                authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1OTYxNzAxODgsInN1YiI6InRlc3RfdyJ9.PIjYRpRwUYchmsx9RiMx3b14CIp5ghQam6NJQPIlse8'
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
            //not sure if this is working...might need to write a function
            if(data.type === 'sleeping'){
                this.context.sleepData.push(returnData);
            } else this.context.feedingData.push(returnData);
        })
        .catch(error => {
            this.setState({ error: 'Sorry, the session did not add. Please try again later.' });
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

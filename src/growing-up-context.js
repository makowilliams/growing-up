import React, { createContext } from 'react';
import config from './config';
import TokenService from './token-service';

const GrowingContext = React.createContext({
    type: '',
    sleepData: [],
    currentUser: '',
    currentChild: '',
    feedingData: [],
    duration: '',
    date: '',

    updateContext: () => {},
    login: () => {},
    postUser: () => {},
    getUser: () => {},
    getSleepData: () => {},
    getUserInfo: () => {},
    getChildInfo: () => {},
    updateDuration: () => {},
    updateDate: () => {},
    updateType: () => {},
});

export default GrowingContext;

export class GrowingContextProvider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            type: '',
            sleepData: [],
            currentUser: '',
            currentChild: '',
            feedingData: [],
            duration: '',
            date: ''
        };

        this.updateContext = this.updateContext.bind(this);
        this.updateDuration = this.updateDuration.bind(this);
        this.updateDate = this.updateDate.bind(this);
        this.updateType = this.updateType.bind(this);
    }

    login = (credentials) => {
        return fetch(`${config.API_ENDPOINT}/auth/login`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(credentials)
        }).then((res) => {
            return !res.ok
                ? res.json().then((e) => Promise.reject(e))
                : res.json();
        });
    };

    postUser = (user) => {
        return fetch(`${config.API_ENDPOINT}/users`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then((res) => {
            return !res.ok
                ? res.json().then((e) => Promise.reject(e))
                : res.json();
        });
    };

    getUserInfo = (cb) => {
        fetch(`${config.API_ENDPOINT}/users`, {
            headers: {
                //authorization: `bearer ${TokenService.getAuthToken()}`,
                authorization:
                    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1OTYxMzc1NDgsInN1YiI6InRlc3RfdyJ9.SGR7XQl2Y_1gX6ZFzuZYyANAUsblMGyz0cLXNkONhJM'
            }
        })
            .then((res) => res.json())
            .then((currentUser) => {
                console.log('current user', currentUser);
                this.setState(
                    {
                        currentUser
                    }
                    //not sure what cb() means or what it is trying to set
                    //cb(currentUser.id)
                );
            });
    };

    getChildInfo = (cb) => {
        fetch(`${config.API_ENDPOINT}/children`, {
            headers: {
                //authorization: `bearer ${TokenService.getAuthToken()}`,
                authorization:
                    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1OTYxMzc1NDgsInN1YiI6InRlc3RfdyJ9.SGR7XQl2Y_1gX6ZFzuZYyANAUsblMGyz0cLXNkONhJM'
            }
        })
            .then((res) => res.json())
            .then((currentChild) => {
                this.setState(
                    {
                        currentChild
                    },
                    cb(currentChild.id)
                );
            });
    };

    getSleepData = (childId, cb) => {
        return fetch(`${config.API_ENDPOINT}/sleeping/all/${childId}`, {
            headers: {
                //authorization: `bearer ${TokenService.getAuthToken()}`,
                authorization:
                    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1OTYxMzc1NDgsInN1YiI6InRlc3RfdyJ9.SGR7XQl2Y_1gX6ZFzuZYyANAUsblMGyz0cLXNkONhJM'
            }
        })
            .then((res) => res.json())

            .then((sleepData) => {
                this.setState(
                    {
                        sleepData
                    },
                    cb
                );
            })
            .catch((err) => console.error(err));
    };

    updateContext(newUpdate) {
        this.setState({...newUpdate});
    }

    updateDuration(item) {
        this.setState({duration: item})
    }
    updateDate(item) {
        this.setState({date: item})
    }
    updateType(item) {
        this.setState({type: item})
    }
    

    render() {
        console.log(this.state)
        return (
            <GrowingContext.Provider
                value={{
                    ...this.state,
                    updateContext: this.updateContext,
                    login: this.login,
                    postUser: this.postUser,
                    getUser: this.getUser,
                    getSleepData: this.getSleepData,
                    getUserInfo: this.getUserInfo,
                    getChildInfo: this.getChildInfo,
                    updateDuration: this.updateDuration,
                    updateDate: this.updateDate,
                    updateType: this.updateType,
                }}
            >
                {this.props.children}
            </GrowingContext.Provider>
        );
    }
}

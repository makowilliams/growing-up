import React, { createContext } from 'react';
import config from './config';
import TokenService from './token-service';

export const GrowingContext = createContext();

export default class GrowingContextProvider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            type: '',
            sleepData: [],
            currentUser: '',
            currentChild: ''
        };
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
                authorization: `bearer ${TokenService.getAuthToken()}`
            }
        })
            .then((res) => res.json())
            .then((currentUser) => {
                //console.log('current user', currentUser);
                this.setState(
                    {
                        currentUser
                    },
                    cb(currentUser.id)
                );
            });
    };

    getChildInfo = (cb) => {
        fetch(`${config.API_ENDPOINT}/children`, {
            headers: {
                authorization: `bearer ${TokenService.getAuthToken()}`
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
                authorization: `bearer ${TokenService.getAuthToken()}`
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
        const key = Object.keys(newUpdate);
        const value = Object.values(newUpdate);

        console.log('updateContext(newUpdate)', newUpdate);
        // {currentChild: 1}
        this.setState({
            ...this.state,
            ...newUpdate
        });
        // this.setState({
        //     [key[0]]: value[0]
        // });
    }

    render() {
        return (
            <GrowingContext.Provider
                value={{
                    ...this.state,
                    updateContext: this.updateContext.bind(this),
                    login: this.login,
                    postUser: this.postUser,
                    getUser: this.getUser,
                    getSleepData: this.getSleepData,
                    getUserInfo: this.getUserInfo,
                    getChildInfo: this.getChildInfo
                }}
            >
                {this.props.children}
            </GrowingContext.Provider>
        );
    }
}
